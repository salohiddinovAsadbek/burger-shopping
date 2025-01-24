import pic from "../images/pic.svg";
import close from "../images/close.svg";
import "../assets/confirm.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { DataContext } from "../App";

function Confirm() {
  const { basket, confirm, setConfirm } = useContext(DataContext);
  const [username, setUserName] = useState("");
  const [floor, setFloor] = useState("");
  const [street, setStreet] = useState("");
  const [domofon, setDomofon] = useState("");
  const [phone, setUserPhone] = useState("");
  const [typeOfDelivery, setType] = useState("your");

  const handleSubmit = () => {
    const token = "7182806734:AAESXvxtTJ0P6JOYyUqXgTg-sgDUObi6pTY";
    const chad_id = 6244316872;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const infoUser = {
      name: username,
      phone: phone,
      street: street,
      domofon: domofon,
      floor: floor,
      buy: JSON.stringify(basket),
    };

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chad_id,
        text: JSON.stringify(infoUser),
      },
    })
      .then((res) => {
        toast.success("Successfully");
      })
      .catch((error) => {
        toast.error("Try again");
      });

    setDomofon("");
    setStreet("");
    setUserPhone("");
    setFloor("");
    setUserName("");
    setConfirm(false);
  };

  return (
    <div className="confirm" style={{ display: confirm ? "flex" : "none" }}>
      <div className="confirmWrapper">
        <div>
          <img src={pic} alt="pic" />
        </div>
        <div className="userInfos">
          <div>
            <p className="confirmTitle">Доставка</p>
            <button className="closeConfirm">
              <img
                src={close}
                alt="close"
                onClick={() => {
                  setConfirm(false);
                }}
              />
            </button>
          </div>
          <div className="userInfoInputs">
            <input
              type="text"
              placeholder="Ваше имя"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Телефон"
              onChange={(e) => {
                setUserPhone(e.target.value);
              }}
              value={phone}
            />
          </div>
          <div className="selectDelivery">
            <label
              htmlFor="your"
              onClick={() => {
                setType("your");
              }}
            >
              <input
                type="checkbox"
                id="your"
                checked={typeOfDelivery === "your"}
              />
              <p>Самовывоз</p>
            </label>
            <label
              htmlFor="deliver1"
              onClick={() => {
                setType("delivery");
              }}
            >
              <input
                type="checkbox"
                id="deliver1"
                checked={typeOfDelivery === "delivery"}
              />
              <p>Доставка</p>
            </label>
          </div>
          <div
            className="additionalData"
            style={{ opacity: typeOfDelivery === "delivery" ? 1 : 0 }}
          >
            <div>
              <input
                type="text"
                placeholder="Улица, дом, квартира"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
              <input
                type="text"
                placeholder="Этаж"
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
              />
              <input
                type="text"
                placeholder="Домофон"
                value={domofon}
                onChange={(e) => setDomofon(e.target.value)}
              />
            </div>
          </div>
          <button className="confirmButton" onClick={handleSubmit}>
            Оформить
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
