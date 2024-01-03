import { BiBasket } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useBasket } from "~/stores/basket/hooks";

export default function Basket({}) {
  const basket = useBasket();

  return (
    <Link to="/sepet" className="relative h-[50] flex gap-x-2 p-3 rounded">
      {basket.length > 0 && (
        <span className="absolute flex justify-center items-center -top-2 -left-2 w-8 h-8 rounded-full text-black bg-primary ">
          {basket.length}
        </span>
      )}
      <BiBasket size={26} />
      <div className="relative">Sepetim</div>
    </Link>
  );
}
