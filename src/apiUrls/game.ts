import apiUrl from '@/constants/apiUrl';

const fetchGame = async (id: string | number) => {
  const res = await fetch(`${apiUrl}/game?id=${id}`, { cache: 'no-store' });

  return res.json();
};

export default fetchGame;
