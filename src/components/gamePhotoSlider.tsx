import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Icon from './icon';

interface IGamePhotoSlider {
  photos: string[];
}

function GamePhotoSlider({ photos }: IGamePhotoSlider) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);

  const t = useTranslations('gamePage');

  const photosPerSlide = 5;

  const thumbnailCardsNumber = Math.ceil(photos.length / photosPerSlide);
  const thumbnailsCards = Array.from({ length: thumbnailCardsNumber }, (v, k) => k + 1);

  const photosToMap = thumbnailsCards.map((card) => {
    const startIndex = (card - 1) * photosPerSlide;
    let endIndex = card * photosPerSlide;
    endIndex = endIndex > photos.length ? photos.length : endIndex;
    return photos.slice(startIndex, endIndex);
  });

  const sliderMaxPosition =
    (photos.length / photosPerSlide) % 1 === 0
      ? photos.length / photosPerSlide - 0.1
      : photos.length / photosPerSlide;

  function moveSlider(isForward: boolean) {
    if (isForward) {
      setSliderPosition((prev) => (prev + 1 >= sliderMaxPosition ? 0 : prev + 1));
      return;
    }
    if (sliderMaxPosition === 1) {
      return;
    }
    setSliderPosition((prev) => (prev - 1 < 0 ? Math.floor(sliderMaxPosition) : prev - 1));
  }

  function moveSelectedPhoto(isForward: boolean) {
    const lastPhoto = photos.length - 1;
    let newIndex;

    if (isForward) {
      newIndex = selectedPhotoIndex === lastPhoto ? 0 : selectedPhotoIndex + 1;
    } else {
      newIndex = selectedPhotoIndex === 0 ? lastPhoto : selectedPhotoIndex - 1;
    }

    setSelectedPhotoIndex(newIndex);
    setSliderPosition(Math.floor(newIndex / photosPerSlide));
  }

  function onThumbnailClick(index: number) {
    setSelectedPhotoIndex(() => index + sliderPosition * photosPerSlide);
  }

  return (
    <div className="w-full">
      <div
        className="overflow-hidden relative"
        onMouseEnter={() => setIsPhotoHovered(true)}
        onMouseLeave={() => setIsPhotoHovered(false)}
      >
        <motion.div
          className="flex h-full aspect-video"
          animate={{ translateX: `-${selectedPhotoIndex * 100}%` }}
          transition={{ type: 'tween', duration: 0.3 }}
        >
          {photos.map((photoURL) => (
            <Image
              key={photoURL}
              src={photoURL}
              height={0}
              width={0}
              unoptimized
              alt={t('Preview Photo')}
              className="w-full aspect-video"
            />
          ))}
        </motion.div>
        <AnimatePresence>
          {isPhotoHovered && (
            <>
              <motion.button
                type="button"
                className="absolute inset-y-0 right-0 bg-gradient-to-l from-buttons-slider px-[32px] mobile:px-[18px]"
                onClick={() => moveSelectedPhoto(true)}
                initial={{ x: 88 }}
                animate={{ x: 0 }}
                exit={{ x: 88 }}
                transition={{ type: 'tween', duration: 0.2 }}
              >
                <Icon name="sliderArrow" />
              </motion.button>
              <motion.button
                type="button"
                className="absolute inset-y-0 bg-gradient-to-r from-buttons-slider px-[32px] mobile:px-[18px]"
                onClick={() => moveSelectedPhoto(false)}
                initial={{ x: -88 }}
                animate={{ x: 0 }}
                exit={{ x: -88 }}
                transition={{ type: 'tween', duration: 0.2 }}
              >
                <div className="rotate-180">
                  <Icon name="sliderArrow" />
                </div>
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </div>
      <div className="aspect-[15.36/1] mt-[20px] flex gap-[8px] justify-between">
        <button
          disabled={sliderMaxPosition < 1}
          type="button"
          className="bg-buttons-slider p-[8px] self-center rounded-full hover:bg-buttons-slider/50 transition duration-200 disabled:opacity-30"
          onClick={() => moveSlider(false)}
        >
          <div className="rotate-180">
            <Icon name="sliderArrow" />
          </div>
        </button>
        <div className="overflow-hidden flex gap-[15px] w-full max-w-[647px]">
          <motion.div
            style={{ gridTemplateColumns: `repeat(${photosToMap.length}, auto)` }}
            className="h-full grid"
            animate={{ translateX: `-${sliderPosition * 647}px` }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            {photosToMap.map((photosArray) => (
              <div className="flex gap-[15px] w-[647px]" key={photosArray[0]}>
                {photosArray.map((photoURL, index) => {
                  const isSelected = index + photosPerSlide * sliderPosition === selectedPhotoIndex;

                  return (
                    <button
                      type="button"
                      key={photoURL}
                      className={`aspect-video relative ${
                        isSelected ? `` : `opacity-50`
                      } duration-300 hover:opacity-100`}
                      onClick={() => onThumbnailClick(index)}
                    >
                      <Image
                        src={photoURL}
                        alt={t('Preview Photo')}
                        className="rounded-[4px]"
                        fill
                        quality={1}
                        priority
                        unoptimized
                      />
                    </button>
                  );
                })}
              </div>
            ))}
          </motion.div>
        </div>
        <button
          disabled={sliderMaxPosition < 1}
          type="button"
          className="bg-buttons-slider p-[8px] self-center rounded-full hover:bg-buttons-slider/50 transition duration-200 disabled:opacity-30"
          onClick={() => moveSlider(true)}
        >
          <Icon name="sliderArrow" />
        </button>
      </div>
    </div>
  );
}

export default GamePhotoSlider;
