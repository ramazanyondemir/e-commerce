import { Link } from "react-router-dom";
import { useAuth } from "~/stores/auth/hooks";
import UserMenu from "./userMenu";
import LoginMenu from "./loginMenu";
import Basket from "./basket";
import { BiSearch } from "react-icons/bi";
import logo from "~/assets/images/logo.png";
import { HEADER_MENUS } from "../../constants/menus";

export default function Header() {
  const isLogin = useAuth();

  return (
    <header className="flex flex-col items-center gap-y-1 bg-primary">
      <div className="container flex justify-between items-end py-4 gap-x-10">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[150px]" />
        </Link>
        <div className="relative flex-[0.7]">
          <input
            type="text"
            name="search"
            placeholder="Aradığınız ürünü yazınız"
            className="w-full pl-4 py-2 pr-10 pr-md-5 text-ellipsis rounded outline-none"
          />
          <BiSearch
            size={24}
            className="absolute top-1/2 -translate-y-1/2 right-2 text-primary"
          />
        </div>
        <div className="flex gap-x-6 items-center">
          {isLogin ? <UserMenu /> : <LoginMenu />}
          <Basket />
        </div>
      </div>
      <div className="container border-t border-link">
        <div className="flex justify-between px-5 bg-primary">
          <nav className="flex gap-x-4">
            {HEADER_MENUS.map((item) => (
              <Link to="/" className="p-3 text-link">
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
