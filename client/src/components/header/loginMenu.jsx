import { modal } from "~/stores/modal/actions";
import { BiSolidUser } from "react-icons/bi";

export default function LoginMenu() {
  return (
    <div
      className="flex gap-x-2 p-3 text-white hover:text-orange-900"
      onClick={() => modal.append("login")}
    >
      <BiSolidUser size={26} />
      <div>Giriş Yap</div>
    </div>
  );
}
