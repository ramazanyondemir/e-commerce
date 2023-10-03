import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { modal } from "~/stores/modal/actions";
import { setLogin } from "../../stores/auth/actions";

export default function LoginModal() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username == "ramazan" && password == "123") {
      navigate("/test");
      setLogin(true);
      modal.destroy();
    } else {
      return null;
    }
  };

  return (
    <div className="relative rounded text-black bg-white p-6 w-full max-w-xs">
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
          <input
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            name="username"
            placeholder="Username"
            id="username"
            className="border p-1"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="login"
            placeholder="Password"
            id="login"
            className="border p-1"
          />
          <button type="submit" className="py-2 border bg-green-600 text-white">
            Giriş Yap
          </button>
        </form>

        <div>
          Hemen <Link to="/register">Üye Ol</Link>
        </div>
      </div>
    </div>
  );
}
