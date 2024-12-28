import { modal } from "~/stores/modal/actions";
import { useState } from "react";
import { loginUser } from "~/stores/auth/actions";
import { useUserError } from "../../stores/auth/hooks";

export default function LoginModal() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    loginUser(data).then((x) => {
      if (!x.error) {
        modal.destroy();
      }
    });
  };

  return (
    <div className="relative rounded text-black bg-white p-6 w-full max-w-xs hidden last:block">
      <button
        onClick={() => modal.destroy()}
        className="absolute text-red-500 right-3 top-2"
      >
        X
      </button>
      <div className="border-bottom">
        <div className="p-2">
          <h2 className="text-black">Login</h2>
        </div>
        <form onSubmit={(e) => handleLogin(e)} className="flex flex-col gap-y-2">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="E-posta"
            className="border p-1"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
            className="border p-1"
          />
          <button type="submit" className="py-2 border bg-green-600 text-white">
            Giriş Yap
          </button>
        </form>

        <div className="mt-4 text-right">
          Hemen{" "}
          <span
            onClick={() => modal.append("register")}
            className="cursor-pointer text-blue-500 font-bold underline"
          >
            Üye Ol
          </span>
        </div>
      </div>
    </div>
  );
}
