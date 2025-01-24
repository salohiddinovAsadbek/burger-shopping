import "../assets/basket.css";
import delivery from "../images/deliver.svg";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";

function Basket() {
  const { basket, setBasket, setConfirm, confirm } = useContext(DataContext);
  const [lengthProducts, setLengthproducts] = useState(0);
  const [overallPrice, setOverall] = useState(0);
  const [flex, setFlex] = useState("none");
  const [width, setWidth] = useState("");
  const [position, setPosition] = useState("relative");

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

  if (confirm) {
    return;
  }

  return (
    <div className="position">
      <div
        className={`basket ${width} ${position}`}
        onClick={() => {
          setFlex("flex");
          setWidth("wideGap");
          setPosition("absolute");
        }}
        style={{ zIndex: 1 }}
      >
        <div>
          <h1>Корзина</h1>
          <p>{lengthProducts}</p>
        </div>
        <div className="basketWrapper" style={{ display: flex }}>
          {lengthProducts > 0
            ? basket.map((product, index) => {
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
              })
            : console.log("basketWrapper")}
        </div>
        {overallPrice > 0 ? (
          <>
            <p className="allPrice" style={{ display: flex }}>
              <span>Итого</span>
              <span>{overallPrice}₽</span>
            </p>
          </>
        ) : (
          <p className="empty">Тут пока пусто :(</p>
        )}
        {overallPrice > 0 ? (
          <button
            className="buyButton"
            style={{ display: flex }}
            onClick={() => {
              setConfirm(true);
            }}
          >
            Оформить заказ
          </button>
        ) : (
          ""
        )}
        {overallPrice > 0 ? (
          <div className="delivery" style={{ display: flex }}>
            <img src={delivery} alt="deliver" />
            <p>Бесплатная доставка</p>
            <p
              className="closeBasket"
              onClick={(event) => {
                event.stopPropagation();
                setFlex("none");
                setWidth("basket");
                setPosition("relative");
              }}
            >
              Свернуть
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Basket;
