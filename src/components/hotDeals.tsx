import { Game } from '@/constants/types';
import { useQuery } from '@tanstack/react-query';
import { fetchGames } from '@/scripts/fetchGames';
import { queryKeys } from '@/constants/queryKeys';
import { createNumberArray } from '@/utils/arrayMethods';
import { useTranslations } from 'next-intl';
import GameTile from '@/components/gameTile';
import GameTileSkeleton from '@/components/gameTileSkeleton';

const HotDeals = () => {
  const t = useTranslations('hotDeals');

  const { isLoading, isError, data } = useQuery({
    queryKey: queryKeys.fetchGames,
    queryFn: fetchGames,
  });

  return (
    <>
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
            {createNumberArray(7).map((item) => (
              <GameTileSkeleton key={item} />
            ))}
          </>
        )}
      </div>
      {isError && (
        <div className="mt-[25%] text-center">
          <span className="text-[32px] font-[700] text-texts-anErrorOccurred">
            {t('An error occurred')}
          </span>
        </div>
      )}
    </>
  );
};

export default HotDeals;
