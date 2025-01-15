import mainLogo from "../images/mainLogo.svg";
import headerBurger from "../images/headerBurger.svg";
import "../assets/header.css";

function Header() {
  return (
    <header>
      <img src={mainLogo} alt="mainLogo" />
      <div className="headerWrapper">
        <img src={headerBurger} alt="headerburger" />
        <div>
          <h1 className="headerTitle">
            <span>Только самые</span> <span>сочные бургеры!</span>
          </h1>
          <p className="headerInfo">Бесплатная доставка от 599₽</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
