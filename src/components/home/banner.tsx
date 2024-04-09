"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import banner1 from "../../assest/banner/banner1.png";
import banner2 from "../../assest/banner/banner2.png";
import banner3 from "../../assest/banner/banner3.png";

const BannerPage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 4000,
  };
  return (
    <div className="overflow-hidden container pt-6">
      <Slider {...settings}>
        <div>
          <Image
            src={banner1}
            alt=""
            className="w-full h-[600px] object-cover"
          />
        </div>
        <div>
          <Image src={banner2} alt="" className="w-full h-[600px]" />
        </div>
        <div>
          <Image src={banner3} alt="" className="w-full h-[600px]" />
        </div>
      </Slider>
    </div>
  );
};

export default BannerPage;
