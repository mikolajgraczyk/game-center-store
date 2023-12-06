import { notFound } from 'next/dist/client/components/not-found';

const isDev = process.env.NODE_ENV === 'development';
const apiUrl = isDev
  ? 'http://localhost:3000/api/games'
  : 'game-center-store-c9e37hssb-mikolajgraczyk.vercel.app/api/games';

const fetchGames = async () => {
  const res = await fetch(apiUrl, { cache: 'no-store' });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
};

export default fetchGames;
