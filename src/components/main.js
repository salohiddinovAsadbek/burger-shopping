import Basket from "./basket";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../App";
import Products from "./products";

function Main() {
  const { basket, addBasket } = useContext(DataContext);

  return (
    <main>
      <Basket />
      <Products />
    </main>
  );
}

export default Main;
