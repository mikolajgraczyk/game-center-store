import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Icon from './icon';
import useSlider from '@/hooks/useSlider';

interface IGamePhotoSlider {
  photos: string[];
}

function GamePhotoSlider({ photos }: IGamePhotoSlider) {
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);

  const t = useTranslations('gamePage');

  const {
    photosToMap,
    sliderPosition,
    sliderMaxPosition,
    selectedPhotoIndex,
    photosPerSlide,
    moveSlider,
    moveSelectedPhoto,
    onThumbnailClick,
  } = useSlider(photos);

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
        <div className="overflow-hidden max-w-[647px]">
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
