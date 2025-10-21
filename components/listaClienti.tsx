"use client";
import React from "react";
import { motion } from "motion/react";
import style from "./listaClienti.module.scss";
import Image from "next/image";
type Tlista = { nome: string; descrizione?: string; immagine: string }[];
function ListaClienti({ lista, margin }: { lista: Tlista; margin?: string }) {
  return (
    <motion.ul
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={style.listaClienti}
      style={margin ? { margin: margin } : {}}
    >
      {lista.map((cliente, idx) =>
        cliente.nome ? (
          <li key={idx}>
            {cliente.immagine ? (
              <Image
                src={cliente.immagine}
                alt={cliente.nome}
                title={cliente.nome}
                width={200}
                height={100}
              />
            ) : null}
            <div className={style.nomeCliente}>{cliente.nome}</div>
            <p>{cliente.descrizione ? cliente.descrizione : ""}</p>
          </li>
        ) : null
      )}
    </motion.ul>
  );
}

export default ListaClienti;
