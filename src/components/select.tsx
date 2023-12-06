import { ChangeEvent } from 'react';

function Select({
  options,
  onChange,
  defaultValue,
}: {
  options: {
    key: string;
    value: string;
  }[];
  onChange: ({ target }: ChangeEvent<HTMLSelectElement>) => void;
  defaultValue: string;
}) {
  return (
    <select defaultValue={defaultValue} onChange={onChange} className="text-backgrounds-main">
      {options.map((option) => (
        <option key={option.key} value={option.key}>
          {option.value}
        </option>
      ))}
    </select>
  );
}

export default Select;
