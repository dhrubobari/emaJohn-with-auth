import React from "react";
import "../Banner/Banner.css";
import headphoneBanner from "../../images/headphones-sales-banner.png";
import watchBanner from "../../images/vintage-dark-interior-podium.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

function Banner() {
  return (
    <div className="banner">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <nav class="navbar bg-light">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fa fa-home"></i>Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fa fa-shopping-bag"></i>Best Selling
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fa fa-plus-square"></i>New Arrivals
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fa fa-female"></i>Fashion & Beauty
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fa fa-child"></i>Kids & Babies Clothes
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fa fa-tshirt"></i>Men & Women Clothes
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fa fa-mobile-alt"></i>Gadgets & Accessories
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fa fa-microchip"></i>Electronics & Accessories
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col-md-6">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide><img src={headphoneBanner} alt=""/></SwiperSlide>
              <SwiperSlide><img src={watchBanner} alt=""/></SwiperSlide>
            </Swiper>
          </div>
          <div class="col-md-3">
            <div class="header-img">
              <div class="img-item">
                <img src={headphoneBanner} />
                <a class="img-text" href="">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
              <div class="img-item">
                <img src={watchBanner} />
                <a class="img-text" href="">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
