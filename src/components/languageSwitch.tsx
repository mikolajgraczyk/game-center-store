'use client';

import { useLocale } from 'next-intl';
import { ChangeEvent, useTransition } from 'react';
import { useRouter, usePathname } from 'next-intl/client';
import LOCALES from '@/constants/locales';
import Select from './select';

function LanguageSwitch() {
  const [, startTransition] = useTransition();

  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const localesOptions = LOCALES.map((option) => ({
    key: option,
    value: option,
  }));

  const handleSelect = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const lang = target.value;
    startTransition(() => {
      router.replace(pathname, { locale: lang });
    });
  };

  return <Select options={localesOptions} onChange={handleSelect} defaultValue={locale} />;
}

export default LanguageSwitch;
