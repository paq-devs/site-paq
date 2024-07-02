import PaqHeader from "@/app/components/(landing)/PaqHeader";
import ConectarETransformar from "@/app/components/(landing)/ConectarETransformar";
import UmFuturoInovadorDiversoComecaAqui from "@/app/components/UmFuturoInovadorDiversoComecaAqui";
import PaqFaq from "@/app/components/PaqFaq";
import PapelPAQ from "@/app/components/PapelPAQ";

export default function Home() {
  return (
    <>
      <PaqHeader />
      <ConectarETransformar />
      <PapelPAQ />
      <UmFuturoInovadorDiversoComecaAqui />
      <PaqFaq />
    </>
  );
}
