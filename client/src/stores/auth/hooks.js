import { useSelector } from "react-redux";

export const useUser = () => useSelector((state) => state.auth.user);
export const useUserError = () => useSelector((state) => state.auth.error);
export const useAuth = () => useSelector((state) => state.auth.user.isLogin);
