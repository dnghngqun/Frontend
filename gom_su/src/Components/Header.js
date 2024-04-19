import {
  faBagShopping,
  faCaretDown,
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
          <li className="item dropdown-product">
            <a href="#">Sản phẩm </a>
            <FontAwesomeIcon icon={faCaretDown} className="caretDown" />
            <div className="dropdown-container row">
              <div className="dropdown-left col-lg-8">
                <div className="row row-dropdown">
                  <ul className="col-lg-4">
                    <li className="dropdown-title dropdown-h">
                      <a href="#">Phòng ăn</a>
                    </li>
                    <li className="dropdown-title">
                      <a href="#">Tô - Chén - Dĩa</a>
                    </li>
                    <li className="dropdown-title">
                      <a href="#">Thố - Khay</a>
                    </li>
                    <li className="dropdown-title">
                      <a href="#">Ca - Ly</a>
                    </li>
                  </ul>
                  <ul className=" col-lg-4">
                    <li className="dropdown-title dropdown-h">
                      <a href="#">Trà - cà phê</a>
                    </li>
                    <li className="dropdown-title">
                      <a href="#">Bộ Trà</a>
                    </li>
                    <li className="dropdown-title">
                      <a href="#">Cà phê</a>
                    </li>
                    <li className="dropdown-title">
                      <a href="#">Phụ kiện trà - cà phê</a>
                    </li>
                    <li className="dropdown-title">
                      <a href="#">Phụ kiện cà phê</a>
                    </li>
                  </ul>
                  <ul className=" col-lg-4">
                    <li className="dropdown-title dropdown-h">
                      <a href="#">Nồi sứ dưỡng sinh</a>
                    </li>
                    <li className="dropdown-title">
                      <a href="#">Luna</a>
                    </li>
                    <li className="dropdown-title">
                      <a href="#">Vesta</a>
                    </li>
                    <li className="dropdown-title">
                      <a href="#">Ấm - Chảo</a>
                    </li>
                  </ul>
                </div>
                <div className="row row-dropdown">
                  <ul className="col-lg-4">
                    <li className="dropdown-title dropdown-h">
                      <a href="#">Sứ dưỡng sinh</a>
                    </li>
                    <li className="dropdown-title">
                      <a href="#">Ly sứ dưỡng sinh</a>
                    </li>
                    <li className="dropdown-title">
                      <a href="#">Hộp sứ dưỡng sinh</a>
                    </li>
                    <li className="dropdown-title">
                      <a href="#">Đũa sứ</a>
                    </li>
                  </ul>
                  <ul className="col-lg-4">
                    <li className="dropdown-title dropdown-h">
                      <a href="#">Phụ kiện bàn ăn</a>
                    </li>
                    <li className="dropdown-title">
                      <a href="#">Muỗng - Đũa</a>
                    </li>
                    <li className="dropdown-title">
                      <a href="#">Túi vải canvas</a>
                    </li>
                    <li className="dropdown-title">
                      <a href="#">Gác đũa sứ</a>
                    </li>
                    <li className="dropdown-title">
                      <a href="#">Phụ kiện khác</a>
                    </li>
                  </ul>
                  <ul className="col-lg-4">
                    <li className="dropdown-title dropdown-h">
                      <a href="#">Sứ nghệ thuật</a>
                    </li>
                    <li className="dropdown-title">
                      <a href="#">Tượng Linh Vật</a>
                    </li>
                    <li className="dropdown-title">
                      <a href="#">Tượng trang trí</a>
                    </li>
                    <li className="dropdown-title">
                      <a href="#">Bình Hoa</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="dropdown-right col-lg-4 ">
                <img src="assets/img/megamenu_banner.webp" />
              </div>
            </div>
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
        <a href="#" className="dropdown-user">
          <FontAwesomeIcon className="icon i-user" size="lg" icon={faUser} />
          <div className="dropdown-user-container">
            <a href="#" className="dropdown-user-item">
              Đăng ký
            </a>
            <br />
            <a href="#" className="dropdown-user-item">
              Đăng nhập
            </a>
          </div>
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
