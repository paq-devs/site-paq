import PaqHeader from "@/app/components/Header/PaqHeader";
import ConectarETransformar from "@/app/components/ConectarETransformar";
import UmFuturoInovadorDiversoComecaAqui from "@/app/components/UmFuturoInovadorDiversoComecaAqui";
import PaqFaq from "@/app/components/PaqFaq";
import Impaqtrometro from "@/app/components/Impactometro/Impaqtrometro";
import PapelPAQ from "@/app/components/PapelPaq/PapelPAQ";
import JuntoComAGente from "@/app/components/JuntoComAGente/JuntoComAGente";
import ComoFazerParte from "@/app/components/comoFazerParte/ComoFazerParte";
import ComoPossoFazerParte from "@/app/components/ComoPossoApoiar/ComoPossoApoiar";
import Contact from "@/app/components/Contact";
import { ToastContainer } from "react-toastify";
import Footer from "@/app/components/footer/footer";
import { MenuHamburguer } from "@/app/components/Headerv2/Headerv2";

export default function Home() {
  return (
    <>
      <MenuHamburguer />
      <UmFuturoInovadorDiversoComecaAqui/>
      <ConectarETransformar />
      <PapelPAQ />
      <Impaqtrometro />
      <JuntoComAGente />
      <ComoPossoFazerParte />
      <ComoFazerParte />
      <Contact />
      <ToastContainer position="bottom-center" />
      <Footer/>
    </>
  );
}
