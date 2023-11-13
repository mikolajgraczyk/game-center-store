import { NextResponse } from 'next/server';
import connect from '@/libs/db';
import Game from "../../../../models/game";

export const GET = async () => {
  try {
    await connect();
    const games = await Game.find();
    return new NextResponse(JSON.stringify(games), { status: 200 });
  } catch (error) {
    return new NextResponse('Error in fetching games' + error, { status: 500 });
  }
};
