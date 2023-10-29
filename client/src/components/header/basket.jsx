import { BiBasket } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useBasket } from "~/stores/basket/hooks";

export default function Basket() {
  const basket = useBasket();

  return (
    <Link
      to="/sepet"
      className="flex gap-x-2 p-3 text-white hover:text-orange-900"
    >
      <BiBasket size={26} />
      <div>basket</div>
      {basket.length > 0 && <div>{basket.length}</div>}
    </Link>
  );
}
