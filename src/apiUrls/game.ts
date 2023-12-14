import apiUrl from '@/constants/apiUrl';

const fetchGame = async (id: string | number) => {
  const res = await fetch(`${apiUrl}/game?id=${id}`, { cache: 'no-store' });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || 'DEFAULT_ERROR_MESSAGE');
  }

  return data;
};

export default fetchGame;
