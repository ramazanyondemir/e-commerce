import { NavLink } from "react-router-dom";

export default function AccountMenu() {
  return (
    <aside className="hidden lg:block max-w-xs w-full border">
      <nav className="flex flex-col w-full gap-y-2">
        <NavLink
          to="/hesabim"
          className={({ isActive }) =>
            `block p-2 ${isActive ? "text-link bg-primary" : "bg-secondary"}`
          }
        >
          Kullanıcı Bilgilerim
        </NavLink>
        <NavLink
          to="/sifre-degisikligi"
          className={({ isActive }) =>
            `block p-2 ${isActive ? "text-link bg-primary" : "bg-secondary"}`
          }
        >
          Şifre değiştir
        </NavLink>
      </nav>
    </aside>
  );
}
