interface IGameInfoHub {
  title: string;
  content: string | JSX.Element[];
}

function GameInfoHub({ title, content }: IGameInfoHub) {
  return (
    <div className="flex justify-between border-b-[1px] border-opacity-10 border-borders-gameInsightHub py-[10px]">
      <span className="opacity-60">{title}</span>
      <div className="text-texts-main flex gap-[12px]">{content}</div>
    </div>
  );
}

export default GameInfoHub;
