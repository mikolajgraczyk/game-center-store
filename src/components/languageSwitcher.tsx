import Link from "next/link";

const LanguageSwitcher = ({ locales }) => {
  return (
    <div className="absolute top-[64px] left-[16px] text-buttons-login flex gap-2">
      {locales.map((lng: string, index: number) => (
        <Link className="underline" key={index} href={`/${lng}`}>
          {lng}
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
