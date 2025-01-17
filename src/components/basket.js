import "../assets/basket.css";
import delivery from "../images/deliver.svg";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";

function Basket() {
  const { basket } = useContext(DataContext);
  const [lengthProducts, setLengthproducts] = useState(0);
  const { overallPrice, setOverallPrice } = useState(0);

  useEffect(() => {
    setLengthproducts(basket.length);
  }, [basket]);

  return (
    <div className="basket">
      <div>
        <h1>Корзина</h1>
        <p>{lengthProducts}</p>
      </div>
      <div className="basketWrapper">
        {basket.map((product, index) => {
          return (
            <div className="basketCard" key={index}>
              <div>
                <img src={product.thumbnail} alt="product" />
                <p>
                  <span className="productName">{product.title}</span>
                  <span className="productMass">{product.mass}</span>
                  <span className="productPrice">{product.price}₽</span>
                </p>
              </div>
              <div>
                <button>-</button>
                <p>{product.quantity}</p>
                <button>+</button>
              </div>
            </div>
          );
        })}
      </div>
      <p className="allPrice">
        <span>Итого</span>
        <span>{overallPrice}₽</span>
      </p>
      <button className="buyButton">Оформить заказ</button>
      <div className="delivery">
        <img src={delivery} alt="deliver" />
        <p>Бесплатная доставка</p>
      </div>
    </div>
  );
}

export default Basket;
