import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "../stores/auth/hooks";
import { setUser } from "../stores/auth/actions";

export default function PrivateRoute({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const isLogin = useAuth();

  useEffect(() => {
    const token = Cookies.get("token");

    if (!isLogin && token) {
      fetch("http://localhost:3000/me", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setUser({ ...data.user, isLogin: true });
          // dispatch(setUser({ ...data.user, isLogin: true }));
        })
        .catch((err) => {
          console.log("err", err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [isLogin]);

  if (isLoading) {
    return <div>Yükleniyor...</div>; // veya bir yükleme bileşeni
  }

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  return children;
}
