import Link from "next/link";
import styles from "./CardExpandido.module.css";

export default function CardExpandido({
  isOpen,
  setIsOpen,
  children,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <>
      {isOpen ? (
        <>
          {children}
          <div className={styles.botoes}>
            <Link href="#">Quero me inscrever!</Link>
            <Link href="#programas-e-espacos" onClick={() => setIsOpen(false)}>
              X
            </Link>
          </div>
        </>
      ) : null}
    </>
  );
}
