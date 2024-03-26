import {
  faBagShopping,
  faHeart,
  faMagnifyingGlass,
  faUser,faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Css/Header.css";
const Header = () => {
  return (
    <header id="header">
      <div className="h-left">
        <img src="assets/img/logo.webp" alt="logo" />
      </div>
      <div className="h-center">
        <ul className="item-head">
          <li className="item">
            <a href="#">Trang chủ</a>
          </li>
          <li className="item">
            <a href="#">Giới thiệu</a>
          </li>
          <li className="item">
            <a href="#">Sản phẩm</a>
            <FontAwesomeIcon icon={faCaretDown} />
          </li>
          <li className="item">
            <a href="#">Tin tức</a>
          </li>
          <li className="item">
            <a href="#">Cửa Hàng</a>
          </li>
          <li className="item">
            <a href="#">Liên hệ</a>
          </li>
        </ul>
      </div>
      <div className="h-right">
        <a href="#">
          <FontAwesomeIcon
            className="icon i-search"
            size="lg"
            icon={faMagnifyingGlass}
          />
        </a>
        <a href="#">
          <FontAwesomeIcon className="icon i-user" size="lg" icon={faUser} />
        </a>
        <a href="#" className="link-heart i-link">
          <FontAwesomeIcon className="icon i-heart" size="lg" icon={faHeart} />
          <span className="count count-heart">1</span>
        </a>

        <a href="#" className="link-shop i-link">
          <FontAwesomeIcon
            className="icon i-shop"
            size="lg"
            icon={faBagShopping}
          />
          <span className="count count-shop">0</span>{" "}
        </a>
      </div>
    </header>
  );
};

export default Header;
