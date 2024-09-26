import styles from './index.module.css';

export default function UmFuturoInovadorDiversoComecaAqui() {
  return (
    <div className={styles.container}>
      <section className={styles.sectionInicial}>
        <div className={styles.sectionInicialQuadro}>
          <p className={styles.quadro1Text}>Um futuro</p>
        </div>

        <div className={styles.sectionInicialQuadro}>
          <p className={styles.quadro2Text}></p>
          <div className={styles.quadro2Img}></div>
        </div>

        <div className={styles.sectionInicialQuadro}>
          <div className={styles.quadro3Img}></div>
          <p className={styles.quadro3Text}></p>
        </div>

        <div className={styles.sectionInicialQuadro}>
          <p className={styles.quadro4Text}></p>
          <div className={styles.quadro4Img3}></div>
          <div className={styles.quadro4Img4}></div>
        </div>
      </section>
    </div>
  );
}
