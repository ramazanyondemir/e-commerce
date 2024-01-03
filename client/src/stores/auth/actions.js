import { _loginUser, _logoutUser, _setUser } from ".";
import store from "..";

export const logout = () => store.dispatch(_logoutUser());
export const loginUser = (user) => store.dispatch(_loginUser(user));
export const setUser = (user) => store.dispatch(_setUser(user));
