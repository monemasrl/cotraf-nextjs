"use client";
import React from "react";
import style from "./servizi.module.scss";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import divider from "/public/img/divider.svg";
import { motion } from "motion/react";
import servizi from "../public/data/servizi.json";
type servizi = {
  name: string;
  img: string;
  text: string | string[];
};
const title = Montserrat({ subsets: ["latin"] });

function HomeServizi() {
  const serviziSoft: servizi[] = servizi;

  return (
    <section className={style.servizi}>
      <Image src={divider} alt="divider" />
      <h2 className={title.className}>i nostri servizi</h2>
      <p className={`claim`}>
        Il Consorzio, attraverso requisiti propri e mutuati dalle proprie
        Consorziate, può eseguire tali servizi forte di un portfolio ricco di
        esperienze presso Pubbliche Amministrazioni centrali e periferiche,
        Istituti di Credito, insegne della GDO, plessi scolatici ed ospedalieri,
        caserme, piattaforme logistiche ed Aziende Multiutility.
      </p>
      <motion.div
        className={style.wrapperServizi}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        {serviziSoft.map((item) => {
          if (item.name !== "EDILIZIA E IMPIANTISTICA") {
            return (
              <div key={item.name} className={style.servizio}>
                <div className={style.left}>
                  <div className={style.imageBox}>
                    <Image
                      className={style[item.name]}
                      width={140}
                      height={140}
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                </div>
                <div className={style.right}>
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          } else {
            return (
              <div key={item.name} className={style.servizio}>
                <div className={style.left}>
                  <div className={style.imageBox}>
                    <Image
                      className={style[item.name]}
                      width={140}
                      height={140}
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                </div>
                <div className={style.right}>
                  <h3>{item.name}</h3>
                  <ul>
                    {Array.isArray(item.text) &&
                      item.text.map((textItem: string) => (
                        <li key={textItem}>{textItem}</li>
                      ))}
                  </ul>
                </div>
              </div>
            );
          }
        })}
      </motion.div>
    </section>
  );
}

export default HomeServizi;
