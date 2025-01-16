import navbar1 from "../images/navbar1.svg";
import navbar2 from "../images/navbar2.svg";
import navbar3 from "../images/navbar3.svg";
import navbar4 from "../images/navbar4.svg";
import navbar5 from "../images/navbar5.svg";
import navbar6 from "../images/navbar6.svg";
import navbar7 from "../images/navbar7.svg";
import navbar8 from "../images/navbar8.svg";
import navbar9 from "../images/navbar9.svg";
import "../assets/navbar.css";

function Navbar() {
  const navbarData = [
    {
      info: "Бургеры",
      img: navbar1,
      isThis: true,
    },
    {
      info: "Закуски",
      img: navbar2,
      isThis: false,
    },
    {
      info: "Хот-доги",
      img: navbar3,
      isThis: false,
    },
    {
      info: "Комбо",
      img: navbar4,
      isThis: false,
    },
    {
      info: "Шаурма",
      img: navbar5,
      isThis: false,
    },
    {
      info: "Пицца",
      img: navbar6,
      isThis: false,
    },
    {
      info: "Вок",
      img: navbar7,
      isThis: false,
    },
    {
      info: "Десерты",
      img: navbar8,
      isThis: false,
    },
    {
      info: "Соусы",
      img: navbar9,
      isThis: false,
    },
  ];

  return (
    <div className="navbar">
      {navbarData.map((item, index) => {
        return (
          <div className={item.isThis ? "selected" : "notSelected"} key={index}>
            <img src={item.img} alt="rasm" />
            <p>{item.info} </p>
          </div>
        );
      })}
    </div>
  );
}

export default Navbar;
