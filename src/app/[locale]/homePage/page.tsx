'use client';
import { useTranslations } from 'next-intl';
import { useQuery } from '@tanstack/react-query';
import { fetchGames } from '@/scripts/fetchGames';
import { queryKeys } from '@/constants/queryKeys';
import { Game } from '@/constants/types';
import GameTile from '@/components/gameTile';
import GameTileSkeleton from '@/components/gameTileSkeleton';

const HomePage = () => {
  const t = useTranslations('homePage');

  const { isLoading, isError, data } = useQuery({
    queryKey: queryKeys.fetchGames,
    queryFn: fetchGames,
  });

  return (
    <main className="w-screen py-[70px] px-[113px]">
      <span className="text-[24px] font-[700] text-texts-hotDeals">{t('Hot deals')}</span>
      <div className="grid gap-[60px] grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {data && (
          <>
            {data.map((game: Game) => (
              <div key={game._id}>
                <GameTile game={game} />
              </div>
            ))}
          </>
        )}
        {isLoading && (
          <>
            <GameTileSkeleton />
            <GameTileSkeleton />
            <GameTileSkeleton />
            <GameTileSkeleton />
            <GameTileSkeleton />
            <GameTileSkeleton />
            <GameTileSkeleton />
          </>
        )}
      </div>
    </main>
  );
};

export default HomePage;
