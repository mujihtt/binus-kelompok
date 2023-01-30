import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Login.module.css";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" && password === "") {
      return;
    }

    if (username === "manager" && password === "manager") {
      localStorage.setItem("role", "manager");
      router.push("/dashboard-manager");
    } else if (username === "staff" && password === "staff") {
      localStorage.setItem("role", "staff");
      router.push("/dashboard-staff");
    }
    // Send a request to the server with the username and password
    // and handle the response (e.g. redirect to the homepage if successful)
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Binus Corporation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>
          Welcome to <a href="/">Binus Corporation!</a>
        </h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit" className={styles.button}>
            Log in
          </button>
        </form>
      </main>
    </div>
  );
};

export default LoginForm;
