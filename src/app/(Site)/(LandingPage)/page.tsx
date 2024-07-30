import PaqHeader from "@/app/components/Header/PaqHeader";
import ConectarETransformar from "@/app/components/ConectarETransformar";
import UmFuturoInovadorDiversoComecaAqui from "@/app/components/UmFuturoInovadorDiversoComecaAqui";
import PaqFaq from "@/app/components/PaqFaq";
import Impaqtrometro from "@/app/components/Impactometro/Impaqtrometro";
import JuntoComAGente from "@/app/components/JuntoComAGente/JuntoComAGente";

export default function Home() {
  return (
    <>
      <PaqHeader />
      <UmFuturoInovadorDiversoComecaAqui />
      <Impaqtrometro />
      <JuntoComAGente />
      <ConectarETransformar />
      <PaqFaq />
    </>
  );
}
