"use client";
import React from "react";
import style from "./loghiHome.module.scss";
import { motion } from "motion/react";
import Image from "next/image";
type Loghi = {
  nome: string;
  lista: { nome: string; descrizione: string; immagine: string }[];
};
function LoghiHome({ loghi }: { loghi: Loghi[] }) {
  return (
    <div className={style.loghiHome}>
      <h2>I nostri clienti</h2>
      <div className={style.loghiContainer}>
        {loghi.map((categoria, index) => (
          <motion.div
            key={index}
            className={style.categoria}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <h3>{categoria.nome}</h3>
            <div className={style.loghiList}>
              {categoria.lista.map((cliente, idx) => (
                <div key={idx} className={style.cliente}>
                  <Image
                    src={cliente.immagine}
                    alt={cliente.nome}
                    title={cliente.nome}
                    width={150}
                    height={75}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default LoghiHome;
