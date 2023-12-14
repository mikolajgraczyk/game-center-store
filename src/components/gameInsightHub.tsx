interface IGameInsightHub {
  title: string;
  content: [string];
}

function GameInsightHub({ title, content }: IGameInsightHub) {
  return (
    <div className="border-l-[1px] px-[20px] border-opacity-10 border-borders-gameInsightHub">
      <span className="opacity-60 text-[14px]">{title}</span>
      <div className="">
        {content.map((element) => (
          <span key={element} className="underline text-[14px] ml-[7px] first:ml-[0px]">
            {element},
          </span>
        ))}
      </div>
    </div>
  );
}

export default GameInsightHub;
