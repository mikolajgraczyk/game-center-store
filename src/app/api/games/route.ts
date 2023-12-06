import { NextResponse, NextRequest } from 'next/server';
import Game from '@models/game';
import connect from '@/libs/db';

export const GET = async () => {
  try {
    await connect();
    const games = await Game.find();
    return new NextResponse(JSON.stringify(games), { status: 200 });
  } catch (error) {
    return new NextResponse(`Error in fetching games: ${error}`, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const contentType = req.headers.get('content-type');
    if (!contentType || contentType.indexOf('application/json') === -1) {
      return new NextResponse('Invalid Content-Type. Expected application/json', { status: 400 });
    }
    const data = await req.json();
    await connect();
    const newGame = new Game(data);
    await newGame.save();
    return new NextResponse(JSON.stringify(newGame), { status: 201 });
  } catch (error) {
    return new NextResponse(`Error in creating a new game: ${error}`, { status: 500 });
  }
};
