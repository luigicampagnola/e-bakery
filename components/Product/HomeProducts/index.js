import React from "react";
import styles from "./homeproducts.module.scss";

export default function HomeProducts({ reverse, children }) {
  return (
    <div
      className={styles.container}
      style={{ direction: reverse ? "rtl" : "" }}
    >
      <div style={{ gridArea: "first" }}>{children[0]}</div>
      <div style={{ gridArea: "second" }}>{children[1]}</div>
      <div style={{ gridArea: "third" }}>{children[2]}</div>
      <div style={{ gridArea: "fourth" }}>{children[3]}</div>
    </div>
  );
}
