import PaqHeader from "@/app/components/(landing)/PaqHeader";
import ConectarETransformar from "@/app/components/(landing)/ConectarETransformar";
import SecaoInicial from "@/app/components/UmFuturoInovadorDiversoComecaAqui/SecaoInicial";
import PaqFaq from "@/app/components/PaqFaq";

export default function Home() {
  return (
    <>
      <PaqHeader />
      <ConectarETransformar />
      <SecaoInicial />
      <PaqFaq />
    </>
  );
}
