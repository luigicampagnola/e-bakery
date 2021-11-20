import CategoriesBar from "../categories";
import Header from "../Header";
import styles from "./layout.module.scss";

const CategoryItems

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <div className={styles.main}>
          <CategoriesBar />
          {children}
        </div>
      </div>
    </div>
  );
}
