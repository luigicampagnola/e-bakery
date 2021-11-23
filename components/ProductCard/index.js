import HeartFilled from "../Icons/heart-filled";
import styles from "./productcard.module.scss";

export default function ProductCard() {
  return (
    <div className={styles.container}>
      <button className={styles.favContainer}>
        <HeartFilled width={16} height={16} />
      </button>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/chilena-01.png" />
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.brandText}>Brand</h4>
        <h4>Product Name</h4>
      </div>
    </div>
  );
}
