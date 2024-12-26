import { useState } from "react";
import { Products } from "../../api/product";
import Slider from "../../components/slider";
import { addProduct } from "../../stores/basket/actions";

export default function Home() {
  const addItem = (product) => {
    addProduct(product);
  };

  return (
    <>
      <div className="container mx-auto mt-5">
        <Slider />
      </div>
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
    </>
  );
}
