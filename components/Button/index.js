import styles from "./button.module.scss";
import React from "react";

export default function ButtonComponent({ children, ...props }) {
  return (
    <button className={styles.container} {...props}>
      {children}
    </button>
  );
}
