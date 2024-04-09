"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../embla/emblaCarousel";
const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const ProductCarouselPage = () => {
  return (
    <div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default ProductCarouselPage;
