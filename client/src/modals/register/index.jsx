import { modal } from "~/stores/modal/actions";
import { useState } from "react";
// import { setUser } from "../../stores/auth/actions";

export default function signUpModal() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const data = {
      name,
      surname,
      password,
      email,
      phone,
    };

    fetch(`${import.meta.env.BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => setUser({ ...data.user, isLogin: true }))
      .catch((err) => console.log(err));
    modal.destroy();
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
        <div className="mb-2">
          <h2 className="text-black">Üye Ol</h2>
        </div>
        <form onSubmit={(e) => handleRegister(e)} className="flex flex-col gap-y-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Ad"
            id="name"
            className="border p-1"
          />
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            name="surname"
            placeholder="Soyad"
            id="surname"
            className="border p-1"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="E-mail"
            id="email"
            className="border p-1"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Şifre"
            id="login"
            className="border p-1"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            name="phone"
            placeholder="Telefon"
            id="phone"
            className="border p-1"
          />
          <button type="submit" className="py-2 border bg-green-600 text-white">
            Kayıt Ol
          </button>
        </form>
      </div>
    </div>
  );
}
