import Layout from "@/app/components/Layout";
import CardDestino from "@/app/components/CardDestino";
import { destinos } from "@/app/data/destinos";
import styles from "./destinos.module.css";

export default function Destinos() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.titulo}>Destinos Turísticos 🌍</h1>
        <div className={styles.grid}>
          {destinos.map((destino) => (
            <CardDestino key={destino.id} destino={destino} />
          ))}
        </div>
      </div>
    </Layout>
  );
}