import { useLocale } from 'next-intl';

function useRoutes() {
  const locale = useLocale();

  const routes = {
    login: `/${locale}/login`,
    register: `/${locale}/register`,
    homePage: `/${locale}/homePage`,
    gamePage: `/${locale}/game`,
  };

  return routes;
}

export default useRoutes;
