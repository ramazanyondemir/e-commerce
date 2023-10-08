import {
  decrementCount,
  incrementCount,
  countChange,
  removeProduct,
} from "~/stores/basket/actions";
import { useBasket } from "~/stores/basket/hooks";
import { GoTrash } from "react-icons/go";
import { BiMinus, BiPlus } from "react-icons/bi";

export default function Basket() {
  const basket = useBasket();

  const formatter = new Intl.NumberFormat("tr-TR");

  return (
    <div className="container flex justify-between gap-x-3 mx-auto lg:flex-row">
      <div className="flex flex-col w-full gap-y-3 rounded lg:max-w-[928px]">
        {basket.map((item, key) => (
          <div
            key={key}
            className="flex justify-between items-center bg-white py-3 px-4 rounded shadow"
          >
            <div className="flex items-center gap-x-3">
              <input type="checkbox" name="productSelect" className="w-4 h-4" />
              <img
                src={item.product.productPhotos}
                alt=""
                className="flex-none w-24 border rounded-lg"
              />
              <h2 className="line-clamp-3 px-3 font-bold">
                {item.product.productName}
              </h2>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center gap-x-2">
                <button
                  onClick={() => {
                    decrementCount(item.product.id);
                  }}
                  className="flex justify-center items-center w-8 h-8 bg-slate-100 rounded-sm hover:bg-slate-200"
                >
                  <BiMinus />
                </button>
                <input
                  type="text"
                  pattern="[0-9]*"
                  value={item.count}
                  onChange={(e) =>
                    countChange({ id: item.product.id, value: e.target.value })
                  }
                  className="w-10 h-8 border rounded bg-white text-center"
                />
                <button
                  onClick={() => {
                    incrementCount(item.product.id);
                  }}
                  className="flex justify-center items-center w-8 h-8 text-center bg-slate-100 rounded-sm hover:bg-slate-200"
                >
                  <BiPlus />
                </button>
              </div>
              <div className="w-36 h-11 flex items-center justify-center text-center text-primary font-bold">
                {formatter.format(item.count * item.product.price)} ₺
              </div>
              <button
                onClick={() => removeProduct(item.product.id)}
                className="p-2 hover:text-red-700"
              >
                <GoTrash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white px-3 py-2 border shadow rounded lg:self-start lg:w-[270px]">
        <h1 className="text-2xl">Sepet Özeti</h1>
      </div>
    </div>
  );
}
