import { NextRequest, NextResponse } from 'next/server';
import Game from '@models/game';
import connect from '@/libs/db';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'GAME_NOT_EXIST' }, { status: 404 });
  }

  await connect();

  try {
    const game = await Game.findOne({ _id: id });
    return NextResponse.json({ game }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'FAIL_LOADING_GAME' }, { status: 500 });
  }
}
