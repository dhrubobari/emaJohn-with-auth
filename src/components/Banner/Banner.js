import React from "react";
import "../Banner/Banner.css";
import headphoneBanner from "../../images/headphones-sales-banner.png";
import shoesBanner from "../../images/shoes-craze-sale-facebook-ad-design-template.jpg";
import watchBanner from "../../images/watch-sale-ad-promote-template-design.png";
import airpodsPro from "../../images/rugged_case_airpods_pro.png";
import appleWatch from "../../images/applewatchekg.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function Banner() {
  return (
    <div className="banner">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <nav class="navbar">
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
          <div class="col-md-6 px-1 swiper-container">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              navigation
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={headphoneBanner} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={shoesBanner} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={watchBanner} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="col-md-3 px-1 side-img">
            <div class="header-img">
              <div class="img-item">
                <img src={airpodsPro} />
                <a class="img-text" href="">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
              <div class="img-item mt-1">
                <img src={appleWatch} />
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
