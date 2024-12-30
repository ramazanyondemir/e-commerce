import { useState } from "react";
import Slider from "../../components/slider";
import { addProduct } from "../../stores/basket/actions";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import { APP_CONTAINER_X_PADDİNG } from "../../constants/styles";
import { Link } from "react-router-dom";
import { formatPriceDecimal } from "~/utils/index.js";
import { FaShoppingCart } from "react-icons/fa";

export default function Home() {
  const [products, setProducts] = useState([]);
  const addItem = (product) => {
    addProduct(product);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/products`);
        const data = await response.data.products;
        setProducts(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        paddingRight: APP_CONTAINER_X_PADDİNG,
        paddingLeft: APP_CONTAINER_X_PADDİNG,
      }}
    >
      <div className="container mx-auto mt-5">
        <Slider />
      </div>
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((item, key) => (
            // TODO: fix link
            <Link
              to="#"
              key={key}
              className="border cursor-pointer group flex flex-col justify-between rounded-lg overflow-hidden shadow-sm hover:shadow-lg"
            >
              <div>
                <div className="overflow-hidden border-b">
                  <img
                    src={item.image}
                    alt="Ürün resmi"
                    className="w-full h-auto transform transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-2 gap-y-2 flex flex-col">
                  <div className="line-clamp-2 text-sm font-medium text-gray-600">
                    {item.name}
                  </div>
                  <div className="text-right font-bold">
                    {true ? (
                      <>
                        <span className="line-through text-gray-500 text-xs">
                          {formatPriceDecimal(item.price)} TL
                        </span>
                        <span className="text-green-600 ml-2">
                          {formatPriceDecimal("200")} TL
                        </span>
                      </>
                    ) : (
                      <span className="text-gray-700">
                        {formatPriceDecimal(item.price)} TL
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  addItem(item);
                }}
                className="flex gap-x-2 justify-center items-center m-1 rounded-lg py-2 bg-third font-bold text-center hover:opacity-90 hover:gap-x-3 transition-all eas"
              >
                <FaShoppingCart size={18} />
                <span>Sepete Ekle</span>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
