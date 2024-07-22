'use client'
import style from "./PapelPaq.module.css";
import lampada from "../../../public/images/Vector.svg";
import Image from "next/image";
import like from "../../../public/images/Thumbup--Streamline-Beveled-Scribbles.svg";
import { LuSunMedium } from "react-icons/lu";
import { TfiSave } from "react-icons/tfi";
import { GrFormPin } from "react-icons/gr";
import img1 from "../../../public/images/Mask group-compressed.jpg";
import img2 from "../../../public/images/Mask groupmissaoPaq2.jpg";
import img3 from "../../../public/images/IMG_9646missaoPaq3.jpg"
import img4 from "../../../public/images/IMG_9895 (1)missaoPaq4.png"

export default async function PapelPAQ() {
  return (
    <section className={style.papelPaq}>
      <div className={style.separacao_text}>
        <article className={style.conteudo_text}>
          <Image src={lampada} className={style.iconelampada} width={87.43} height={80.86} alt="imagem de lampada simbolizando ideia" />
          <h2>PAPEL DO PAQ <br /><span>NA MISSÃO</span></h2>
        </article>
        <div className={style.textPaqFortalece}>
          <p>O PAQ fortalece a jornada de quem tá com a gente através desses pilares:</p>
        </div>
      </div>

      <div className={style.separacao_carrossel}>
        <div className={style.carrossel}>


          <div className={style.container_img_e_card}>
            <div className={style.card1}>
              <div className={style.iconetitulo}>
                <Image src={like} width={0} height={0} alt="imagem de um joinha" className={style.iconeCard1} />
                <h2>Acolhe e empodera</h2>
              </div>
              <div className={style.text}>
                <p>Despertamos os jovem para que eles enxerguem novos futuros possíveis, se sintam pertencentes ao ecossistema tech e se empoderem para ocupar esses espaços.</p>
              </div>
            </div>
            <Image src={img1} alt="a" className={style.img_carrossel} />
          </div>

          <div className={style.container_img_e_card}>
            <Image src={img2} alt="a" className={style.img_carrossel} />
            <div className={style.card2}>
              <div className={style.iconetitulo}>
                <LuSunMedium className={style.iconeCard2} />
                <h2>Acolhe e empodera</h2>
              </div>
              <div className={style.text}>
                <p>Despertamos os jovem para que eles enxerguem novos futuros possíveis, se sintam pertencentes ao ecossistema tech e se empoderem para ocupar esses espaços.</p>
              </div>
            </div>
          </div>

          <div className={style.container_img_e_card}>
            <div className={style.card3}>
              <div className={style.iconetitulo}>
                <TfiSave className={style.iconeCard3} />
                <h2>qualifica em tech</h2>
              </div>
              <div className={style.text}>
                <p>Fornecemos acesso a infraestrutura de qualidade, cursos, mentorias e também o acompanhamento necessário para o desenvolvolvimento dos jovens até a conquista do sucesso nas principais carreiras  de tecnologia.</p>
              </div>
            </div>
            <Image src={img3} alt="a" className={style.img_carrossel} />
          </div>

          <div className={style.container_img_e_card}>
            <Image src={img4} alt="a" className={style.img_carrossel} />
            <div className={style.card4}>
              <div className={style.iconetitulo}>
                <GrFormPin className={style.iconeCard4} />
                <h2>insere no mercado</h2>
              </div>
              <div className={style.text}>
                <p>Promovemos mobilidade social através da empregabilidade, conectando os jovens qualificados às vagas em empresas da área de tecnologia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
