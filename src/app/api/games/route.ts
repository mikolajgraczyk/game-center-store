import { NextResponse } from "next/server";
import connect from "@/libs/db";

export const GET = async () => {
  try {
    await connect();
    return new NextResponse(JSON.stringify("ok"), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching posts" + error, { status: 500 });
  }
};
