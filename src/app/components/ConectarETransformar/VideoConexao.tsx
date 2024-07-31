"use client";
import styles from "./VideoConexao.module.css";

export default function VideoConexao() {
  return (
    <div className={styles.videoContainer}>
      <iframe
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
        allowFullScreen
        className="rounded-md"
      ></iframe>
    </div>
  );
}
