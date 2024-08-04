import Image from "next/image";

import history1 from "./img/history_1.jpg"
import history2 from "./img/history_2.jpg"
import history3 from "./img/history_3.jpg"
import history4 from "./img/history_4.jpg"
import history5 from "./img/history_5.jpg"

import "./NossaHistoria.css";

export default function NossaHistoria() {
  return (
    <div className="flex flex-col items-center my-52">

      <h2 className="mt-32" id="our-history-title"> UM POUCO DA  <br /><span className="font-bold">NOSSA HISTORIA</span></h2>
      <svg className="absolute z-0 svg-timeline-desktop" width="358" height="1583" viewBox="0 0 358 1583" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 6L294.277 56.2271C345.792 65.4919 369.287 125.951 337.547 167.57L19.9615 584.007C-10.9206 624.502 10.398 683.371 60.048 694.701L296.417 748.643C342.679 759.201 365.254 811.755 341.062 852.577L134.281 1201.5C127.878 1212.3 124.5 1224.63 124.5 1237.18V1582.5" stroke="#1EB4E9" stroke-width="11" />
      </svg>
      <svg className="z-0 svg-timeline-mobile" width="134" height="1776" viewBox="0 0 134 1776" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M70 2L10.2753 172.706C5.5396 186.241 5.07529 200.905 8.94518 214.713L125.092 629.137C129.248 643.964 128.398 659.748 122.675 674.043L18.8051 933.503C13.7138 946.221 12.466 960.153 15.2164 973.573L107.388 1423.31C109.438 1433.32 109.274 1443.65 106.909 1453.58L30.5 1774.5" stroke="#1EB4E9" stroke-width="11" />
      </svg>


      <div className="image-col grid grid-cols-2 grid-rows-2 gap-20 z-10">
        <div className="image-content">
          <div className="text-content">
            <h3 className="text-content-title">O COMEÇO DE TUDO</h3>
            <p className="text-content-content">
              O PAQ nasceu em <span className="font-bold">2018</span>,
              e tudo começou com <span className="font-bold">oficinas de robótica para crianças </span>
              nas periferias da Grande Florianópolis.
            </p>
          </div>
          <Image src={history1} alt="" width={400} height={400} className="transform scale-110 -rotate-3 rounded-3xl history-images" />
        </div>
        <div className="image-content">
          <div className="text-content">
            <h3 className="text-content-title">A TRANSFORMAÇÂO</h3>
            <p className="text-content-content">
              Em <span className="font-bold">2020</span>, com as reviravoltas da pandemia,
              percebemos a <span className="font-bold">falta de conexão</span> entre os jovens de periferia e o mercado de tecnologia.
            </p>
          </div>
          <Image src={history2} alt="" width={400} height={400} className="transform scale-110 -rotate-3 rounded-3xl history-images" />
        </div>
        <div className="image-content">
          <div className="text-content">
            <h3 className="text-content-title">A ESTRUTURAÇÂO</h3>
            <p className="text-content-content">
              Em <span className="font-bold">2021</span>, <span className="font-bold">nos oficializamos
                como Associação</span> e inauguramos o nosso primeiro centro de experiências de aprendizagem no <span className="font-bold">INAITEC - Palhoça.</span>
            </p>
          </div>
          <Image src={history3} alt="" width={400} height={400} className="transform scale-110 -rotate-3 rounded-3xl history-images" />
        </div>
        <div className="image-content">
          <div className="text-content">
            <h3 className="text-content-title">A EXPANSÂO</h3>
            <p className="text-content-content">
              No início de <span className="font-bold">2022</span> expandimos para a <span className="font-bold">ACATE - Florianópolis.</span>
            </p>
          </div>
          <Image src={history4} alt="" width={400} height={400} className="transform scale-110 -rotate-3 rounded-3xl history-images" />
        </div>
      </div>


      <div className="highlight-content flex flex-col z-10">
        <div className="mt text-content">
          <h3 className="text-content-title">HOJE</h3>
          <p className="text-content-content">
            Desde então, já impactamos <span className="font-bold">mais
              de 200 jovens</span> com nossos programas
            de aprendizagem.
          </p>
        </div>
        <Image src={history5} alt="" width={700} height={600} className="transform scale-110 -rotate-3 rounded-3xl history-images" />
      </div>
    </div>
  )
}
