import SortIcon from "../Icons/sort";
import styles from "./button.module.scss";

export default function FilterButton({ type, count, ...props }) {
  return (
    <div className={styles.container} {...props}>
      {type === "sort" ? (
        <SortIcon width={22} />
      ) : (
        <div className={styles.counter}>{count}</div>
      )}

      <span className={styles.text}>{type === "sort" ? "Sort" : "Filter"}</span>
    </div>
  );
}
