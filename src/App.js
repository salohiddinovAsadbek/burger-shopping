import "./style.css";
import { createContext, useState } from "react";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Main from "./components/main";
import burger1 from "./images/burger1.svg";
import burger2 from "./images/burger2.svg";
import burger3 from "./images/burger3.svg";
import burger4 from "./images/burger4.svg";
import burger5 from "./images/burger5.svg";
import burger6 from "./images/burger6.svg";
import { Toaster } from "react-hot-toast";

export const DataContext = createContext();

function App() {
  const burgerData = [
    {
      title: "Мясная бомба",
      mass: "520г",
      price: 689,
      thumbnail: burger1,
      quantity: 1,
    },
    {
      title: "сырный",
      mass: "512г",
      price: 550,
      thumbnail: burger2,
      quantity: 1,
    },
    {
      title: "Сытный",
      mass: "580г",
      price: 689,
      thumbnail: burger3,
      quantity: 1,
    },
    {
      title: "Тяжелый удар",
      mass: "470г",
      price: 480,
      thumbnail: burger4,
      quantity: 1,
    },
    {
      title: "Вечная классика",
      mass: "450г",
      price: 450,
      thumbnail: burger5,
      quantity: 1,
    },
    {
      title: "Итальянский",
      mass: "510г",
      price: 560,
      thumbnail: burger6,
      quantity: 1,
    },
  ];

  const [basket, setBasket] = useState([]);

  const addProduct = (product) => {
    setBasket((c) => [...c, product]);
  };

  return (
    <DataContext.Provider value={{ burgerData, addProduct, basket, setBasket }}>
      <Header />
      <Navbar />
      <Main />
      <Toaster />
    </DataContext.Provider>
  );
}

export default App;
