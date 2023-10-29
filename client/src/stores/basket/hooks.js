import { useSelector } from "react-redux";

export const useBasket = () => useSelector((state) => state.basket.basket);
