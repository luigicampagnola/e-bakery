import LoginForm from "./login-form";
import styles from "./login.module.scss";

export default function Login() {
  return (
    <div className={styles.container}>
      <a className={styles.logo}>La Toscana</a>
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
