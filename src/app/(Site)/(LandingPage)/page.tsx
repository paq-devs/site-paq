import PaqHeader from "@/app/components/Header/PaqHeader";
import Banner from "@/app/components/Banner/banner";
//import ConectarETransformar from "@/app/components/ConectarETransformar";
//import UmFuturoInovadorDiversoComecaAqui from "@/app/components/UmFuturoInovadorDiversoComecaAqui";
import Impaqtrometro from "@/app/components/Impactometro/Impaqtrometro";
import Depoimentos from "@/app/components/Depoimentos/Depoimentos"
import PapelPAQ from "@/app/components/PapelPaq/PapelPAQ";
//import UnidadesEspacos from "@/app/components/UnidadesEspacos/UnidadesEspacos";
import JuntoComAGente from "@/app/components/JuntoComAGente/JuntoComAGente";
import ComoFazerParte from "@/app/components/comoFazerParte/ComoFazerParte";
//import ExperienciasAprendizado from "@/app/components/ExperienciasAprendizado/ExperienciasAprendizado";
//import ProgramasExperiencias from "@/app/components/ProgramasExperiencias/ProgramasExperiencias";
import ComoPossoFazerParte from "@/app/components/ComoPossoApoiar/ComoPossoApoiar";
import Contact from "@/app/components/Contact";
import { ToastContainer } from "react-toastify";
import Footer from "@/app/components/Footer";
import NossoTime from "@/app/components/NossoTime/NossoTime";
import ProgramasEspacos from "@/app/components/ProgramasEspacos/ProgramasEspacos";


export default function Home() {
  return (
    <>
      <PaqHeader />
      <Banner />
      <PapelPAQ />
      <ProgramasEspacos />
      <Impaqtrometro />
      <NossoTime />
      <JuntoComAGente />
      <ComoFazerParte />
      <Depoimentos />
      <ComoPossoFazerParte />
      <Contact />
      <ToastContainer position="bottom-center" />
      <Footer />
    </>
  );
}
