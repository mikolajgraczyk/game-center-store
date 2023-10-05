import { NextResponse } from "next/server";
import connect from "../../../../db";
import Post from "../../../../models/games";

export const GET = async (request) => {
  try {
    await connect();
    const games = await Post.find();
    return new NextResponse(JSON.stringify(games), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching posts" + error, { status: 500 });
  }
};
