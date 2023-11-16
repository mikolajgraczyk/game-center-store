'use client';
import { useTranslations } from 'next-intl';
import { useQuery } from '@tanstack/react-query';
import { fetchGames } from '@/scripts/fetchGames';

const HomePage = () => {
  const t = useTranslations('HomePage');

  const { isLoading, isError, data } = useQuery({ queryKey: ['games'], queryFn: fetchGames });

  if (isLoading) console.log('Ładowanie');
  if (data) console.log(data);
  if (isError) console.log('Błąd');

  return <p>{t('Home Page')}</p>;
};

export default HomePage;
