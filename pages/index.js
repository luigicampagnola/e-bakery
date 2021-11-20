import Head from "next/head";
import styles from "./index.module.scss";
import Layout from "../components/Layout/layout";
import ButtonComponent from "../components/Button";
import FilterButton from "../components/FilterButton";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Panaderia La Toscana</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              <span className={styles.emoji}>🔥</span>Nuevos Productos
            </h1>
            <div className={styles.headerButtons}>
              <FilterButton type="sort" style={{ marginRight: 20 }} />
              <FilterButton count={0} />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
