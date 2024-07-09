import PaqHeader from "@/app/components/(landing)/PaqHeader";
import ConectarETransformar from "@/app/components/(landing)/ConectarETransformar";
import UmFuturoInovadorDiversoComecaAqui from "@/app/components/UmFuturoInovadorDiversoComecaAqui";
import PaqFaq from "@/app/components/PaqFaq";
import Impaqtrometro from "@/app/components/Impactometro/Impaqtrometro";

export default function Home() {
  return (
    <>
      <PaqHeader />
      <ConectarETransformar />
      <UmFuturoInovadorDiversoComecaAqui />
      <Impaqtrometro />
      <PaqFaq />
    </>
  );
}
