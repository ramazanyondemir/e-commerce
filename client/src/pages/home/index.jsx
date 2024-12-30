import { useState } from "react";
import Slider from "../../components/slider";
import { addProduct } from "../../stores/basket/actions";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import { APP_CONTAINER_X_PADDİNG } from "../../constants/styles";
import ProductBox from "../../components/ProductBox";
import ShoppingCartDrawer from "../../components/ShoppingCartDrawer";

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
          {products.map((item, index) => (
            <ProductBox item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
