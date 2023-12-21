export interface Game {
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
  reviews: {
    userId: string;
    score: number;
  }[];
  highlightedFeatures?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  _id: string | number;
}
