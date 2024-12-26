import Header from "~/components/header";
import { useModals } from "~/stores/modal/hooks";
import Modal from "~/modals/index.jsx";
import { Outlet } from "react-router-dom";
import AccountMenu from "../../components/aside";
import { useAuth } from "../../stores/auth/hooks";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { setUser } from "../../stores/auth/actions";

export default function AccountLayout() {
  const modals = useModals();
  const isLogin = useAuth();

  useEffect(() => {
    let token = Cookies.get("token");

    if (!isLogin && token) {
      fetch("http://localhost:3000/me", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser({ ...data.user, isLogin: true });
        })
        .catch((err) => console.log("err", err));
    }
  }, [isLogin]);

  return (
    <>
      {modals.length > 0 && <Modal />}
      <Header />
      <div className="container mx-auto my-6 flex items-start">
        <AccountMenu />
        <Outlet />
      </div>
    </>
  );
}
