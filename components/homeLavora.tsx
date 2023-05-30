import React from "react";
import style from "./lavora.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Raleway } from "next/font/google";
const text = Raleway({ subsets: ["latin"] });
type Props = {};

function HomeLavora({}: Props) {
  return (
    <section className={style.lavoraConNoi}>
      <h2>Lavora con noi</h2>
      <p className={text.className}>
        se sei interessato ai nostri servizi oppure ad una possibilità
        lavorativa, contattaci
      </p>
      <Link className={`${style.btn} ${text.className}`} href="#">
        {" "}
        contattaci
      </Link>

      <Image
        src="/img/immagine_call.jpg"
        fill={true}
        alt="back lavora con noi"
      />
    </section>
  );
}

export default HomeLavora;
