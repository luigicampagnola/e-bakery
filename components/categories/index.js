import styles from "./categories.module.scss";
import Link from "next/link";

const CategoryItem = ({ name, link, emoji }) => {
  return (
    <div>
      <li className={styles.categoryItem}>
        <Link href={link ||"/"}>
          <a>
            <span className={styles.emoji}>{emoji}</span>
            <span>{name}</span>
          </a>
        </Link>
      </li>
    </div>
  );
};

export default function CategoriesBar() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Categorias</h2>
      <ul className={styles.categories}>
        <CategoryItem name="PAN" emoji="🍞" link="/categorias/categorias"/>
        <CategoryItem name="LACTEOS" emoji="🥛" />
        <CategoryItem name="PAN DULCE" emoji="🍩" />
        <CategoryItem name="REPOSTERIA" emoji="🍰" />
        <CategoryItem name="BEBIDAS" emoji="🧃" />
        <CategoryItem name="VARIOS" emoji="🥫" />
      </ul>
    </div>
  );
}
