"use client"
import CardDepoimento from "./CardDepoimento";
import depoimentos from "./cards";
import style from "./CardDepoimento.module.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';


export default function Depoimentos() {

  return (
    <section className="bg-[#00171F]">
      <aside></aside>
      <div className={style.carrossel}>
        
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
        >
          {depoimentos.map((depoimento) => (
            <SwiperSlide>
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


      <div>

      </div>
    </section>
  );
}