import pic from "../images/pic.svg";
import close from "../images/close.svg";
import "../assets/confirm.css";
import { useState } from "react";

function Confirm() {
  const [username, setUserName] = useState("");
  const [phone, setUserPhone] = useState("");
  const [typeOfDelivery, setType] = useState("your");

  return (
    <div className="confirm">
      <div className="confirmWrapper">
        <div>
          <img src={pic} alt="pic" />
        </div>
        <div className="userInfos">
          <div>
            <p className="confirmTitle">Доставка</p>
            <button className="closeConfirm">
              <img src={close} alt="close" />
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
        </div>
      </div>
    </div>
  );
}

export default Confirm;
