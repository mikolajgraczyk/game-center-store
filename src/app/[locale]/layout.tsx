import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";

const montserrat = Montserrat({ subsets: ["latin"] });

interface IRootLayout {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

const locales = ["en", "pl"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Game Center",
  description: "Game Center Website",
};

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

  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

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
