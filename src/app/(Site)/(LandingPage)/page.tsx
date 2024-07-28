import PaqHeader from "@/app/components/(landing)/PaqHeader";
import ConectarETransformar from "@/app/components/ConectarETransformar";
import UmFuturoInovadorDiversoComecaAqui from "@/app/components/UmFuturoInovadorDiversoComecaAqui";
import PaqFaq from "@/app/components/PaqFaq";
import Contact from "@/app/components/Contact";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <PaqHeader />
      <UmFuturoInovadorDiversoComecaAqui />
      <ConectarETransformar />
      <PaqFaq />
      <Contact />
      <ToastContainer position="bottom-center" />
    </>
  );
}
