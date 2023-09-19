import Link from "next/link";
import Image from "next/image";

import Logo from "./GameCenterLogo.svg";

const Header = () => {
    return(
        <header className="bg-backgrounds-header absolute top-0 w-full h-[60px] flex px-[25px] items-center justify-between text-buttons-accountAccess font-medium">
            <Image src={Logo} alt="Game Center Logo" width={114}/>
            <div>
                <Link href="">Zaloguj się</Link>/<Link href="">Zarejestruj się</Link>
            </div>
        </header>
    );
};

export default Header;