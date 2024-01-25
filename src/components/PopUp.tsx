import { ReactNode } from 'react';

interface IPopUp {
  content: ReactNode;
}

function PopUp({ content }: IPopUp) {
  return (
    <>
      <div className="fixed top-[40%] left-[50%] transform translate-x-[-50%] bg-backgrounds-logInPopup max-w-[500px] px-[25px] py-[30px] rounded-[10px] flex flex-col items-center gap-[32px] z-10 mobile:top-[25%] mobile:px-[10px] mobile:w-[90%] mobile:gap-[24px] text-center">
        {content}
      </div>
      <div className="fixed top-0 left-0 w-full h-full bg-backgrounds-black opacity-60" />
    </>
  );
}

export default PopUp;
