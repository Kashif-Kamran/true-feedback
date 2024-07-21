import dbConnect from "@/lib/connect.mongo";
import encryptInstance from "@/lib/encryption";
import jwtCreatorInstance from "@/lib/json-web-token";
import UserModel from "@/models/user.model";
import ApiResponse from "@/types/ApiResponse";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const { email, password } = await req.json();
    const user = await UserModel.findOne({ email: email });
    if (!user)
      return ApiResponse.error({
        status: 400,
        message: "Incorrect Credentials : Email",
      });
    const isMatched = await encryptInstance.compare(password, user.password);
    if (!isMatched)
      return ApiResponse.error({
        status: 400,
        message: "Incorrect Credentials : Password",
      });
    //   generate jwt token
    const jwtPayload: JwtPayload = {
      aud: user.id,
      exp: Date.now() + 7 * 24 * 60 * 60,
      iat: Date.now(),
      sub: user.id,
    };
    const token = await jwtCreatorInstance.signToken(jwtPayload);
    return ApiResponse.success({
      message: "Logged in successfully",
      data: {
        token: token,
      },
    });
  } catch (error) {
    console.log("Error Occured /signin : ", error);
    return ApiResponse.error({ message: "Something went wrong" });
  }
}
