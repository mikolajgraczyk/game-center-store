import { Document } from 'mongoose';

export interface Review {
  userId: string;
  score: number;
}

export interface IGame extends Document {
  name: string;
  price: number;
  discount?: number;
  cover_photo: string;
  variant: 'BASE GAME' | 'DLC' | 'DEMO';
  description: string;
  genres: string[];
  features: string[];
  details: {
    dev: string;
    publisher: string;
    releaseDate: Date;
    platforms: ('windows' | 'mac')[];
  };
  reviews: Review[];
  highlightedFeatures?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
