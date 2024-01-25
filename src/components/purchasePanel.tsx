import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Game } from '@/constants/types';
import calculatePrice from '@/scripts/calculatePrice';
import PopUp from './PopUp';
import LogInPopupContent from './LogInPopupContent';

type IPurchasePanel = {
  game: Game;
};

function PurchasePanel({ game }: IPurchasePanel) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const t = useTranslations('gamePage');

  const { variant, discount, price } = game;

  const finalPrice = discount ? calculatePrice(discount, price) : price;

  function buyGame() {
    const isLoggedIn = false;

    if (!isLoggedIn) {
      setIsPopupVisible(true);
    }
    // proceedPayment();
  }

  return (
    <>
      <div className="flex flex-col space-y-[10px]">
        <div className="bg-backgrounds-white bg-opacity-10 text-texts-main text-[9px] py-[5px] px-[10px] self-start text-center rounded-[4px] mobile:self-center">
          {variant}
        </div>
        {discount ? (
          <div className="flex items-center gap-[10px] text-[12px] mobile:self-center">
            <div className="text-texts-gamePrice bg-backgrounds-discountElement py-[5px] px-[10px] rounded-[5px] flex items-center">
              -{discount}%
            </div>
            <span className="text-texts-gameOldPrice line-through">PLN {price}</span>
            <span className="text-texts-gamePrice">PLN {finalPrice}</span>
          </div>
        ) : (
          <span className="text-texts-gamePrice block text-[12px] mobile:self-center">
            {finalPrice}
          </span>
        )}
        <button
          type="button"
          onClick={buyGame}
          className="py-[16px] w-[100%] text-[12px] rounded-[4px] bg-backgrounds-buyNowButton"
        >
          {t('BUY NOW')}
        </button>
        <button
          type="button"
          className="py-[14px] border-[1px] rounded-[4px] w-[100%] border-opacity-60 border-borders-buttons text-[12px]"
        >
          {t('ADD TO CART')}
        </button>
        <button
          type="button"
          className="py-[6px] border-[1px] rounded-[4px] w-[100%] border-opacity-60 border-borders-buttons text-[12px]"
        >
          {t('ADD TO WISHLIST')}
        </button>
      </div>
      {isPopupVisible && <PopUp content={<LogInPopupContent />} />}
    </>
  );
}

export default PurchasePanel;
