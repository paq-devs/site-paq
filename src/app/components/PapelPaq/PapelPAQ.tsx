'use client'
import style from "./PapelPaq.module.css";
import Image from "next/image";
import lampada from "./imgs/iconLampada.svg"
import iconLike from "./imgs/iconLike.svg";
import iconPin from "./imgs/iconPin.svg";
import iconSave from "./imgs/iconSave.svg";
import iconShining from "./imgs/iconShining.svg";
import img1 from "./imgs/img1.svg";
import img2 from "./imgs/img2.svg";
import img3 from "./imgs/img3.svg";
import img4 from "./imgs/img4.svg";

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
              <div className={style.conteudocard1}>
                <div className={style.iconetitulo}>
                  <Image src={iconLike} width={0} height={0} alt="icone de like" className={style.iconeCard1} />
                  <h2>Acolhe e empodera</h2>
                </div>
                <div className={style.text}>
                  <p>Despertamos os jovem para que eles enxerguem novos futuros possíveis, se sintam pertencentes ao ecossistema tech e se empoderem para ocupar esses espaços.</p>
                </div>
              </div>
            </div>
            <Image src={img1} alt="imagem de educandos sentados no patio da acate" className={style.img_carrossel} />
          </div>

          <div className={style.container_img_e_card}>
            <Image src={img2} alt="imagem de educandos debatendos" className={style.img_carrossel} />
            <div className={style.card2}>
              <div className={style.conteudocard2}>
                <div className={style.iconetitulo2}>
                  <Image src={iconShining} width={0} height={0} className={style.iconeCard2} alt={"icone de brilho"} />
                  <h2>Acolhe e empodera</h2>
                </div>
                <div className={style.text}>
                  <p>Despertamos os jovem para que eles enxerguem novos futuros possíveis, se sintam pertencentes ao ecossistema tech e se empoderem para ocupar esses espaços.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={style.container_img_e_card}>
            <div className={style.card3}>
              <div className={style.conteudocard3}>
              <div className={style.iconetitulo3}>
                <Image src={iconSave} alt="iconde de salvar" className={style.iconeCard3} />
                <h2>qualifica em tech</h2>
              </div>
              <div className={style.text3}>
                <p>Fornecemos acesso a infraestrutura de qualidade, cursos, mentorias e também o acompanhamento necessário para o desenvolvolvimento dos jovens até a conquista do sucesso nas principais carreiras  de tecnologia.</p>
              </div>
              </div>
            </div>
            <Image src={img3} alt="imagem educandos debatendo" className={style.img_carrossel} />
          </div>

          <div className={style.container_img_e_card}>
            <Image src={img4} alt="imagem de educandos na Acate" className={style.img_carrossel} />
            <div className={style.card4}>
              <div className={style.iconetitulo4}>
                <Image src={iconPin} alt="icone de pin" className={style.iconeCard4} />
                <h2>insere no mercado</h2>
              </div>
              <div className={style.text4}>
                <p>Promovemos mobilidade social através da empregabilidade, conectando os jovens qualificados às vagas em empresas da área de tecnologia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
