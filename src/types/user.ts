import { Document } from 'mongoose';

export interface User extends Document {
  name: string;
  surname: string;
  age: string;
  email: string;
  password: string;
}
