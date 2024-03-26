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
        data-bs-ride="carousel">
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
          <div className="carousel-item active" data-bs-interval="2500">
            <img
              src="assets/img/slider_1.webp"
              className="carousel-img-css d-block scale-img"
              alt="..."
            />
            <img src="" alt="" />
            <div className="filter"></div>
            <div className="slider-text carousel-caption d-none d-md-block moveup">
              <h2 className="title">Bộ sưu tập</h2>
              <div className="content">Gốm sứ cao cấp</div>
              <a href="#" className="btn-slider">
                Khám phá ngay
              </a>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2500">
            <img
              src="assets/img/slider_2.webp"
              className="carousel-img-css d-block scale-img"
              alt="..."
            />
            <div className="filter"></div>
            <div className="slider-text carousel-caption d-none d-md-block moveup">
              <div className="title">Bộ sưu tập</div>
              <div className="content">Ngược dòng lịch sử</div>
              <a href="#" className="btn-slider">
                Khám phá ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
