import "../assets/show.css";
import close from "../images/close.svg";
import { useContext, useState } from "react";
import { DataContext } from "../App";

function Show({ data }) {
  const { show, addProduct, basket, setBasket } = useContext(DataContext);
  const [quantity1, setQuantity] = useState(1);
  const [qayerda, setQayerda] = useState(-1);
  console.log(data);

  const check = () => {
    const isExist = basket.some((item) => item.id === data.id);

    if (isExist) {
      basket.filter((item) => {
        if (item.id === data.id) {
          setQayerda(data.id);
        }
      });

      setBasket(
        basket.map((item, index) =>
          item.id === qayerda ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      console.log("yoq");
      data.quantity = quantity1;
      addProduct(data);
    }
  };

  return (
    <div className="show1">
      <div className="show">
        <div>
          <h1 className="showTitle">{data.title}</h1>
          <button className="showClose" onClick={() => show()}>
            <img src={close} alt="" />
          </button>
        </div>
        <div className="showWrapper">
          <img src={data.thumbnail} alt="burger" />
          <div className="showInfo">
            <p>
              Супер мясное наслаждение! Большая рубленая котлета из свежего
              говяжего мяса покорит вас своей сочностью, а хрустящие листья
              салата добавят свежести.
            </p>
            <p>Состав:</p>
            <p>
              <span>Пшеничная булочка</span>
              <span>Котлета из говядины</span>
              <span>Красный лук</span>
              <span>Листья салата</span>
              <span>Соус горчичный</span>
            </p>
            <p>{data.mass}, ккал 430</p>
          </div>
        </div>
        <div className="showForm">
          <div>
            <button
              className="showAddButton"
              onClick={() => {
                check();
              }}
            >
              Добавить
            </button>
            <div className="addMinusButton">
              <button
                onClick={() => {
                  quantity1 > 1
                    ? setQuantity((c) => c - 1)
                    : setQuantity(quantity1);
                }}
              >
                -
              </button>
              <p>{quantity1}</p>
              <button
                onClick={() => {
                  setQuantity((c) => (c += 1));
                }}
              >
                +
              </button>
            </div>
          </div>
          <p className="showPrice">{data.price}₽</p>
        </div>
      </div>
    </div>
  );
}

export default Show;
