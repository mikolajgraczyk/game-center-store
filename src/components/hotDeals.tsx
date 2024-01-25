import { useTranslations } from 'next-intl';
import { useQuery } from '@tanstack/react-query';
import { Game } from '@/types/game';
import fetchGames from '@/apiUrls/games';
import queryKeys from '@/constants/queryKeys';
import createNumberArray from '@/scripts/arrayMethods';
import GameTile from '@/components/gameTile';
import GameTileSkeleton from '@/components/gameTileSkeleton';
import ErrorWrapper from './errorWrapper';

interface IWrapper {
  children?: React.ReactNode;
}

function Wrapper({ children }: IWrapper) {
  const t = useTranslations('hotDeals');

  return (
    <>
      <span className="text-[24px] font-[700] text-texts-hotDeals">{t('Hot deals')}</span>
      <div className="grid gap-[60px] mt-[20px] grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {children}
      </div>
    </>
  );
}

function HotDeals() {
  const t = useTranslations();

  const { isLoading, isError, data } = useQuery({
    queryKey: queryKeys.fetchGames,
    queryFn: fetchGames,
  });

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
        <ErrorWrapper>{t('errors.DEFAULT_ERROR_MESSAGE')}</ErrorWrapper>
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
          {t('hotDeals.No games available')}
        </span>
      )}
    </Wrapper>
  );
}

export default HotDeals;
