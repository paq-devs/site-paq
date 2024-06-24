import "tailwindcss/tailwind.css";
import "./SecaoInicial.css";
export default function SecaoInicial() {
  return (
    <>
      <section className="container-secao">
        <div className="container-palavra">
          <p className="text-um-futuro">Um futuro</p>
        </div>

        <div className="container-palavra">
          <p className="text-diverso-inovador"></p>
          <div className="img-concarh"></div>
        </div>

        <div className="container-palavra">
          <div className="img-visita-soho"></div>
          <p className="text-comeca"></p>
        </div>

        <div className="container-palavra">
          <p className="text-aqui"></p>
          <div className="img-educandos-paq"></div>
        </div>
      </section>
    </>
  );
}
