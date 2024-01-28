import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  surname: string;
  age: string;
  email: string;
  password: string;
}
