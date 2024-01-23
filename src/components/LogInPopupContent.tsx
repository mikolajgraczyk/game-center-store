import Link from 'next/link';
import { useTranslations } from 'next-intl';
import useRoutes from '@/hooks/useRoutes';

function LogInPopup() {
  const routes = useRoutes();
  const t = useTranslations('logInPopup');

  return (
    <>
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
    </>
  );
}

export default LogInPopup;
