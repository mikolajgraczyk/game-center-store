import Link from 'next/link';
import { useTranslations } from 'next-intl';
import useRoutes from '@/hooks/useRoutes';

function LogInPopup() {
  const routes = useRoutes();
  const t = useTranslations('logInPopup');

  return (
    <>
      <div className="fixed top-[40%] left-[50%] translate-x-[-50%] bg-backgrounds-logInPopup max-w-[500px] px-[25px] py-[30px] rounded-[10px] flex flex-col items-center gap-[32px] z-10 mobile:top-[25%] mobile:px-[10px] mobile:w-[90%] mobile:gap-[24px] text-center">
        <span className="text-[20px] mobile:text-[20px]">
          {t('Please register or log in to continue')}
        </span>
        <div className="flex gap-[15px] w-full justify-between tablet:flex-col">
          <Link
            href={routes.login}
            className="bg-backgrounds-loginButton px-[8px] py-[4px] rounded-[4px] mobile:text-[12px]"
          >
            {t('Already registered? Log In')}
          </Link>
          <Link
            href={routes.register}
            className="bg-backgrounds-loginButton px-[8px] py-[4px] rounded-[4px] mobile:text-[12px]"
          >
            {t('Create a free account')}
          </Link>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full h-full bg-backgrounds-black opacity-60" />
    </>
  );
}

export default LogInPopup;
