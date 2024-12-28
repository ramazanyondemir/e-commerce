import { useState } from "react";
import Cookies from "js-cookie";
import { useUser } from "../../stores/auth/hooks";
import { setUserInfo } from "../../stores/auth/actions";
import classNames from "classnames";
import { useEffect } from "react";

export default function UserInfo() {
  const user = useUser();
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [isEmpty, setIsEmpty] = useState(false);

  const changeUserInfo = async () => {
    let token = Cookies.get("token");

    const data = {
      name,
      surname,
    };

    const response = await fetch(`${import.meta.env.API_URL}/user/info`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const newInfo = await response.json();
    if (newInfo.status === 200) {
      setIsEmpty(false);
      setUserInfo(newInfo.user);
    }
    if (newInfo.status === 400) setIsEmpty(true);
    console.log(newInfo);
  };

  return (
    <div className="flex flex-col w-full ml-4">
      <div className="flex max-w-lg mx-auto w-full">
        <div className="flex flex-col w-[calc(100%-16px)] mr-4">
          <label htmlFor="name" className="mb-3">
            Ad
          </label>
          <input
            type="text"
            defaultValue={user.name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            className={classNames({
              "px-4 py-2 rounded-md border outline-none ease-in duration-300 focus:outline-none": true,
              "border border-red-500": isEmpty,
            })}
            // className="px-4 py-2 rounded-md outline-none ease-in duration-300 focus:outline-none"
            // style={{
            //   border: `1px solid ${isEmpty ? "red" : "green"}`,
            // }}
          />
        </div>

        <div className="flex flex-col w-[calc(100%-16px)]">
          <label htmlFor="surname" className="mb-3">
            Soyad
          </label>
          <input
            type="text"
            defaultValue={user.surname}
            onChange={(e) => setSurname(e.target.value)}
            id="surname"
            className="px-4 py-2 rounded-md outline-none border ease-in duration-300 focus:border-primary"
          />
        </div>
      </div>

      <div className="flex flex-col max-w-lg mx-auto w-full mt-8">
        <div className="mb-3">
          <p>İletişim Bilgileri</p>
        </div>
        <input
          type="text"
          defaultValue={user.email}
          disabled={true}
          id="email"
          className="px-4 py-2 rounded-md outline-none border ease-in duration-300 focus:border-primary"
        />
        <button
          onClick={changeUserInfo}
          className="inline mt-5 p-2 bg-green-500 text-white rounded-md"
        >
          Değiştir
        </button>
      </div>
    </div>
  );
}
