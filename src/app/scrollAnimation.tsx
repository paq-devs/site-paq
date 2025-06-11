"use client";
import { useEffect } from "react";

export default function ScrollAnimation() {
  useEffect(() => {
    const elementos = document.querySelectorAll("[data-anima]");
    const animacaoClass = "animacao";

    function animaScroll() {
      const topoPagina = window.pageYOffset + window.innerHeight * 0.75;
      elementos.forEach((elemento) => {
        if (elemento instanceof HTMLElement) {
          if (topoPagina > elemento.offsetTop) {
            elemento.classList.add(animacaoClass);
          } else {
            elemento.classList.remove(animacaoClass);
          }
        }
      });
    }

    animaScroll();
    window.addEventListener("scroll", animaScroll);

    return () => {
      window.removeEventListener("scroll", animaScroll);
    };
  }, []);

  return null; // Esse componente apenas executa o efeito, sem renderizar nada
}
