"use client";

import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { FormEvent } from "react";
import styles from "./page.module.css";

export default function Home() {
  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    if (formData.get("login") && formData.get("password")) {
      // TODO: redirect to dashboard.
      console.log("redirect to dashboard");
    }
  };

  return (
    <main className={styles.main}>
      <h1 className="text-3xl font-bold underline">
        <a
          href="https://soliddarias.org/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Soliddarias
        </a>
      </h1>
      <form className="w-full max-w-sm" onSubmit={handleLogin}>
        <div className="my-6 flex flex-col">
          <label className="mb-2" htmlFor="loginEmail">
            <EnvelopeIcon className="inline-block h-6 w-6" /> Correo
          </label>
          <input
            className="p-1 text-black"
            id="loginEmail"
            name="login"
            type="text"
          />
        </div>
        <div className="my-6 flex flex-col">
          <label className="mb-2" htmlFor="loginPassword">
            <LockClosedIcon className="inline-block h-6 w-6" /> Contraseña
          </label>
          <input
            className="p-1 text-black"
            id="loginPassword"
            name="password"
            type="password"
          />
        </div>
        <div className="my-7 flex flex-col">
          <button className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
            Entrar
          </button>
        </div>
      </form>
    </main>
  );
}
