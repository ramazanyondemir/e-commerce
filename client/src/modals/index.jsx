import modals from "../routes/modals";
import { useModals } from "../stores/modal/hooks";

export default function Modal() {
  const modal = useModals();

  return (
    <div className="fixed text-white inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      {modal.map((item, key) => {
        const currentModal = modals.find((m) => m.name === item.name);
        return <currentModal.element key={key} />;
      })}
    </div>
  );
}
