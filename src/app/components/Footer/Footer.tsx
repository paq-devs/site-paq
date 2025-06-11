import logo from './img/logopaq.png'
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

import Image from 'next/image'
import Button from '../button';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.separacao}>
        <div className={styles.logoERedes}>
          <Image src={logo} width={116} height={115.97} alt="" />
          <div className={styles.links}>
            <a
              href="https://www.instagram.com/prototipandoaquebrada/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={36} color="white" />
            </a>
            <a
              href="https://www.linkedin.com/company/prototipando-a-quebrada/mycompany/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={36} color="white" />
            </a>
            <a
              href="https://www.youtube.com/@prototipandoaquebrada7138"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={36} color="white" />
            </a>
          </div>
        </div>

        <div className={styles.linksUteis}>
          <a href="#">Link Úteis</a>
          <a href="#quem-somos">Quem somos</a>
          <a href="#papel-do-paq">O que fazemos</a>
          <a href="#juntoComAGente">Quem faz parte</a>
          <a href="#outrasFormasDeFazerParte">Participe</a>
          <a
            href="https://drive.google.com/drive/folders/137Qh9c7aQejgg9IDlzIVxlFNaneUbSKK?usp=sharing"
            target="_blank"
          >
            Relatórios
          </a>
          <a
            href="https://drive.google.com/drive/folders/11j-IDR46-vxoSy7hgWb5tOYXqPE7BJ0P?usp=drive_link"
            target="_blank"
          >
            Estatuto
          </a>
          <a
            href="https://drive.google.com/drive/folders/11NDYCP33CkR79YR7kY4ZwfQQC_YVwPVI?usp=sharing"
            target="_blank"
          >
            Balancete
          </a>
          <a href="#como-apoiar">Apoie</a>
        </div>

        <div className={styles.enderecos}>
          <div className={styles.infoContatoLocalizacao}>
            <p>
              <strong>Contato:</strong>
            </p>
            <a href="mailto:prototipandoaquebrada@gmail.com">prototipandoaquebrada@gmail.com
            </a>
          </div>
          <div className={styles.infoContatoLocalizacao}>
            <p>
              <strong>Ouvidoria:</strong>
            </p>
            <a href="mailto:ouvidoria@prototipandoaquebrada.org">
              ouvidoria@prototipandoaquebrada.org
            </a>
          </div>
          <div className={styles.infoContatoLocalizacao}>
            <p>
              <strong>Unidade Floripa</strong>
            </p>
            <p>SC-401, 4100 - Saco Grande,</p>
            <p>Florianópolis - SC, 88032-005</p>
            <p>
              <strong>Unidade Palhoça</strong>
            </p>
            <p>Av. das Águias - Cidade Universitária</p>
            <p>Pedra Branca, Palhoça - SC</p>
          </div>
        </div>

        <div className={styles.containerNews}>
          <h2>NEWSLETTER</h2>
          <p>Fique por dentro de tudo que acontece dentro da comunidade</p>
          <Button
            title="ASSINE A NEWS"
            width="307.28px"
            height="42.33px"
            href="https://mailchi.mp/000740174af9/paqnews"
            newTab
          />
        </div>
      </div>
      <p>
        © 2024 | Direitos reservados | Política de privacidade e termos de uso.
        <br />
        Feito com ❤️ pelos educandos do PAQ.
      </p>
    </footer>
  );
}
