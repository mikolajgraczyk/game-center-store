'use client';
import { ChangeEvent } from 'react';
import { useRouter, usePathname } from 'next-intl/client';
import { useTransition } from 'react';
import LOCALES from '@/constants/locales';
import Select from './select';

function LanguageSwitch() {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const pathname = usePathname();

  const handleSelect = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const lang = target.value;
    startTransition(() => {
      router.replace(pathname, { locale: lang });
    });
  };

  return <Select options={LOCALES} handleSelect={handleSelect} />;
}

export default LanguageSwitch;
