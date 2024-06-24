import Image from "next/image"
import imgTurma from './VISITA SOHO-2 1.jpg'
import imgNote from './Notebooks-24 1.svg'
import "tailwindcss/tailwind.css"
import "./SecaoInicial.css";
export default function SecaoInicial(){
  return (
    <>
      <section className="section-inicial">
        
        <div className="section-inicial_quadro">
          <p className="quadro1_text1">Um futuro</p>
        </div>

        <div className="section-inicial_quadro">
          <p className="quadro2_text2"></p>
          <div className="quadro2-img1"></div>
        </div>
        
        <div className="section-inicial_quadro">
          <div className="quadro3-img2"></div>
          <p className="quadro3_text3"></p>
        </div>
        
        <div className="section-inicial_quadro">
          <p className="quadro4_text4"></p>
          <div className="quadro4-img3"></div>
        </div>
      
      </section>
    </>
  );
}
