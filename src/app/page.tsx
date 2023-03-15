import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <form className="red-800 flex flex-col">
        <label htmlFor="loginEmail">Correo</label>
        <input id="loginEmail" type="text" />
        <label htmlFor="loginPassword">Contraseña</label>
        <input id="loginPassword" type="text" />
        <button>Entrar</button>
      </form>
      <a
        href="https://soliddarias.org/"
        rel="noreferrer noopener"
        target="_blank"
      >
        Soliddarias
      </a>
    </main>
  );
}
