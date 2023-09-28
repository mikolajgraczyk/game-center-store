import Link from "next/link";
import Logo from "/public/icons/GameCenterLogo.svg";
import { routes } from "@/constants/routes";

const Header = () => {
  return (
    <header className="bg-backgrounds-header absolute top-0 w-full h-[60px] flex px-[25px] py-[8px] items-center justify-between text-buttons-accountAccess font-medium">
      <Logo />
      <Link href={routes.login}>Zaloguj się/Zarejestruj się</Link>
    </header>
  );
};

export default Header;
