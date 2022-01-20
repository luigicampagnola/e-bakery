import LoginForm from "./login-form";
import styles from "./login.module.scss";
import Link from "next/link";
export default function Login() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={styles.logo}>La Toscana</div>
      </Link>
      <div className={styles.content}>
        <div className={styles.switchContainer}>
          <button className={styles.switchButton}>
            <span>Login</span>
          </button>
          <button className={styles.switchButton}>
            <span>Register</span>
          </button>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
