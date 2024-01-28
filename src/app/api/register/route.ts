import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import User from '@models/user';
import { IUser } from '@/types/user';

import connect from '@/libs/db';

export const POST = async (req: NextRequest) => {
  const { name, surname, age, email, password }: IUser = await req.json();

  if (!name || !surname || !age || !email || !password) {
    return NextResponse.json({ message: 'INVALID_USER_DATA' }, { status: 403 });
  }

  await connect();

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return NextResponse.json({ message: 'USER_EXISTS' }, { status: 422 });
  }

  const newUser = new User({ name, surname, age, email, password: hashedPassword });

  try {
    await newUser.save();
    return NextResponse.json({ message: 'USER_REGISTERED' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'USER_REGISTER_FAIL' }, { status: 500 });
  }
};
