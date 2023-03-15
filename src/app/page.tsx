import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
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
