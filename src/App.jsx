import { useState } from "react";
import styles from "./app.module.css";

export function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const { email, password, repeatPassword } = formData;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    const newFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(newFormData);
  };

  const sendData = (event) => {
    event.preventDefault();
    console.log(formData);

    setFormData({ email: "", password: "", repeatPassword: "" });
  };

  return (
    <div className={styles.container}>
      <form className={styles.validationForm} onSubmit={sendData}>
        <input
          className={styles.validationForm__input}
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />

        <div className={styles.errorLabel}>Error</div>

        <input
          className={styles.validationForm__input}
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />

        <div className={styles.errorLabel}>Error</div>

        <input
          className={styles.validationForm__input}
          name="repeatPassword"
          type="password"
          value={repeatPassword}
          onChange={handleChange}
        />

        <div className={styles.errorLabel}>Error</div>

        <button className={styles.validationForm__btn} type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
