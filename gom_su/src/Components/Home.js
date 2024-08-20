import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "jquery/dist/jquery";
import React from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "./Css/Home.css";
import Header from "./Header";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Home = () => {
  return (
    <div>
      <Header />
      {/* <div
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
      </div> */}
      <Swiper
        // install Swiper modules
        modules={[Pagination, Navigation, EffectFade, Autoplay]}
        effect="fade"
        slidesPerView={1}
        autoplay={{ delay: 2400, disableOnInteraction: false }}
        pagination={{ clickable: false }}
        loop={true}>
        <SwiperSlide className="slider-container">
          <img
            src="assets/img/slider_1.webp"
            className="carousel-img-css d-block scale-img"
            alt="..."
          />
          <div className="filter"></div>
          <div className="slider-text  d-none d-md-flex ">
            <h2 className="moveup title">Bộ sưu tập</h2>
            <div className="moveup content">Gốm sứ cao cấp</div>
            <a href="#" className="moveup btn-slider">
              Khám phá ngay
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <img
            src="assets/img/slider_2.webp"
            className="carousel-img-css d-block scale-img"
            alt="..."
          />
          <div className="filter"></div>
          <div className="slider-text  d-none d-md-flex ">
            <div className="moveup title">Bộ sưu tập</div>
            <div className="moveup content">Ngược dòng lịch sử</div>
            <a href="#" className="moveup btn-slider">
              Khám phá ngay
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
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
      <section className="section-banner">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-12">
              <a href="#">
                <img src="assets/img/banner1.webp" alt="" />
              </a>
            </div>
            <div className="col-md-6 col-12">
              <a href="#">
                <img src="assets/img/banner2.webp" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default Home;
