import { redirect } from 'next/navigation';
import useRoutes from '@/hooks/useRoutes';

export default function Home() {
  const routes = useRoutes();

  redirect(routes.homePage);
}
