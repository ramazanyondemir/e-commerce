import { Outlet } from "react-router-dom";
import Header from "~/components/header";
import { useModals } from "~/stores/modal/hooks";
import Modal from "~/modals/index.jsx";

export default function BasketLayout() {
  const modals = useModals();

  return (
    <>
      {modals.length > 0 && <Modal />}
      <Header />
      <Outlet />
    </>
  );
}
