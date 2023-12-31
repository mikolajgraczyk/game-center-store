import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Icon from './icon';
import useRoutes from '@/hooks/useRoutes';

interface ILoginTab {
  children: JSX.Element | JSX.Element[];
}

function LoginTab({ children }: ILoginTab) {
  const t = useTranslations('loginTab');
  const routes = useRoutes();

  return (
    <div className="bg-backgrounds-loginTab max-w-[450px] w-full rounded-[10px] shadow-loginTab py-[40px] px-[35px] flex flex-col gap-[20px] items-center">
      <Icon name="logo" />
      {children}
      <div className="flex text-[12px] justify-between text-buttons-accountAccess font-normal w-full underline text-center">
        <Link href="_">{t('Forgot your password?')}</Link>
        <Link href={routes.register}>{t("Don't have an account? Sign up")}</Link>
      </div>
    </div>
  );
}

export default LoginTab;
