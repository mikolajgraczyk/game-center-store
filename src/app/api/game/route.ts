import { NextRequest, NextResponse } from 'next/server';
import Game from '@models/game';
import { FilterQuery } from 'mongoose';
import connect from '@/libs/db';
import { Game as TypeGame, Review } from '@/constants/types';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'GAME_NOT_EXIST' }, { status: 404 });
  }

  await connect();

  function parseData(gameData: FilterQuery<TypeGame>) {
    const { reviews, ...restData } = gameData._doc;
    const score = Number(
      (
        reviews.reduce((reviewA: number, reviewB: Review) => reviewA + reviewB.score, 0) /
        reviews.length
      ).toFixed(1),
    );

    return { ...restData, score };
  }

  try {
    const game = await Game.findOne({ _id: id });
    const parsedGame = parseData(game);
    return NextResponse.json({ game: parsedGame }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'FAIL_LOADING_GAME' }, { status: 500 });
  }
}
