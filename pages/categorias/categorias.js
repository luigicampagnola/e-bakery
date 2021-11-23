import Head from "next/head";
import Button from "../../components/FilterButton";
import Layout from "../../components/Layout/layout";
import ProductCard from "../../components/ProductCard";
import styles from "./categorias.module.scss";

const data = [
  {
    id: "01",
    key: 1,
    brand: "La Toscana",
    name: "Pan",
    image: "/chilenas-01.png",
    price: 14,
    favorite: false,
  },
  {
    id: "01",
    key: 1,
    brand: "La Toscana",
    name: "Pan",
    image: "/chilenas-01.png",
    price: 14,
    favorite: false,
  },
  {
    id: "01",
    key: 1,
    brand: "La Toscana",
    name: "Pan",
    image: "/chilenas-01.png",
    price: 14,
    favorite: false,
  },
  {
    id: "01",
    key: 1,
    brand: "La Toscana",
    name: "Pan",
    image: "/chilenas-01.png",
    price: 14,
    favorite: false,
  },
  {
    id: "01",
    key: 1,
    brand: "La Toscana",
    name: "Pan",
    image: "/chilenas-01.png",
    price: 14,
    favorite: false,
  },
  {
    id: "01",
    key: 1,
    brand: "La Toscana",
    name: "Pan",
    image: "/chilenas-01.png",
    price: 14,
    favorite: false,
  },
];

export default function Categorias() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Pan Simple</title>
        </Head>

        <main className={styles.main}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              <span className={styles.emoji}>🍞 Pan Simple</span>
            </h1>
            <div className={styles.headerButton}>
              <Button type="sort" style={{ marginRight: 20 }} />
              <Button count={0} />
            </div>
          </div>
          <div className={styles.products}>
            {data.map((products) => {
              return (
                <ProductCard
                  key={products.key}
                  id={products.id}
                  brand={products.brand}
                  image={products.image}
                  price={products.price}
                />
              );
            })}
          </div>
        </main>
      </div>
    </Layout>
  );
}
