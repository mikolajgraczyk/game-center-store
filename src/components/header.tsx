import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Logo from '@icons/GameCenterLogo.svg';
import routes from '@/constants/routes';
import LanguageSwitch from './languageSwitch';

function Header() {
  const t = useTranslations('header');

  return (
    <header className="bg-backgrounds-header w-full h-[60px] flex px-[25px] py-[8px] items-center justify-between text-buttons-accountAccess font-medium">
      <Logo />
      <LanguageSwitch />
      <Link href={routes.login}>{t('Login/Register')}</Link>
    </header>
  );
}

export default Header;
