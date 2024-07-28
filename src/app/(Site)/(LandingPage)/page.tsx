import PaqHeader from "@/app/components/(landing)/PaqHeader";
import ConectarETransformar from "@/app/components/(landing)/ConectarETransformar";
import UmFuturoInovadorDiversoComecaAqui from "@/app/components/UmFuturoInovadorDiversoComecaAqui";
import PaqFaq from "@/app/components/PaqFaq";
import Impaqtrometro from "@/app/components/Impactometro/Impaqtrometro";
import JuntoComAGente from "@/app/components/JuntoComAGente/JuntoComAGente";
import ComoFazerParte from "@/app/components/comoFazerParte/ComoFazerParte";

export default function Home() {
  return (
    <>
      <PaqHeader />
      <ConectarETransformar />
      <UmFuturoInovadorDiversoComecaAqui />
      <Impaqtrometro />
      <JuntoComAGente />
      <ComoFazerParte />
      <PaqFaq />
    </>
  );
}
