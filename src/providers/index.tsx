import NextIntlProvider from "./NextIntlProvider";

const Providers = ({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) => {
  return <NextIntlProvider locale={locale}>{children}</NextIntlProvider>;
};

export default Providers;
