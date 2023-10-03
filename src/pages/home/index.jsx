import { Products } from "../../api/product";
import { addProduct } from "../../stores/basket/actions";
import { useBasket } from "../../stores/basket/hooks";

export default function Home() {
  const basket = useBasket();

  const addItem = (product) => {
    addProduct(product);
    alert("ürün eklendi");
  };

  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-4 gap-4">
        {Products.map((item, key) => (
          <div key={key}>
            <div className="border">
              <img src={item.productPhotos} alt="" />
              <div className="text-center">{item.productName}</div>
              <div className="text-right text-slate-500">{item.price}₺</div>
            </div>
            <button
              onClick={() => {
                addItem(item);
              }}
              className="mt-2 block w-full py-2 bg-third font-bold text-center shadow-sm shadow-slate-500"
            >
              Sepete Ekle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
