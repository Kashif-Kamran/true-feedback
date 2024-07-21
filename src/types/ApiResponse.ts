import { stat } from "fs";
import { NextResponse } from "next/server";

// Can use defined status numbers as type
interface ApiResponseType {
  success?: boolean;
  message: string;
  data?: any;
  status?: number;
}

export default class ApiResponse {
  static success({ success = true, message, data, status }: ApiResponseType) {
    return NextResponse.json(
      { success, message, data },
      { status: status || 200 }
    );
  }

  static error({
    success = true,
    message = "Something went wrong",
    data,
    status,
  }: ApiResponseType) {
    return NextResponse.json(
      { success, data, message },
      { status: status || 500 }
    );
  }
}
