import "../assets/basket.css";
import delivery from "../images/deliver.svg";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";

function Basket() {
  const { basket, setBasket } = useContext(DataContext);
  const [lengthProducts, setLengthproducts] = useState(0);
  const [overallPrice, setOverall] = useState(0);

  useEffect(() => {
    if (basket.length > 0) {
      const total = basket.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setOverall(total);
      const allquantity = basket.reduce((acc, item) => acc + item.quantity, 0);
      setLengthproducts(allquantity);
    } else {
      setLengthproducts(0);
      setOverall(0);
    }
  }, [basket]);

  const plus = (raqam) => {
    setBasket((c) => {
      const updated = [...c];
      updated[raqam].quantity += 1;
      return updated;
    });
  };

  const minus = (raqam, qancha) => {
    if (qancha > 1) {
      setBasket((c) => {
        const updated = [...c];
        updated[raqam].quantity -= 1;
        return updated;
      });
    } else if (qancha === 1) {
      setBasket((c) => {
        const updated = [...c];
        updated.splice(raqam, 1);
        return updated;
      });
    }
  };

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
                <button onClick={() => minus(index, product.quantity)}>
                  -
                </button>
                <p>{product.quantity}</p>
                <button onClick={() => plus(index)}>+</button>
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
