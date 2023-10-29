import { useLogin } from "~/stores/auth/hooks";
export default function Deneme() {
  const login = useLogin();
  return <div>{login}</div>;
}
