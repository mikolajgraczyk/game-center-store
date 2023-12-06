import { useLocale } from 'next-intl';
import { ChangeEvent } from 'react';

function Select({
  options,
  handleSelect,
}: {
  options: string[];
  handleSelect: ({ target }: ChangeEvent<HTMLSelectElement>) => void;
}) {
  const locale = useLocale();

  return (
    <select defaultValue={locale} onChange={handleSelect} className="text-backgrounds-main">
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
