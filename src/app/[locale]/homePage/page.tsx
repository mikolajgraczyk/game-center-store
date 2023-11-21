'use client';
import { useTranslations } from 'next-intl';
import { useQuery } from '@tanstack/react-query';
import { fetchGames } from '@/scripts/fetchGames';
import { queryKeys } from '@/constants/queryKeys';

const HomePage = () => {
  const t = useTranslations('homePage');

  const { isLoading, isError, data } = useQuery({
    queryKey: queryKeys.fetchGames,
    queryFn: fetchGames,
  });

  if (isLoading) console.log('Ładowanie');
  if (data) console.log(data);
  if (isError) console.log('Błąd');

  return <p>{t('Home Page')}</p>;
};

export default HomePage;
