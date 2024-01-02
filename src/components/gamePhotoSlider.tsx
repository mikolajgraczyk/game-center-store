import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Icon from './icon';

interface IGamePhotoSlider {
  photos: string[];
}

function GamePhotoSlider({ photos }: IGamePhotoSlider) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  return (
    <div className="w-full">
      <div className="overflow-hidden">
        <motion.div
          className="flex relative h-full aspect-video"
          animate={{ translateX: `-${selectedPhotoIndex * 100}%` }}
        >
          {photos.map((photoURL) => (
            <Image
              key={photoURL}
              src={photoURL}
              height={0}
              width={0}
              unoptimized
              alt="Preview Photo"
              className="w-full"
            />
          ))}
        </motion.div>
      </div>
      <div className="aspect-[15.36/1] mt-[20px] flex gap-[8px] justify-between">
        <button
          type="button"
          className="bg-buttons-slider p-[8px] self-center rounded-full hover:bg-buttons-slider/50 transition duration-200"
        >
          <div className="rotate-180">
            <Icon name="sliderArrow" />
          </div>
        </button>
        <div className="flex w-full max-w-[647px] overflow-hidden">
          <motion.div className="flex gap-[15px] w-full" animate={{ translateX: `-${0 * 100}%` }}>
            {photos.map((photoURL, index) => (
              <button
                type="button"
                onClick={() => setSelectedPhotoIndex(index)}
                className="h-full aspect-video relative opacity-40 hover:opacity-100 transition duration-300"
                key={photoURL}
              >
                <Image
                  src={photoURL}
                  alt="Preview Photo"
                  className="object-cover h-full w-full rounded-[4px]"
                  fill
                  quality={1}
                  priority
                  unoptimized
                />
              </button>
            ))}
          </motion.div>
        </div>
        <button
          type="button"
          className="bg-buttons-slider p-[8px] self-center rounded-full hover:bg-buttons-slider/50 transition duration-200"
        >
          <Icon name="sliderArrow" />
        </button>
      </div>
    </div>
  );
}

export default GamePhotoSlider;
