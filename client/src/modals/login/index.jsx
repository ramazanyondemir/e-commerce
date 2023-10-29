import { modal } from "~/stores/modal/actions";
import { setLogin, setPassword, setEmail } from "~/stores/auth/actions";
import { useLogin } from "~/stores/auth/hooks";

export default function LoginModal() {
  const { email, password } = useLogin();

  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((user) => {
        setLogin(user.status);
        modal.destroy();
      })
      .catch((err) => console.log(err));

    // if (name == "ramazan" && password == "123") {
    //   // navigate("/denemeeee");
    //   setLogin(true);
    //   modal.destroy();
    // } else {
    //   return null;
    // }
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
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-y-2"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="E-posta"
            id="email"
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
          Hemen <span onClick={() => modal.append("register")}>Üye Ol</span>
        </div>
      </div>
    </div>
  );
}
