'use client';

import { useQuery } from '@tanstack/react-query';
import Loader from '@icons/Loader.svg';
import fetchGame from '@/apiUrls/game';
import queryKeys from '@/constants/queryKeys';
import ErrorWrapper from '@/components/errorWrapper';
import useGetErrorMessage from '@/hooks/useGetErrorMessage';

interface IGamePage {
  params: { id: number | string };
}

function GamePage({ params }: IGamePage) {
  const { getErrorMessage } = useGetErrorMessage();

  const gameId = params.id || '';

  const { isLoading, error, data } = useQuery({
    queryKey: queryKeys.fetchGame(gameId),
    queryFn: () => fetchGame(gameId),
    refetchOnWindowFocus: false,
    gcTime: 0,
    enabled: Boolean(gameId),
  });

  if (isLoading) {
    return (
      <div className="mt-[20%]">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <ErrorWrapper>{getErrorMessage(error)}</ErrorWrapper>;
  }

  if (data) {
    return (
      <main className="pt-[130px] px-[100px] max-w-[1600px] w-[100%] text-texts-main flex gap-[64px]">
        {/* <div className="w-[100%] h-[100%]">
          <span className="text-[50px] tracking-[-1px]">{selectedGame.name}</span>
          <div className="mt-[15px] flex gap-[15px]">
            <div>[average reviews]</div>
            <div className="flex gap-[20px]">
              {selectedGame.highlightedFeatures.map((feature: string) => (
                <span key={feature}>{feature}</span>
              ))}
            </div>
          </div>
          <div className=" w-[100%] aspect-video mt-[50px] bg-inputs-placeholder" />
          <div className="mt-[50px]">
            <span className="tracking-[-0.4px] leading-[30px]">{selectedGame.description}</span>
          </div>
          <div className="grid grid-cols-2 mt-[50px] w-[100%]">
            <GameInsightHub title={t('Genres')} content={selectedGame.genres} />
            <GameInsightHub title={t('Features')} content={selectedGame.features} />
          </div>
        </div>
        <div className="max-w-[320px] w-[100%]">
          <PurchasePanel selectedGame={selectedGame} />
        </div> */}
      </main>
    );
  }
}

export default GamePage;