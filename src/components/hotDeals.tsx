import { Game } from '@/constants/types';
import { useQuery } from '@tanstack/react-query';
import { fetchGames } from '@/scripts/fetchGames';
import { queryKeys } from '@/constants/queryKeys';
import { createNumberArray } from '@/scripts/arrayMethods';
import { useTranslations } from 'next-intl';
import GameTile from '@/components/gameTile';
import GameTileSkeleton from '@/components/gameTileSkeleton';

const Wrapper = ({ children }: { children?: React.ReactNode }) => {
  const t = useTranslations('hotDeals');

  return (
    <>
      <span className="text-[24px] font-[700] text-texts-hotDeals">{t('Hot deals')}</span>
      <div className="grid gap-[60px] grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {children}
      </div>
    </>
  );
};

const HotDeals = () => {
  const t = useTranslations('hotDeals');

  const { isLoading, isError } = useQuery({
    queryKey: queryKeys.fetchGames,
    queryFn: fetchGames,
  });

  const data: any = [];

  if (isLoading) {
    return (
      <Wrapper>
        {createNumberArray(7).map((item) => (
          <GameTileSkeleton key={item} />
        ))}
      </Wrapper>
    );
  }

  if (isError) {
    return (
      <>
        <Wrapper />
        <div className="mt-[25%] text-center">
          <span className="text-[32px] font-[700] text-texts-anErrorOccurred">
            {t('An error occurred')}
          </span>
        </div>
      </>
    );
  }

  return (
    <Wrapper>
      {data && data.length ? (
        <>
          {data.map((game: Game) => (
            <div key={game._id}>
              <GameTile game={game} />
            </div>
          ))}
        </>
      ) : (
        <span className="text-[20px] font-[700] text-texts-hotDeals">
          {t('No games available')}
        </span>
      )}
    </Wrapper>
  );
};

export default HotDeals;
