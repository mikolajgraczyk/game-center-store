import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Game } from '@/types/game';
import calculatePrice from '@/scripts/calculatePrice';
import useRoutes from '@/hooks/useRoutes';

interface IGameTile {
  game: Game;
}

function GameTile({ game }: IGameTile) {
  const { cover_photo, name, discount, price, _id } = game;

  const t = useTranslations('gameTile');
  const routes = useRoutes();

  const finalPrice = discount ? calculatePrice(discount, price) : price;

  return (
    <div className="flex-col space-y-[10px] mt-[20px] max-w-[200px] mobile:mx-auto">
      <Link href={`${routes.gamePage}/${_id}`}>
        <Image
          loader={() => cover_photo}
          src={cover_photo}
          alt={t('Game Poster')}
          width={200}
          height={265}
          className="w-[200px] h-[265px] object-cover"
          priority
          unoptimized
        />
      </Link>
      <span className="text-texts-gameName block text-[14px]">{name}</span>
      {discount ? (
        <div className="flex items-center justify-between text-[12px]">
          <div className="text-texts-gamePrice bg-backgrounds-discountElement py-[5px] px-[10px] rounded-[5px] flex items-center">
            -{discount}%
          </div>
          <span className="text-texts-gameOldPrice line-through">PLN {price}</span>
          <span className="text-texts-gamePrice">PLN {finalPrice}</span>
        </div>
      ) : (
        <span className="text-texts-gamePrice block text-[12px]">{finalPrice}</span>
      )}
    </div>
  );
}

export default GameTile;
