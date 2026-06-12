import styles from "./app.module.css";

export function App() {
  return (
    <div className={styles.container}>
      <form className={styles.validationForm}>
        <input className={styles.validationForm__input} />
        <div className={styles.errorLabel}>Error</div>
        <input className={styles.validationForm__input} />
        <div className={styles.errorLabel}>Error</div>
        <input className={styles.validationForm__input} />
        <div className={styles.errorLabel}>Error</div>
        <button className={styles.validationForm__btn}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
