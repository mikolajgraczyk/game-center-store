import { useState } from 'react';
import Image from 'next/image';

interface IGamePhotoSlider {
  photos: string[];
}

function GamePhotoSlider({ photos }: IGamePhotoSlider) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  return (
    <div className="w-[100%]">
      <div className="w-[100%] aspect-video bg-inputs-placeholder relative">
        <Image src={photos[selectedPhotoIndex]} fill unoptimized alt="Preview Photo" priority />
      </div>
      <div className="w-[100%] aspect-[15.36/1] mt-[20px] flex justify-between">
        <button type="button" className="w-[30px]">
          {'<-'}
        </button>
        <div className="flex gap-[15px] w-[100%] overflow-hidden max-w-[647px]">
          {photos.map((photoURL, index) => (
            <button
              type="button"
              onClick={() => setSelectedPhotoIndex(index)}
              className="h-[100%] aspect-video relative opacity-40 hover:opacity-100 transition duration-300"
              key={photoURL}
            >
              <Image
                src={photoURL}
                alt="Preview Photo"
                className="object-cover h-[100%] w-[100%] rounded-[4px]"
                fill
                quality={1}
                unoptimized
              />
            </button>
          ))}
        </div>
        <button type="button" className="w-[30px]">
          {'->'}
        </button>
      </div>
    </div>
  );
}

export default GamePhotoSlider;
