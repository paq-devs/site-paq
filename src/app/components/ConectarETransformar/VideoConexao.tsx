"use client";
import styles from "./VideoConexao.module.css";

export default function VideoConexao() {
  return (
    <div className={styles.videoContainer}>
      <iframe
        src="https://www.youtube.com/embed/9y1dih3eeJA?si=NO0ahc6Gf2caZ_gf"
        allowFullScreen
      ></iframe>
    </div>
  );
}
