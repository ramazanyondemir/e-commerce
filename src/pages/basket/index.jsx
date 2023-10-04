import { useBasket } from "../../stores/basket/hooks";

export default function Basket() {
  const basket = useBasket();

  return (
    <div className="container mx-auto">
      <div>
        {basket.map((item, key) => (
          <div key={key} className="flex items-center gap-4 border">
            <img
              src={item.product.productPhotos}
              alt=""
              className="flex-none w-24"
            />
            <h2 className="border-r px-3 font-bold">
              {item.product.productName}
            </h2>
            <div>Count: {item.count}</div>
            <div>Price: {item.product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
