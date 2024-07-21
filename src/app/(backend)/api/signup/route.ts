import { NextRequest } from "next/server";
import dbConnect from "@/lib/connect.mongo";
import UserModel from "@/models/user.model";
import ApiResponse from "@/types/ApiResponse";
import Encryptor from "@/lib/encryption";

export async function POST(request: NextRequest) {
  await dbConnect();
  try {
    const { username, email, password } = await request.json();
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser)
      return ApiResponse.error({
        success: false,
        message: "Email Already Registered",
        status: 400,
      });
    // hash password
    const hashedPassword = await Encryptor.encrypt(password);
    const dbCreationResponse = await UserModel.create({
      username,
      email,
      password: hashedPassword,
      isVerified: true, // TODO: Part of email based verification
    });

    return ApiResponse.success({
      message: "User Created Successfully",
      data: { dbCreationResponse },
      status: 201,
    });
  } catch (error) {
    console.error("Error registering user ", error);
    return ApiResponse.error({ message: "Something went wrong" });
  }
}
