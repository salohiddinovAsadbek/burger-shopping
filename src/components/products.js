import "../assets/products.css";
import { useContext } from "react";
import { DataContext } from "../App";

function Products() {
  const { burgerData, addProduct, basket, setBasket } = useContext(DataContext);

  const add = (product, raqam) => {
    const isProductExist = [...basket].some(
      (item) => item.title === product.title && item.price === product.price
    );

    isProductExist
      ? setBasket((c) => {
          const updated = [...c];
          if (updated[raqam]) {
            updated[raqam].quantity += 1;
          } else {
            console.error(`Element ${raqam} mavjud emas.`);
          }
          return updated;
        })
      : addProduct(product);
  };

  return (
    <div>
      <h1 className="pageTitleMain">Бургеры</h1>
      <div className="productsWrapperMain">
        {burgerData.map((product, index) => {
          return (
            <div className="productCardMain" key={index}>
              <img src={product.thumbnail} alt="product" />
              <p className="productPriceMain">{product.price}₽</p>
              <p className="productTitleMain">{product.title}</p>
              <p className="productMassMain">{product.mass}</p>
              <button
                className="addButtonMain"
                onClick={() => add(product, index)}
              >
                <span>Добавить</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
