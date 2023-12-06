'use client';
import { useLocale } from 'next-intl';
import { ChangeEvent } from 'react';
import { useRouter, usePathname } from 'next-intl/client';
import { useTransition } from 'react';
import LOCALES from '@/constants/locales';
import Select from './select';

function LanguageSwitch() {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const localesOptions = LOCALES.map((option) => {
    return {
      key: option,
      value: option,
    };
  });

  const handleSelect = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const lang = target.value;
    startTransition(() => {
      router.replace(pathname, { locale: lang });
    });
  };

  return <Select options={localesOptions} onChange={handleSelect} defaultValue={locale} />;
}

export default LanguageSwitch;
