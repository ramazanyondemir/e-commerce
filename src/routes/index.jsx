import { createBrowserRouter } from "react-router-dom";
import Home from "~/pages/home";
import WebLayout from "~/layouts/web";
import Deneme from "../pages/deneme";
import Register from "../pages/register";
import LoginLayout from "../layouts/login";
import BasketLayout from "../layouts/basket";
import Basket from "../pages/basket";

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
        path: "/test",
        element: <Deneme />,
      },
    ],
  },
  {
    path: "/register",
    element: <LoginLayout />,
    children: [
      {
        index: true,
        element: <Register />,
      },
    ],
  },
  {
    path: "/sepet",
    element: <BasketLayout />,
    children: [
      {
        index: true,
        element: <Basket />,
      },
    ],
  },
]);
