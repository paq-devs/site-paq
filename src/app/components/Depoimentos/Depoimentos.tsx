"use client"
import CardDepoimento from "./CardDepoimento";
import depoimentos from "./cards";
import style from "./Depoimentos.module.css";
import "./swiper.css"
import Image from "next/image";
import Medalha from "./img/Medalha.svg"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';


export default function Depoimentos() {

  return (
    <section className={style.container}>
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

        <Swiper className={style.mySwiper}
          loop={true}
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          centeredSlides={true}
          navigation={true}
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
      </div>
    </section>
  );
}
