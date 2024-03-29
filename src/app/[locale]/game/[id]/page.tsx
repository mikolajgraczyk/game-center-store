'use client';

import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import fetchGame from '@/apiUrls/game';
import queryKeys from '@/constants/queryKeys';
import ErrorWrapper from '@/components/errorWrapper';
import useGetErrorMessage from '@/hooks/useGetErrorMessage';
import GameInsightHub from '@/components/gameInsightHub';
import PurchasePanel from '@/components/purchasePanel';
import GameInfoHub from '@/components/gameInfoHub';
import Icon from '@/components/icon';
import GamePhotoSlider from '@/components/gamePhotoSlider';
import StarRating from '@/components/starRating';

interface IGamePage {
  params: { id: number | string };
}

function GamePage({ params }: IGamePage) {
  const { getErrorMessage } = useGetErrorMessage();
  const t = useTranslations('gamePage');

  const gameId = params.id || '';

  const { isLoading, error, data } = useQuery({
    queryKey: queryKeys.fetchGame(gameId),
    queryFn: () => fetchGame(gameId),
    refetchOnWindowFocus: false,
    gcTime: 0,
    enabled: Boolean(gameId),
  });

  function getPlatformIcon(platforms: ('windows' | 'mac')[]): JSX.Element[] {
    return platforms.map((platform) => <Icon key={platform} name={platform} />);
  }

  if (isLoading) {
    return (
      <div className="mt-[20%]">
        <Icon name="loader" />
      </div>
    );
  }

  if (error) {
    return <ErrorWrapper>{getErrorMessage(error)}</ErrorWrapper>;
  }

  if (data) {
    const { game } = data;
    const releaseDate = new Date(game.details.releaseDate);

    return (
      <main className="py-[50px] px-[40px] w-[100%] max-w-[1500px] mx-[auto] text-texts-main grid gap-y-[64px] gap-x-[32px] tablet:gap-y-[20px] mobile:py-[15px] mobile:px-[20px]">
        <div className="col-span-2 tablet:col-span-1">
          <span className="text-[50px] tracking-[-1px] mobile:text-[36px]">{game.name}</span>
          <div className="mt-[15px] h-[20px] gap-[10px] flex items-center">
            <div className="w-[131px] grid grid-cols-[100px,1fr] gap-[5px]">
              <StarRating score={game.score} />
              <div className="bg-backgrounds-white bg-opacity-10 text-texts-main text-[12px] py-[2px] px-[4px] font-[700] rounded-[4px] tracking-[1px] text-center">
                {game.score}
              </div>
            </div>
            <div className="flex gap-[20px] mobile:hidden">
              {game.highlightedFeatures.map((feature: string) => (
                <span key={feature}>{feature}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[100%] max-w-[1000px]">
          <GamePhotoSlider photos={game.preview_photos} />
          <div className="mt-[50px] tablet:mt-[25px]">
            <span className="tracking-[-0.4px] leading-[30px]">{game.description}</span>
          </div>
          <div className="grid grid-cols-2 mt-[50px] w-[100%] mobile:grid-cols-1 mobile:gap-[10px] tablet:mt-[25px]">
            <GameInsightHub title={t('Genres')} content={game.genres} />
            <GameInsightHub title={t('Features')} content={game.features} />
          </div>
        </div>
        <div className="flex flex-col justify-evenly tablet:items-end tablet:grid tablet:grid-cols-[1fr,1fr] tablet:gap-[24px] mobile:grid-cols-1 mobile:gap-[38px]">
          <PurchasePanel game={game} />
          <div className="w-[100%] max-w-[320px] text-texts-main mobile:max-w-none tablet:justify-self-end">
            <GameInfoHub title={t('Developer')} content={game.details.dev} />
            <GameInfoHub title={t('Publisher')} content={game.details.publisher} />
            <GameInfoHub title={t('Release Date')} content={releaseDate.toLocaleDateString()} />
            <GameInfoHub title={t('Platform')} content={getPlatformIcon(game.details.platforms)} />
          </div>
        </div>
      </main>
    );
  }
}

export default GamePage;
