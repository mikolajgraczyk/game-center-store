import { useState } from 'react';

function useSlider(photos: string[]) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);

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

  return {
    photosToMap,
    sliderPosition,
    sliderMaxPosition,
    selectedPhotoIndex,
    photosPerSlide,
    moveSlider,
    moveSelectedPhoto,
    onThumbnailClick,
  };
}

export default useSlider;
