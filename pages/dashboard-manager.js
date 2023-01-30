import React from "react";
import Head from "next/head";
import styles from "../styles/Dashboard.module.css";

export default function Home() {
  const [menu, setMenu] = React.useState("pemantauan");

  const handleClick = (target) => {
    setMenu(target);
  };

  const logout = () => {
    localStorage.removeItem("role");
    window.location.href = "/";
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Binus Corporation Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="/">Binus Corporation!</a>, <br />
          <span onClick={logout} className={styles.logout}>
            Logout
          </span>
        </h1>
      </main>
      <div className={styles.content}>
        <div className={styles.menu}>
          <ul>
            <li onClick={() => handleClick("pemantauan")}>Pemantauan</li>
            <li onClick={() => handleClick("analisis")}>Analisis</li>
            <li onClick={() => handleClick("manajemen")}>Manajemen</li>
          </ul>
        </div>
        <div className={styles.contentMenu}>
          {menu === "pemantauan" && <Pemantauan />}
          {menu === "analisis" && (
            <div>
              <Analisis />
            </div>
          )}
          {menu === "manajemen" && (
            <div>
              <Manajemen />
            </div>
          )}
        </div>
      </div>

      <footer>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Powered by Kelompok 2
        </a>
      </footer>

      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

const Pemantauan = () => {
  return (
    <div>
      <div>Penjualan</div>
      <div>Pending matters</div>
      <div>Laba</div>
      <div>Kehadiran pegawai</div>
    </div>
  );
};

const Analisis = () => {
  return (
    <div>
      <div>Laporan kejadian tak terduga</div>
    </div>
  );
};

const Manajemen = () => {
  return (
    <div>
      <div>Inventory reorder point</div>
    </div>
  );
};
