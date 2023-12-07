import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Header from '@/components/header';
import Providers from '@/providers';

const montserrat = Montserrat({ subsets: ['latin'] });

interface IRootLayout {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export const metadata: Metadata = {
  title: 'Game Center',
  description: 'Game Center Website',
};

export default async function RootLayout({ children, params: { locale } }: IRootLayout) {
  return (
    <Providers locale={locale}>
      <html lang={locale}>
        <body
          className={`${montserrat.className} bg-backgrounds-main flex-row justify-center items-center h-screen`}
        >
          <Header />
          {children}
        </body>
      </html>
    </Providers>
  );
}
