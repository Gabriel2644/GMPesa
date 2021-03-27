import React from "react";
//import SearchIcon from "@material-ui/icons/Search";
import Logo from "./robinhood.svg";
import "./header.css";

const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <h2>GMPesa</h2>
        <img src={Logo} width={25} alt="" />
      </div>
      <div className="header__search">
        <div className="header__searchContainer">
          <input placeholder="search..." type="text" />
        </div>
      </div>
      <div className="header__menu">
        <a href="#">FreeStocks</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Account</a>
      </div>
    </div>
  );
};

export default Header;
