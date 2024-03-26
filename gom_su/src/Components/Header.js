import {
  faBagShopping,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Css/Header.css";
const Header = () => {
  return (
    <header id="header">
      <div className="h_left">
        <img src="assets/img/logo.webp" alt="logo" />
      </div>
      <div className="h_center">
        <nav className="nav_item">
          <ul className="item_head">
            <li className="item"><a href="#">Trang chủ</a></li>
            <li className="item"><a href="#">Giới thiệu</a></li>
            <li className="item"><a href="#">Sản phẩm</a></li>
            <li className="item"><a href="#">Tin tức</a></li>
            <li className="item"><a href="#">Cửa Hàng</a></li>
            <li className="item"><a href="#">Liên hệ</a></li>
          </ul>
        </nav>
      </div>
      <div className="h_right">
        <FontAwesomeIcon className="icon i-search" icon={faMagnifyingGlass} />
        <FontAwesomeIcon className="icon i-user" icon={faUser} />
        <FontAwesomeIcon className="icon i-heart" icon={faHeart} />
        <FontAwesomeIcon className="icon i-bag" icon={faBagShopping} />
      </div>
    </header>
  );
};

export default Header;
