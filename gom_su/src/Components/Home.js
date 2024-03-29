import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "jquery/dist/jquery";
import React from "react";
import "./Css/Home.css";
import Header from "./Header";
const Home = () => {
  return (
    <div>
      <Header />
      <div
        id="carouselSlider"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-touch="false"
        pause="false">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2400">
            <img
              src="assets/img/slider_1.webp"
              className="carousel-img-css d-block scale-img"
              alt="..."
            />
            <div className="filter"></div>
            <div className="slider-text carousel-caption d-none d-md-block ">
              <h2 className="moveup title">Bộ sưu tập</h2>
              <div className="moveup content">Gốm sứ cao cấp</div>
              <a href="#" className="moveup btn-slider">
                Khám phá ngay
              </a>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2400">
            <img
              src="assets/img/slider_2.webp"
              className="carousel-img-css d-block scale-img"
              alt="..."
            />
            <div className="filter"></div>
            <div className="slider-text carousel-caption d-none d-md-block ">
              <div className="moveup title">Bộ sưu tập</div>
              <div className="moveup content">Ngược dòng lịch sử</div>
              <a href="#" className="moveup btn-slider">
                Khám phá ngay
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="section-danhmuc">
        <div className="container danhmuc-container">
          <div className="danhmuc">
            <a href="#">
              <img src="assets/img/danhmuc_1.webp" alt="" />
              <div className="shadow-danhmuc"></div>
              <div className="danhmuc-content">
                <div className="danhmuc-title">Nồi sứ dưỡng sinh</div>
                <span className="danhmuc-quantity">+ 0 sản phẩm</span>
              </div>
            </a>
          </div>
          <div className="danhmuc">
            <a href="#">
              <img src="assets/img/danhmuc_2.webp" alt="" />
              <div className="shadow-danhmuc"></div>
              <div className="danhmuc-content">
                <div className="danhmuc-title">Phòng ăn</div>
                <span className="danhmuc-quantity">+ 30 sản phẩm</span>
              </div>
            </a>
          </div>
          <div className="danhmuc">
            <a href="#">
              <img src="assets/img/danhmuc_3.webp" alt="" />
              <div className="shadow-danhmuc"></div>
              <div className="danhmuc-content">
                <div className="danhmuc-title">Sứ dưỡng sinh</div>
                <span className="danhmuc-quantity">+ 0 sản phẩm</span>
              </div>
            </a>
          </div>
          <div className="danhmuc">
            <a href="#">
              <img src="assets/img/danhmuc_4.webp" alt="" />
              <div className="shadow-danhmuc"></div>
              <div className="danhmuc-content">
                <div className="danhmuc-title">Trà - cà phê</div>
                <span className="danhmuc-quantity">+ 21 sản phẩm</span>
              </div>
            </a>
          </div>
          <div className="danhmuc">
            <a href="#">
              <img src="assets/img/danhmuc_5.webp" alt="" />
              <div className="shadow-danhmuc"></div>
              <div className="danhmuc-content">
                <div className="danhmuc-title">Phụ kiện bàn ăn</div>
                <span className="danhmuc-quantity">+ 0 sản phẩm</span>
              </div>
            </a>
          </div>
          <div className="danhmuc">
            <a href="#">
              <img src="assets/img/danhmuc_6.webp" alt="" />
              <div className="shadow-danhmuc"></div>
              <div className="danhmuc-content">
                <div className="danhmuc-title">Sứ nghệ thuật</div>
                <span className="danhmuc-quantity">+ 0 sản phẩm</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default Home;
