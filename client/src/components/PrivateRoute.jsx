import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useAuth } from "../stores/auth/hooks";
import { setUser } from "../stores/auth/actions";
import { API_URL } from "../constants";

export default function PrivateRoute({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const isLogin = useAuth();

  const token = Cookies.get("token");
  useEffect(() => {
    if (!isLogin && token) {
      fetch(`${API_URL}/me`, {
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
    return <div>Yükleniyor...</div>;
  }

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  return children;
}
