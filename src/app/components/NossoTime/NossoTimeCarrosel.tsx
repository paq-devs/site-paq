
"use client";
import { useState, ReactNode } from 'react';
import Image from "next/image";
import { Diretoria, Equipe, Conselhos } from "./time";
import styles from "./NossoTimeCarrosel.module.css";

const Button: React.FC<{
  children: ReactNode;
  onClick: Function;
  selected: boolean;
}> = ({ children, onClick, selected }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`${styles.botaoNavegacao} ${
        selected
          ? styles.botaoNavegacaoSelecionado
          : styles.botaoNavegacaoNaoSelecionado
      }`}
    >
      {children}
    </button>
  );
};

const NossoTimeCarrosel: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number>(0);
  const team = [Diretoria, Equipe, Conselhos];

  return (
    <div className={styles.container}>
      <nav>
        <Button
          selected={selectedButton == 0}
          onClick={() => setSelectedButton(0)}
        >
          Diretorias
        </Button>
        <Button
          selected={selectedButton == 1}
          onClick={() => setSelectedButton(1)}
        >
          Equipe
        </Button>
        <Button
          selected={selectedButton == 2}
          onClick={() => setSelectedButton(2)}
        >
          Conselhos
        </Button>
      </nav>
      <div className={styles.containerTime} >
        {team[selectedButton].map((member, index) => (
          <div key={index} className={styles.cardPessoa} >
            <Image
              src={member.src}
              alt={`Imagem ${index + 1}`}
              width={150}
              height={150}
            />
            <h2 className={styles.CardsNossoTimeNome}>{member.nome}</h2>
            <p className={styles.CardsNossoTimeCargo}>{member.cargo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NossoTimeCarrosel;
