import Image from "next/image";
import style from "./pages.module.css";

export default function Home() {
  return (
      <section className={style.section2}>
        <p className='text-[2.5rem]'>Impactos do Prototipando a Quebrada</p>
        <p className='text[#BEBEBE]'>Promovendo um impacto positivo e transformador na vida de</p>
        <p className='text[#BEBEBE]'>jovens por meio da inovação e da tecnologia, capacitando-os</p>
        <p className='text[#BEBEBE]'>para um futuro promissor e repleto de oportunidades.</p>
        
        <div className={style.imagens}>
          <div className={style.container_imagens1}>
            <div className={style.section2__quadro1}>
              icone
              <p><span>200</span><span>+</span></p>
              <p>Educandos</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur accusamus neque molestiae magnam? Quaerat a numquam ratione facilis aliquam libero rem quia reiciendis voluptas incidunt beatae, dolorum, sint, eaque dicta?</p>
            </div>

            <div className={style.section2__quadro2}>
              icone
              <p><span>540</span><span>+</span></p>
              <p>Familias</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur accusamus neque molestiae magnam? Quaerat a numquam ratione facilis aliquam libero rem quia reiciendis voluptas incidunt beatae, dolorum, sint, eaque dicta?</p>
            </div>
            <div className={style.luz1}></div>
          </div>
          <div className={style.img_logo}>
          <Image src="../logo 3.svg" width={10} height={10} alt={"logo do paq"} className={style.teste_logo}/>
          </div>
          <div className={style.container_imagens2}>
            <div className={style.section2__quadro3}>
              icone
              <p><span>15</span><span>+</span></p>
              <p>voluntários</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur accusamus neque molestiae magnam? Quaerat a numquam ratione facilis aliquam libero rem quia reiciendis voluptas incidunt beatae, dolorum, sint, eaque dicta?</p>
            </div>

            <div className={style.section2__quadro4}>
              icone
              <p><span>25</span><span>+</span></p>
              <p>investidores</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur accusamus neque molestiae magnam? Quaerat a numquam ratione facilis aliquam libero rem quia reiciendis voluptas incidunt beatae, dolorum, sint, eaque dicta?</p>
            </div>
          </div>
        </div>
      </section>
  );
}
