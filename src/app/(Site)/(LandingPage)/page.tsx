import PaqHeader from "@/app/components/(landing)/PaqHeader";
import ConectarETransformar from "@/app/components/(landing)/ConectarETransformar";
import PaqFaq from "@/app/components/PaqFaq";
import PapelPAQ from "@/app/components/PapelPAQ";

export default function Home() {
  return (
    <>
      <PaqHeader />
      <ConectarETransformar />
      <PapelPAQ />
      <PaqFaq />

    </>
  );
}
