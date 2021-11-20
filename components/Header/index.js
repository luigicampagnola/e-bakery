import Link from "next/link";
import styles from "./header.module.scss";
import Image from 'next/image'

import SearchIcon from "../Icons/search";
import CartIcon from "../Icons/cart";

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
        <div className={styles.rightContent}>
          <Link href="/cart">
            <div className={styles.cartContainer}>
              <CartIcon width={20} height={20} className={styles.cartIcon}/>

            </div>
          </Link>
          <Link href="/">
            <div className={styles.profileContainer}>
              <Image src="/Perugia.png" height={32} width={32}/>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}
