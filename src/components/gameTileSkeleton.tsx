const GameTileSkeleton = () => {
  return (
    <div className="flex-col space-y-[10px] mt-[20px] max-w-[200px]">
      <div className="w-[200px] h-[265px] object-cover bg-backgrounds-gameSkeleton" />
      <div className="w-[150px] h-[17px] bg-backgrounds-gameSkeleton rounded-[5px]" />
      <div className="flex items-center justify-between w-[100%] h-[25px] bg-backgrounds-gameSkeleton rounded-[5px]" />
    </div>
  );
};

export default GameTileSkeleton;
