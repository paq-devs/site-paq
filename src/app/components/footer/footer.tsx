import logo from './img/logopaq.png'
import { FaInstagram, FaLinkedin, FaYoutube   } from "react-icons/fa";
import styles from "./Footer.module.css";

import Image from 'next/image'

export default function  Footer(){
  return (
    <footer className={styles.container}>
      <Image
        src={logo}
        width={86}
        height={86}
        alt=""
      />
      <div className={styles.links}>
        <a
          href="https://www.instagram.com/prototipandoaquebrada/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} color="white" />
        </a>
        <a
          href="https://www.linkedin.com/company/prototipando-a-quebrada/mycompany/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} color="white" />
        </a>
        <a
          href="https://www.youtube.com/@prototipandoaquebrada7138"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={30} color="white" />
        </a>
      </div>
      <p>
        © 2024 | Direitos reservados | Política de privacidade e termos de uso.
        <br />
        Feito com ❤️ pelos educandos.
      </p>
    </footer>
  );
}
