import Logo from "./GameCenterLogo.svg";
import Link from "next/link";

import Image from "next/image";


const LoginTab = ({ children }) => {
  return (
    <main className="bg-backgrounds-loginTab max-w-[450px] w-full rounded-[10px] shadow-loginTab py-[40px] px-[35px] flex flex-col gap-[20px] items-center">
      <Image src={Logo} alt="Game Center Logo" />
      {children}
      <div className="flex text-[12px] justify-between text-buttons-accountAccess font-normal w-full underline text-center">
        <Link href="">Zapomniałeś hasła?</Link>
        <Link href="">Nie masz konta? Zarejestruj się</Link>
      </div>
    </main>
  );
};

export default LoginTab;
