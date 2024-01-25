import Icon from './icon';

interface IStarRating {
  score: number;
}

function StarRating({ score }: IStarRating) {
  const percentageScore = (score / 5) * 100;

  return (
    <>
      <div className="absolute flex text-backgrounds-main">
        <Icon name="star" />
        <Icon name="star" />
        <Icon name="star" />
        <Icon name="star" />
        <Icon name="star" />
      </div>
      <div style={{ width: `${percentageScore}%` }} className="bg-backgrounds-white h-[20px]" />
    </>
  );
}

export default StarRating;
