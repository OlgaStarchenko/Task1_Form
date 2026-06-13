import { useState } from "react";
import styles from "./app.module.css";

export function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const { email, password, repeatPassword } = formData;

  const isValid =
    email !== "" &&
    password !== "" &&
    repeatPassword !== "" &&
    errors.email === "" &&
    errors.password === "" &&
    errors.repeatPassword === "";

  const handleChange = ({ target }) => {
    const { name, value } = target;

    const newFormData = {
      ...formData,
      [name]: value,
    };

    const newErrors = {
      email: "",
      password: "",
      repeatPassword: "",
    };

    if (newFormData.email === "") {
      newErrors.email = "Введите email";
    } else if (!newFormData.email.includes("@")) {
      newErrors.email = "Некорректный email";
    } else {
      newErrors.email = "";
    }

    if (newFormData.password === "") {
      newErrors.password = "Введите пароль";
    } else {
      newErrors.password = "";
    }

    if (newFormData.repeatPassword === "") {
      newErrors.repeatPassword = "Повторите пароль";
    } else {
      newErrors.repeatPassword = "";
    }

    setFormData(newFormData);
    setErrors(newErrors);
  };

  const onBlur = () => {
    if (password.length < 6) {
      setErrors((prev) => ({
        ...prev,
        password: "Пароль должен быть не менее 6 символов",
      }));
    }

    if (repeatPassword !== password) {
      setErrors((prev) => ({
        ...prev,
        repeatPassword: "Пароли должны совпадать",
      }));
    } else {
      setErrors((prev) => ({ ...prev, repeatPassword: "" }));
    }
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

        {errors.email && (
          <div className={styles.errorLabel}>{errors.email}</div>
        )}

        <input
          className={styles.validationForm__input}
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          onBlur={onBlur}
        />

        {errors.password && (
          <div className={styles.errorLabel}>{errors.password}</div>
        )}

        <input
          className={styles.validationForm__input}
          name="repeatPassword"
          type="password"
          value={repeatPassword}
          onChange={handleChange}
          onBlur={onBlur}
        />

        {errors.repeatPassword && (
          <div className={styles.errorLabel}>{errors.repeatPassword}</div>
        )}

        <button
          className={styles.validationForm__btn}
          type="submit"
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
