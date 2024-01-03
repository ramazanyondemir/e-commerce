import { Link } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import { logout } from "~/stores/auth/actions";
import Cookies from "js-cookie";

export default function UserMenu() {
  // const user = useUser();

  const handleLogout = () => {
    logout();
    Cookies.remove("token");
  };

  return (
    <div className="relative h-[50] p-3 group">
      <div className="flex gap-x-2">
        <BiSolidUser size={26} />
        Hesabım
      </div>
      <div
        className="absolute rounded z-50 hidden flex-col gap-y-1 opacity-0 p-2 top-0 -left-6
         min-w-[150px] bg-white translate-y-12 group-hover:opacity-100 
         group-hover:flex transition-all duration-500 ease-in-out"
      >
        <Link to="/hesabim" className="hover:bg-secondary text-xs p-1">
          Hesabım
        </Link>
        <Link to="/" className="hover:bg-secondary text-xs p-1">
          Siparişlerim
        </Link>
        <Link
          to="/"
          onClick={handleLogout}
          className="hover:bg-secondary text-red-600 font-semibold text-xs p-1"
        >
          Çıkış yap
        </Link>
      </div>
    </div>
  );
}
