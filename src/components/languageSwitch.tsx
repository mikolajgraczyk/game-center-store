'use client';
import { ChangeEvent } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next-intl/client';
import { useTransition } from 'react';
import LOCALES from '@/constants/locales';

function LanguageSwitch() {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleSelect = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const lang = target.value;
    startTransition(() => {
      router.replace(pathname, { locale: lang });
    });
  };

  return (
    <select defaultValue={locale} onChange={handleSelect} className="text-backgrounds-main">
      {LOCALES.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
}

export default LanguageSwitch;
