import burger1 from "../images/burger1.svg";
import "../assets/show.css";
import close from "../images/close.svg";
import { useContext, useState } from "react";
import { DataContext } from "../App";

function Show({ data }) {
  const { show, addProduct, basket } = useContext(DataContext);
  const [quantity1, setQuantity] = useState(1);

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
                const product = [...basket];
                addProduct(data);
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
