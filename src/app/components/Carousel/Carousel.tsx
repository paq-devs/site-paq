"use client"

import React from "react"

import {Pagination} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

import "./Carousel.css"

type CarouselProps = {
  Cards: React.ReactElement[] 
}


const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      freeMode={true}
      centeredSlides={true}
      modules={[Pagination]}
    >
        {props.Cards.map((Card: React.ReactElement, i: number) => (
          <SwiperSlide key={i}>{Card}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
