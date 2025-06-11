"use client";

import { useEffect, useRef } from "react";
import styles from "./banner.module.css";

const Banner = () => {
  // Defina a referência como HTMLVideoElement
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && videoRef.current) {
        // Garante que o vídeo continue tocando
        videoRef.current.play().catch((error) => {
          console.log("Erro ao tentar retomar o vídeo:", error);
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className={styles.banner}>
      {/* Vídeo de fundo */}
      <video ref={videoRef} autoPlay loop muted className={styles.videoBackground}>
        <source src="/videoBackCorte.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Conteúdo do banner */}
      <div className={styles.content} >
        <h2>CONECTAR E TRANSFORMAR!</h2>
        <h3>
          Somos o <br />
          <strong>Prototipando a Quebrada</strong>
        , mas pode chamar de <strong>PAQ!</strong>
        </h3>
        <p>
          Nossa missão é <strong>conectar a juventude da periferia</strong> ao
          conhecimento e oportunidades do{" "}
          <strong>ecossistema de tecnologia!</strong>
        </p>
        <a target="_blank" href="https://www.youtube.com/watch?time_continue=2&v=9y1dih3eeJA&embeds_referring_euri=https%3A%2F%2Fprototipandoaquebrada.org%2F&source_ve_path=Mjg2NjY">Ver vídeo completo <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3 .4z"/></svg></a>
      </div>
    </div>
  );
};

export default Banner;
