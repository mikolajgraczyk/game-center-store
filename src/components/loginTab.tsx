import Logo from '/public/icons/GameCenterLogo.svg';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import routes from '@/constants/routes';

interface LoginTabProps {
  children: JSX.Element | JSX.Element[];
}

const LoginTab: React.FC<LoginTabProps> = ({ children }) => {
  const t = useTranslations('loginTab');

  return (
    <div className="bg-backgrounds-loginTab max-w-[450px] w-full rounded-[10px] shadow-loginTab py-[40px] px-[35px] flex flex-col gap-[20px] items-center">
      <Logo />
      {children}
      <div className="flex text-[12px] justify-between text-buttons-accountAccess font-normal w-full underline text-center">
        <Link href="">{t('Forgot your password?')}</Link>
        <Link href={routes.register}>{t("Don't have an account? Sign up")}</Link>
      </div>
    </div>
  );
};

export default LoginTab;
