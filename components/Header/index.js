import Link from "next/link";
import Layout from "../Layout/layout";
import styles from "./header.module.scss";

import SearchIcon from "../Icons/search";

export default function Header() {
  return (
    <div>
      <nav className={styles.container}>
        <div className={styles.logoContainer}>
          <a className={styles.logo}>La Toscana</a>
        </div>
        <div className={styles.searchContainer}>
          <SearchIcon
            width={20}
            height={20}
            fill="grey"
            className={styles.searchIcon}
          />
          <form>
            <input
              className={styles.searchInput}
              placeholder="Search for products, brands and more... "
            />
          </form>
        </div>
      </nav>
    </div>
  );
}
