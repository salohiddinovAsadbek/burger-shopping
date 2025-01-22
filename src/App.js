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
import Show from "./components/show";
import Confirm from "./components/confirm";

export const DataContext = createContext();

function App() {
  const burgerData = [
    {
      id: 1,
      title: "Мясная бомба",
      mass: "520г",
      price: 689,
      thumbnail: burger1,
      quantity: 1,
    },
    {
      id: 2,
      title: "сырный",
      mass: "512г",
      price: 550,
      thumbnail: burger2,
      quantity: 1,
    },
    {
      id: 3,
      title: "Сытный",
      mass: "580г",
      price: 689,
      thumbnail: burger3,
      quantity: 1,
    },
    {
      id: 4,
      title: "Тяжелый удар",
      mass: "470г",
      price: 480,
      thumbnail: burger4,
      quantity: 1,
    },
    {
      id: 5,
      title: "Вечная классика",
      mass: "450г",
      price: 450,
      thumbnail: burger5,
      quantity: 1,
    },
    {
      id: 6,
      title: "Итальянский",
      mass: "510г",
      price: 560,
      thumbnail: burger6,
      quantity: 1,
    },
  ];

  const [basket, setBasket] = useState([]);
  const [infoShow, setInfoShow] = useState(false);
  const [dataShow, setDataShow] = useState({});
  // const [confirm, setConfirm] = useState();

  const addProduct = (product) => {
    setBasket((c) => [...c, product]);
  };

  const show = () => {
    setInfoShow(!infoShow);
  };

  const showData = (data) => {
    setDataShow(data);
  };

  return (
    <DataContext.Provider
      value={{
        burgerData,
        addProduct,
        basket,
        setBasket,
        infoShow,
        show,
        showData,
      }}
    >
      <Header />
      <Navbar />
      <Main />
      {infoShow ? <Show data={dataShow} /> : ""}
      <Confirm />
      <Toaster />
    </DataContext.Provider>
  );
}

export default App;
