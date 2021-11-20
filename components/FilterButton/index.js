import SortIcon from "../Icons/sort";
import styles from "./button.module.scss";

export default function FilterButton({ type, count, ...props }) {
  return (
    <div className={styles.container} {...props}>
      <SortIcon width={22} />
    </div>
  );
}
