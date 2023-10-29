import { useSelector } from "react-redux";

export const useLogin = () => useSelector((state) => state.auth);
