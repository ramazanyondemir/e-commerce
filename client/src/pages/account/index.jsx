import { useUser } from "../../stores/auth/hooks";

export default function UserInfo() {
  const user = useUser();
  console.log(user);

  return (
    <div className="w-full ml-4">
      <div className="flex max-w-lg mx-auto">
        <div className="flex flex-col w-[calc(100%-16px)] mr-4">
          <label htmlFor="name">Ad</label>
          <input
            type="text"
            defaultValue={user.name}
            id="name"
            className="px-4 py-2 rounded-md outline-none border ease-in duration-300 focus:border-primary"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="surname">Soyad</label>
          <input
            type="text"
            defaultValue={user.surname}
            id="surname"
            className="px-4 py-2 rounded-md outline-none border ease-in duration-300 focus:border-primary"
          />
        </div>
      </div>
    </div>
  );
}
