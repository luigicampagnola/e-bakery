import styles from "./button.module.scss";

export default function ButtonComponent({ children, ...props }) {
  return (
    <button className={styles.container} {...props}>
      {children}
    </button>
  );
}
