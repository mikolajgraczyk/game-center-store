import Link from 'next/link';
import { useTranslations } from 'next-intl';
import useRoutes from '@/hooks/useRoutes';
import LanguageSwitch from './languageSwitch';
import Icon from './icon';

function Header() {
  const t = useTranslations('header');
  const routes = useRoutes();

  return (
    <header className="bg-backgrounds-header w-full h-[60px] flex px-[25px] py-[8px] items-center justify-between text-buttons-accountAccess font-medium">
      <Icon name="logo" />
      <LanguageSwitch />
      <Link href={routes.login}>{t('Login/Register')}</Link>
    </header>
  );
}

export default Header;
