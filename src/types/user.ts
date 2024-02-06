import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  surname: string;
  age?: number;
  email: string;
  password: string;
}

export interface IRegisterUserData {
  name: string;
  surname: string;
  age?: number;
  email: string;
  password: string;
}

export interface IUserFormData extends IRegisterUserData {
  passwordConfirmation: string;
}
