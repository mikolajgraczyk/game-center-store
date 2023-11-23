import { Game } from '@/constants/types';
import { calculatePrice } from '@/scripts/calculatePrice';

const GameTile = ({ game }: { game: Game }) => {
  const price = game.discount ? calculatePrice(game.discount, game.price) : game.price;

  return (
    <div className="flex-col space-y-[10px] mt-[20px] max-w-[200px]">
      <img src={game.cover_photo} alt="Game poster" className="w-[200px] h-[265px] object-cover" />
      <span className="text-texts-gameName block text-[14px]">{game.name}</span>
      {game.discount ? (
        <div className="flex items-center justify-between text-[12px]">
          <div className="text-texts-gamePrice bg-backgrounds-discountElement py-[5px] px-[10px] rounded-[5px] flex items-center">
            -{game.discount}%
          </div>
          <span className="text-texts-gameOldPrice line-through">PLN {game.price}</span>
          <span className="text-texts-gamePrice">PLN {price}</span>
        </div>
      ) : (
        <span className="text-texts-gamePrice block text-[12px]">{price}</span>
      )}
    </div>
  );
};

export default GameTile;
