import "../assets/products.css";
import { useContext } from "react";
import { DataContext } from "../App";

function Products() {
  const { burgerData, addProduct, basket } = useContext(DataContext);

  const add = (product) => {
    const isProductExist = [...basket].some(
      (item) => item.title === product.title && item.price === product.price
    );

    isProductExist ? console.log("bor") : addProduct(product);
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
              <button className="addButtonMain" onClick={() => add(product)}>
                Добавить
                <p></p>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
