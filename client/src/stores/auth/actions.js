import {
  _login,
  _setPassword,
  _setName,
  _setSurname,
  _setPhone,
  _setEmail,
} from ".";
import store from "..";

export const setLogin = (payload) => store.dispatch(_login(payload));
export const setName = (name) => store.dispatch(_setName(name));
export const setSurname = (surname) => store.dispatch(_setSurname(surname));
export const setEmail = (email) => store.dispatch(_setEmail(email));
export const setPhone = (phone) => store.dispatch(_setPhone(phone));
export const setPassword = (password) => store.dispatch(_setPassword(password));
