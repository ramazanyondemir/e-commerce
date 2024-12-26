import { createBrowserRouter } from "react-router-dom";
import Home from "~/pages/home";
import WebLayout from "~/layouts/web";
import Basket from "../pages/basket";
import PrivateRoute from "../components/PrivateRoute";
import Account from "../pages/account";
import AccountLayout from "../layouts/account";
import UserInfo from "../pages/account";
import ChangePassword from "../pages/account/ChangePassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WebLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/sepet",
        element: <Basket />,
      },
    ],
  },
  {
    path: "/hesabim",
    element: (
      <PrivateRoute>
        <AccountLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <UserInfo />,
      },
    ],
  },
  {
    path: "/sifre-degisikligi",
    element: (
      <PrivateRoute>
        <AccountLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <ChangePassword />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
