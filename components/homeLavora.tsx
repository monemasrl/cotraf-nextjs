"use client";
import React from "react";
import style from "./lavora.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Raleway } from "next/font/google";
import Form from "./form";
const text = Raleway({ subsets: ["latin"] });
import divider from "/public/img/divider.svg";
import { motion } from "motion/react";
function HomeLavora() {
  return (
    <section className={style.lavoraConNoi}>
      <motion.div
        className={style.wrapperContent}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <Form />
        <div className={style.textContent}>
          <Image src={divider} alt="divider" />
          <h2>Lavora con noi</h2>
          <p className={text.className}>
            Se sei interessato ai nostri servizi oppure ad una possibilità
            lavorativa, <Link href="/contatti">contattaci</Link>
          </p>
        </div>
      </motion.div>

      <Image src="/img/lavora.jpg" fill={true} alt="back lavora con noi" />
    </section>
  );
}

export default HomeLavora;
