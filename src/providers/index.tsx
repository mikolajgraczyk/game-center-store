import NextIntlProvider from './NextIntlProvider';
import QueryProvider from './QueryProvider';

const Providers = ({ locale, children }: { locale: string; children: React.ReactNode }) => {
  return (
    <NextIntlProvider locale={locale}>
      <QueryProvider>{children}</QueryProvider>
    </NextIntlProvider>
  );
};

export default Providers;
