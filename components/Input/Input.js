import styles from "./input.module.scss";

export default function Input() {
  return (
    <div>
      <input className={styles.container} placeholder="Username"></input>
    </div>
  );
}
