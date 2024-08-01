import PaqHeader from "@/app/components/Header/PaqHeader";
import ConectarETransformar from "@/app/components/ConectarETransformar";
import UmFuturoInovadorDiversoComecaAqui from "@/app/components/UmFuturoInovadorDiversoComecaAqui";
import PaqFaq from "@/app/components/PaqFaq";
import Impaqtrometro from "@/app/components/Impactometro/Impaqtrometro";
import PapelPAQ from "@/app/components/PapelPaq/PapelPAQ";
import JuntoComAGente from "@/app/components/JuntoComAGente/JuntoComAGente";
import ComoFazerParte from "@/app/components/comoFazerParte/ComoFazerParte";
import Contact from "@/app/components/Contact";
import { ToastContainer } from "react-toastify";
import Footer from "@/app/components/footer/footer";

export default function Home() {
  return (
    <>
      <PaqHeader />
      <UmFuturoInovadorDiversoComecaAqui />
      <ConectarETransformar />
      <PapelPAQ />
      <Impaqtrometro />
      <JuntoComAGente />
      <ComoFazerParte />
      <PaqFaq />
      <Contact />
      <ToastContainer position="bottom-center" />
      <Footer/>
    </>
  );
}
