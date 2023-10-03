import { _login } from ".";
import store from "..";

export const setLogin = (payload) => store.dispatch(_login(payload));
