import PaqHeader from "@/app/components/Header/PaqHeader";
import ConectarETransformar from "@/app/components/ConectarETransformar";
import UmFuturoInovadorDiversoComecaAqui from "@/app/components/UmFuturoInovadorDiversoComecaAqui";
import PaqFaq from "@/app/components/PaqFaq";
import Impaqtrometro from "@/app/components/Impactometro/Impaqtrometro";
import JuntoComAGente from "@/app/components/JuntoComAGente/JuntoComAGente";
import ComoFazerParte from "@/app/components/comoFazerParte/ComoFazerParte";
import ComoPossoFazerParte from "@/app/components/ComoPossoApoiar/ComoPossoApoiar";
import Contact from "@/app/components/Contact";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <PaqHeader />
      <Impaqtrometro />
      <JuntoComAGente />
      <ComoPossoFazerParte />
      <ComoFazerParte />
      <ConectarETransformar />
      <PaqFaq />
      <Contact />
      <ToastContainer position="bottom-center" />
    </>
  );
}
