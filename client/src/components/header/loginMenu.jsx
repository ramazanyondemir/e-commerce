import { modal } from "~/stores/modal/actions";
import { BiSolidUser } from "react-icons/bi";

export default function LoginMenu() {
  return (
    <div
      className="flex gap-x-2 p-3 cursor-pointer rounded"
      onClick={() => modal.append("login")}
    >
      <BiSolidUser size={26} />
      <span>Giriş Yap</span>
    </div>
  );
}
