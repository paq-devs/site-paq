import styles from "./ProgramasEspacosImersao.module.css";

export default function ProgramasEspacosImersao() {
  return (
    <div className={styles.container}>
      <h2>Imersão</h2>
      <header>
        <div>
          <p>
            Primeiros passos para explorar as carreiras cultura do ecossistema
            de tecnologia, desenvolver habilidades e competências básicas -
            <strong>Porta de entrada</strong> para quem quer iniciar no PAQ!
          </p>
          <p>
            <strong>Conteúdo:</strong> Expanda a visão sobre mercado tech
            Conheça as principais carreiras para se seguir na tech e troque
            ideia com profissionais incríveis de diversas áreas.
          </p>
        </div>
        <p>
          <ul>
            <li>
              <strong>Informações Importantes: </strong>
            </li>
            <li><strong>Público:</strong> Jovens de 16 a 21 anos </li>
            <li><strong>Duração:</strong> 8 semanas</li>
            <li>
            <strong>Formato:</strong> Presencial nas unidades Pedra Branca (Palhoça) e SC-401
              (Florianópolis)
            </li>
            <li><strong>Inscrições:</strong> trimestralmente (Site e instagram)</li>
            <li><strong>Pré-requisitos:</strong> Conhecimentos básicos de informática</li>
          </ul>
        </p>
      </header>
    </div>
  );
}
