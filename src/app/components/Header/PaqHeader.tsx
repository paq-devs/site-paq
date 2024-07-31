import { Header } from "./header";
import style from "./PaqHeader.module.css";

export default function PaqHeader() {
  return (
    <section className={style.header}>
      <Header />
    </section>
  );
}
