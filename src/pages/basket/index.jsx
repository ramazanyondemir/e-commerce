import {
  decrementCount,
  incrementCount,
  countChange,
  removeProduct,
} from "../../stores/basket/actions";
import { useBasket } from "../../stores/basket/hooks";
import { BsTrash3Fill } from "react-icons/bs";

export default function Basket() {
  const basket = useBasket();

  // const handleChange = (item) => {
  //   incrementCount(item);
  // };
  console.log("basket", basket);
  return (
    <div className="container mx-auto">
      <div className="max-w-4xl">
        {basket.map((item, key) => (
          <div
            key={key}
            className="flex justify-between items-center py-3 px-4 border"
          >
            <div className="w-[450px] flex items-center">
              <input type="checkbox" name="productSelect" className="mr-3" />
              <img
                src={item.product.productPhotos}
                alt=""
                className="flex-none w-24 border rounded-lg"
              />
              <h2 className="border-r px-3 font-bold">
                {item.product.productName}
              </h2>
            </div>
            <div className="flex gap-3">
              <div>
                <button
                  onClick={() => {
                    decrementCount(item.product.id);
                  }}
                  className="w-8 bg-slate-200 rounded-sm"
                >
                  -
                </button>
                <input
                  type="text"
                  pattern="[0-9]*"
                  value={item.count}
                  onChange={(e) =>
                    countChange({ id: item.product.id, value: e.target.value })
                  }
                  className="w-10 bg-slate-100 text-center"
                />
                <button
                  onClick={() => {
                    incrementCount(item.product.id);
                  }}
                  className="w-8 bg-slate-200 rounded-sm"
                >
                  +
                </button>
              </div>
              <div className="w-36 text-center text-primary font-bold">
                {item.count * item.product.price} ₺
              </div>
              <button
                onClick={() => removeProduct(item.product.id)}
                className="p-2"
              >
                <BsTrash3Fill />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
