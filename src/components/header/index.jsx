import { Link } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import { BiBasket } from "react-icons/bi";
import { modal } from "~/stores/modal/actions";
import { useLogin } from "~/stores/auth/hooks";
import { useBasket } from "../../stores/basket/hooks";

export default function Header() {
  const login = useLogin();
  const basket = useBasket();
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
            <button
              className="flex gap-x-2 p-3 text-white hover:text-orange-900"
              onClick={() => modal.append("login")}
            >
              <BiSolidUser size={26} />
              {login ? "Hesabım" : "Giriş Yap"}
            </button>
            <Link
              to="/sepet"
              className="flex gap-x-2 p-3 text-white hover:text-orange-900"
            >
              <BiBasket size={26} />
              <div>Sepetim</div>
              {basket.length > 0 && <div>{basket.length}</div>}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
