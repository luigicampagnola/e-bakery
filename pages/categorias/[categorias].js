import Head from "next/head";
import Button from "../../components/FilterButton";
import Layout from "../../components/Layout/layout";
import ProductCard from "../../components/ProductCard";
import styles from "./categorias.module.scss";
import { useRouter } from "next/router";

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
    key: 2,
    brand: "La Toscana",
    name: "Pan",
    image: "/chilenas-01.png",
    price: 14,
    favorite: false,
  },
  {
    id: "01",
    key: 3,
    brand: "La Toscana",
    name: "Pan",
    image: "/chilenas-01.png",
    price: 14,
    favorite: false,
  },
  {
    id: "01",
    key: 4,
    brand: "La Toscana",
    name: "Pan",
    image: "/chilenas-01.png",
    price: 14,
    favorite: false,
  },
  {
    id: "01",
    key: 5,
    brand: "La Toscana",
    name: "Pan",
    image: "/chilenas-01.png",
    price: 14,
    favorite: false,
  },
  {
    id: "01",
    key: 6,
    brand: "La Toscana",
    name: "Pan",
    image: "/chilenas-01.png",
    price: 14,
    favorite: false,
  },
];

const getEmoji = {
  PAN: "🍞",
  LACTEOS: "🥛",
  "PAN DULCE": "🍩",
  REPOSTERIA: "🍰",
  BEBIDAS: "🧃",
  VARIOS: "🥫",
};

export default function Categorias() {
  const router = useRouter();
  const { categorias } = router.query;

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>{categorias}</title>
        </Head>

        <main className={styles.main}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              <span className={styles.emoji}>
                {getEmoji[categorias]} {categorias}
              </span>
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
