import styles from "./categories.module.scss";
import Link from "next/link";

const CategoryItem = ({ name, link, emoji }) => {
  return (
    <div>
      <li className={styles.categoryItem}>
        <Link href={link || "/"}>
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
        <CategoryItem name="PAN" emoji="🍞" link="/categorias/PAN" />
        <CategoryItem name="LACTEOS" emoji="🥛" link="/categorias/LACTEOS" />
        <CategoryItem name="PAN DULCE" emoji="🍩" link="/categorias/PAN DULCE" />
        <CategoryItem name="REPOSTERIA" emoji="🍰" link="/categorias/REPOSTERIA" />
        <CategoryItem name="BEBIDAS" emoji="🧃" link="/categorias/BEBIDAS" />
        <CategoryItem name="VARIOS" emoji="🥫" link="/categorias/VARIOS" />
      </ul>
    </div>
  );
}
