import { Outlet } from "react-router-dom";
import Header from "~/components/header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useModals } from "~/stores/modal/hooks";
import Modal from "~/modals/index.jsx";
import { useEffect } from "react";
import { useAuth } from "../../stores/auth/hooks";
import { setUser } from "../../stores/auth/actions";
import Cookies from "js-cookie";
import { API_URL } from "../../constants";

export default function WebLayout() {
  const modals = useModals();
  const isLogin = useAuth();

  useEffect(() => {
    let token = Cookies.get("token");

    if (!isLogin && token) {
      fetch(`${API_URL}/me`, {
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
  }, []);

  return (
    <>
      {modals.length > 0 && <Modal />}
      <Header />
      <Outlet />
    </>
  );
}
