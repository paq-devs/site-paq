"use client"

import Image from "next/image";
import VideoConexao from "./VideoConexao";
import Button from "../button";
import imagemSetaAbaixo from "./img/setaAbaixo.svg";
import imagemCompartilhar from "./img/compartilhar.svg";
import styles from "./ConectarETransformar.module.css";
import history from "./NossaHistoria.module.css"
import NossaHistoria from "../NossaHistoria/NossaHistoria";
import { useState } from "react";

import history1 from "./img/history_1.jpg"
import history2 from "./img/history_2.jpg"
import history3 from "./img/history_3.jpg"
import history4 from "./img/history_4.jpg"
import history5 from "./img/history_5.jpg"


const ConectarETransformar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="quem-somos" className={styles.container}>
      <Image src={imagemSetaAbaixo} width={70} height={70} alt="" />
      <Image
        src={imagemCompartilhar}
        width={53}
        height={53}
        alt=""
        className="xl:hidden"
      />
      <div className="text-[#00171F] text-center font-formula-condensed text-[45px] font-normal leading-[40px] uppercase mt-2 xl:text-[60px] xl:leading-[68px]">
        <h1>CONECTAR E</h1>
        <h2 className="text-[#00171F] font-formula-condensed text-[45px] font-bold leading-[40px] uppercase xl:text-[60px] xl:leading-[68px]">
          TRANSFORMAR!
        </h2>
      </div>
      <div className={styles.textoSubtitulo}>
        <p>
          Somos o <strong>Prototipando a Quebrada, </strong>
          mas pode chamar de <strong>PAQ!</strong>
        </p>
        <p>
          Nossa missão é <strong>conectar a juventude da periferia</strong>
          ao conhecimento e oportunidades do{" "}
          <strong>ecossistema de tecnologia!</strong>
        </p>
      </div>
      <VideoConexao />
      <div className={styles.textoAbaixoVideo}>
        <p>
          Além de uma ONG, somos uma{" "}
          <strong>comunidade de aprendizagem.</strong>
        </p>
        <p>
          Somos uma ponte{" "}
          <strong>entre a quebrada e os centros de inovação</strong> e
          acreditamos que acabar com a desigualdade social{" "}
          <strong>é uma missão coletiva.</strong>
        </p>
      </div>
      <div className="py-[34px]">
        <button onClick={() => setIsOpen(!isOpen)} className={styles.btn}>
          NOSSA HISTÓRIA
        </button>
        <div className={`grid overflow-hidden transition-all duration-1000 ease-in-out 
        ${isOpen ? 'flex opacity-100 transition-all duration-1000 ease-in-out h-[3000px]' : 'flex opacity-0 h-0'
          }`}>
          <div className="overflow-hidden ">
            <div className={history.containerPrincipal}>
              <div>
                <h2 className={history.tituloPrincipal}> UM POUCO DA  <br /><span className="font-bold">NOSSA HISTORIA</span></h2>
              </div>

              <div className={history.containerImagensETextos}>

                <div className="flex flex-col gap-y-32">
                  <div className={history.image_content}>
                    <div className={history.text_content}>
                      <h3 className={history.text_content_title}>O COMEÇO DE TUDO</h3>
                      <p className={history.text_content_content}>
                        O PAQ nasceu em <span className="font-bold">2018</span>,
                        e tudo começou com <span className="font-bold">oficinas de robótica para crianças </span>
                        nas periferias da Grande Florianópolis.
                      </p>
                    </div>
                    <div className="my-[-50px]">
                      <Image src={history1} alt="" className={history.img1} />
                    </div>
                  </div>
                  <div className={history.image_content}>
                    <div className={history.text_content}>
                      <h3 className={history.text_content_title}>A ESTRUTURAÇÂO</h3>
                      <p className={history.text_content_content}>
                        Em <span className="font-bold">2021</span>, <span className="font-bold">nos oficializamos
                          como Associação</span> e inauguramos o nosso primeiro centro de experiências de aprendizagem no <span className="font-bold">INAITEC - Palhoça.</span>
                      </p>
                    </div>
                    <div className="my-[-50px]">
                      <Image src={history3} alt="" className={history.img1} />
                    </div>
                  </div>
                </div>


                <div className="flex flex-col gap-y-32 my-[100px]">
                  <div className={history.image_content}>
                    <div className={history.text_content}>
                      <h3 className={history.text_content_title}>A TRANSFORMAÇÂO</h3>
                      <p className={history.text_content_content}>
                        Em <span className="font-bold">2020</span>, com as reviravoltas da pandemia,
                        percebemos a <span className="font-bold">falta de conexão</span> entre os jovens de periferia e o mercado de tecnologia.
                      </p>
                    </div>
                    <div className="my-[-50px]">
                      <Image src={history2} alt="" className={history.img1} />
                    </div>
                  </div>

                  <div className={history.image_content}>
                    <div className={history.text_content}>
                      <h3 className={history.text_content_title}>A EXPANSÂO</h3>
                      <p className={history.text_content_content}>
                        No início de <span className="font-bold">2022</span> expandimos para a <span className="font-bold">ACATE - Florianópolis.</span>
                      </p>
                    </div>
                    <div className="my-[-50px]">
                      <Image src={history4} alt="" className={history.img1} />
                    </div>
                  </div>
                </div>
              </div>


              <div className={history.image_content}>
                <div className={history.text_content}>
                  <h3 className={history.text_content_title}>HOJE</h3>
                  <p className={history.text_content_content}>
                    Desde então, já impactamos <span className="font-bold">mais
                      de 200 jovens</span> com nossos programas
                    de aprendizagem.
                  </p>
                </div>
                <div className="my-[-50px]">
                <Image src={history5} alt="" className={history.img5}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConectarETransformar;
