import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Header = () => {
  return (
    <header id="header">
      <div className="h_left">
        <img src="assets/img/logo.webp" alt="logo" />
      </div>
      <div className="h_center">
        <nav className="nav_item">
          <ul className="item_head">
            <li className="item">Trang chủ</li>
            <li className="item">Giới thiệu</li>
            <li className="item">Sản phẩm</li>
            <li className="item">Tin tức</li>
            <li className="item">Cửa Hàng</li>
            <li className="item">Liên hệ</li>
          </ul>
        </nav>
      </div>
      <div className="h_right">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </header>
  );
};

export default Header;
