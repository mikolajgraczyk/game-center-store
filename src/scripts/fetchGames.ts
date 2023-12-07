import { notFound } from 'next/dist/client/components/not-found';
import apiUrl from '@/constants/apiUrl';

const fetchGames = async () => {
  const res = await fetch(`${apiUrl}/games`, { cache: 'no-store' });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
};

export default fetchGames;
