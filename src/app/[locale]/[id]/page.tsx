'use client';

import { useTranslations } from 'next-intl';
import { useQuery } from '@tanstack/react-query';
import { redirect } from 'next/navigation';
import fetchGames from '@/scripts/fetchGames';
import queryKeys from '@/constants/queryKeys';
import routes from '@/constants/routes';
import { Game } from '@/constants/types';
import GameInsightHub from '@/components/gameInsightHub';
import PurchasePanel from '@/components/purchasePanel';

interface IGamePage {
  params: { id: number | string };
}

function gamePage({ params }: IGamePage) {
  const t = useTranslations('gamePage');

  const { isLoading, isError, data } = useQuery({
    queryKey: queryKeys.fetchGames,
    queryFn: () => fetchGames(),
  });

  if (isLoading) {
    return <span>LOADING</span>;
  }

  if (data) {
    const selectedGame = data.find((game: Game) => game._id === params.id);

    if (!selectedGame) redirect(routes.homePage);

    return (
      <main className="pt-[130px] px-[100px] max-w-[1600px] h-[100%] w-[100%] text-texts-main flex gap-[64px]">
        <div className="w-[100%] h-[100%]">
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
        </div>
      </main>
    );
  }
}

export default gamePage;
