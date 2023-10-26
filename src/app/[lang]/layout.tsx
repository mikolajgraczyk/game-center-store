import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Header from "../../components/header";
import { unstable_setRequestLocale } from "next-intl/server";
import { i18n } from "@/i18n/i18n";

const montserrat = Montserrat({ subsets: ["latin"] });

interface IRootLayout {
  children: React.ReactNode;
  params: { locale: string };
}

export const metadata: Metadata = {
  title: "Game Center",
  description: "Game Center Website",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: IRootLayout) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  // const isValidLocale = i18n.locales.some((cur) => cur === locale);
  // if (!isValidLocale) notFound();

  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={`${montserrat.className} bg-backgrounds-main flex justify-center items-center h-screen px-3`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
