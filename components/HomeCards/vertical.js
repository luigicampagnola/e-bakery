import Image from "next/image";
import styles from "./vertical.module.scss";

export default function VerticalCard({
  bgColor,  
}) {
  return (
    <div>
      <div
        className={styles.verticalCard}
        style={{
          backgroundColor: bgColor || "",
          border: "2px solid #eee",
        }}
      >
        18
        <button className={styles.favContainer}>30%</button>
        <div className={styles.imageContainer}>
          <img src="/pan.jpg" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h4 className={styles.brandText}>Brand</h4>
          <h4>Product</h4>
        </div>
        {/*         <div className={styles.priceContainer}>
          <div className={styles.prices}>
            <span className={styles.priceText}>$1</span>
          </div>
        </div> */}
        <span className={styles.salePriceText}>20$</span>
      </div>
    </div>
  );
}
