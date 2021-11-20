import styles from "./categories.module.scss";
import Link from "next/link";

const CategoryItem = ({ name, link, emoji }) => {
  return (
    <li className={styles.categoryItem}>
      <Link href="/">
        <a>
          <span className={styles.emoji}>{emoji}</span>
          <span>{name}</span>
        </a>
      </Link>
    </li>
  );
};

export default function CategoriesBar() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Categorias</h2>
      <ul className={styles.categories}>
        <CategoryItem name="Pan" emoji="🍞" />
        <CategoryItem name="Leche" emoji="🥛" />
        <CategoryItem name="Pan Dulce" emoji="🍩" />
        <CategoryItem name="Reposteria" emoji="🍰" />
        <CategoryItem name="Jugos" emoji="🧃" />
        <CategoryItem name="Varios" emoji="🥫" />
      </ul>
    </div>
  );
}
