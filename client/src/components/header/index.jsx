import { Link } from "react-router-dom";
import { useLogin } from "~/stores/auth/hooks";
import UserMenu from "./userMenu";
import LoginMenu from "./loginMenu";
import Basket from "./basket";

export default function Header() {
  const { login } = useLogin();

  return (
    <header className="flex flex-col items-center gap-y-4 py-6">
      <img
        src="https://cdn.myikas.com/images/theme-images/7f620b2d-f0a3-42fb-8051-8e96da09afec/image_1080.webp"
        alt="logo"
        className="w-[150px]"
      />
      <div className="container">
        <div className="flex justify-between px-5 bg-primary">
          <nav className="flex gap-x-4">
            <Link to="/" className="p-3 text-white">
              Home
            </Link>
            <Link to="/" className="p-3 text-white">
              Home
            </Link>
            <Link to="/" className="p-3 text-white">
              Home
            </Link>
            <Link to="/" className="p-3 text-white">
              Home
            </Link>
          </nav>

          <div className="flex gap-x-5 items-center">
            {login ? <UserMenu /> : <LoginMenu />}
            <Basket />
          </div>
        </div>
      </div>
    </header>
  );
}
