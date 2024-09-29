import PaqHeader from "@/app/components/Header/PaqHeader";
import ConectarETransformar from "@/app/components/ConectarETransformar";
import UmFuturoInovadorDiversoComecaAqui from "@/app/components/UmFuturoInovadorDiversoComecaAqui";
import Impaqtrometro from "@/app/components/Impactometro/Impaqtrometro";
import Depoimentos from "@/app/components/Depoimentos/Depoimentos"
import PapelPAQ from "@/app/components/PapelPaq/PapelPAQ";
import JuntoComAGente from "@/app/components/JuntoComAGente/JuntoComAGente";
import ComoFazerParte from "@/app/components/comoFazerParte/ComoFazerParte";
import ComoPossoFazerParte from "@/app/components/ComoPossoApoiar/ComoPossoApoiar";
import Contact from "@/app/components/Contact";
import { ToastContainer } from "react-toastify";
import Footer from "@/app/components/footer/footer";
import NossoTime from "@/app/components/NossoTime/NossoTime";
import ProgramasEspacos from "@/app/components/ProgramasEspacos/ProgramasEspacos";
import UmFuturoDiversoDesktop from "@/app/components/UmFuturoDiversoDesktop";

export default function Home() {
  return (
    <>
      <PaqHeader />
      <UmFuturoDiversoDesktop />
      <UmFuturoInovadorDiversoComecaAqui />
      <ConectarETransformar />
      <PapelPAQ />
      <Impaqtrometro />
      <JuntoComAGente />
      <ProgramasEspacos />
      <NossoTime />
      <Depoimentos />
      <ComoPossoFazerParte />
      <ComoFazerParte />
      <Contact />
      <ToastContainer position="bottom-center" />
      <Footer />
    </>
  );
}
