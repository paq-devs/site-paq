"use client"
import { useRef, useCallback } from "react";
import CardDepoimento from "./CardDepoimento";
import depoimentos from "./cards";
import style from "./Depoimentos.module.css";
import "./swiper.css"
import Image from "next/image";
import Medalha from "./img/Medalha.svg"
import Arrow from './img/arrow.svg'

import { Swiper, SwiperRef, SwiperSlide, SwiperSlideProps } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';


export default function Depoimentos() {
  const sliderRef = useRef<SwiperRef>(null)
  
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);


  return (
    <section id="historias" className={style.container}>
      <aside className={style.text_historias}>
        <div className={style.container_historias}>
          <div className={style.text_paragrafoEimg}>
            <div className={style.imgETitulo}>
              <Image src={Medalha} width={85.58} height={84} alt="" />
              <h3>Histórias de quem já viveu!</h3>
            </div>
            <p>A transformação começa aqui. Veja o que as pessoas têm a dizer sobre suas experiências dentro do PAQ.</p>
          </div>
        </div>
      </aside>
      <div className={style.carrossel}>

        <Swiper 
          ref={sliderRef}
          className={style.mySwiper}
          loop={true}
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            1440: {
              slidesPerView: 3
            },
            1024: {
              slidesPerView: 2
            }
          }}
          navigation={false}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
        >
          {depoimentos.map((depoimento, index) => (
            <SwiperSlide key={index} className="h-[80rem]">
              <CardDepoimento
                key={depoimento.id}
                id={depoimento.id}
                pathFoto={depoimento.pathFoto}
                text={depoimento.text}
                name={depoimento.name}
                role={depoimento.role}
              />

            </SwiperSlide>
          ))}
        </Swiper>
        <div className={style.custom_arrows}>
          <div onClick={handlePrev}>
            <Image className={style.left_arrow}  src={Arrow} width={85.58} height={84} alt="Voltar carrossel" />
          </div>
          
          <Image className={style.right_arrow} onClick={handleNext} src={Arrow} width={85.58} height={84} alt="Avançar carrossel" />
        </div>
      </div>
    </section>
  );
}
