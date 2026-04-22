import Layout from "@/app/components/Layout";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.hero}>
        <h1>Bem-vindo ao Portal de Viagens! ✈️</h1>
        <p>
          Descubra os destinos mais incríveis do mundo. Explore culturas,
          paisagens e experiências únicas esperando por você.
        </p>
        <Link href="/destinos" className={styles.botao}>
          Ver Destinos
        </Link>
      </div>
    </Layout>
  );
}
