import Image from "next/image";
import { Destino } from "@/app/types/destino";
import styles from "./CardDestino.module.css";

type Props = {
  destino: Destino;
};

export default function CardDestino({ destino }: Props) {
  return (
    <div className={styles.card}>
      <Image
        src={destino.imagem}
        alt={destino.nome}
        width={300}
        height={200}
        className={styles.imagem}
      />
      <div className={styles.info}>
        <h2>{destino.nome}</h2>
        <p>{destino.descricao}</p>
      </div>
    </div>
  );
}