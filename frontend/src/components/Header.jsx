import React from "react";
import "./Header.css";
import { SiAmazon } from "react-icons/si";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  return (
    <div className="header">
      <div className="header__log__div">
        <SiAmazon className="header__logo" size="2rem" color="white" />
      </div>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <div>
          <AiOutlineSearch className="search__icon" size="2rem" color="white" />
        </div>
      </div>

      <div className="header__nav">
        <div className="header_option">
          <span className="header_option_lineOne">Hello Guest</span>
          <span className="header_option_lineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_option_lineOne">Returns</span>
          <span className="header_option_lineTwo">& Orders</span>
        </div>
        {/* <div className="header_option">
          <span className="header_option_lineOne">Your</span>
          <span className="header_option_lineTwo">Prime</span>
        </div> */}
        <div className="cart">
          <AiOutlineShoppingCart color="white" size="2rem" />
          <div className="cart_number">0</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
