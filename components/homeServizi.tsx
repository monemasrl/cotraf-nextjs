"use client";
import React from "react";
import style from "./servizi.module.scss";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import divider from "/public/img/divider.svg";
import { motion } from "motion/react";
type servizi = {
  name: string;
  img: string;
  text: string | string[];
};
const title = Montserrat({ subsets: ["latin"] });

function HomeServizi() {
  const serviziSoft: servizi[] = [
    {
      name: "TRASLOCHI ",
      img: "/img/icons/logistica.png",
      text: "Servizi di Logistica (trasporto, trasloco, facchinaggio, gestione magazzini)",
    },
    {
      name: "SERVIZI AMBIENTALI",
      img: "/img/icons/ambiente.png",
      text: "Servizi ambientali e gestione rifiuti, gestione aree a verde, verde urbano e non",
    },
    {
      name: "TRASPORTO",
      img: "/img/icons/trasporti.png",
      text: "Servizi di trasporto a temperatura controllata",
    },
    {
      name: "AMMINISTRAZIONE E GESTIONE",
      img: "/img/icons/amministrazione.png",
      text: "Ristorazione collettiva: gestione mense aziendali e scolastiche, servizi di portierato, front office, back office, servizi amministrativi",
    },
    {
      name: "IMPIANTI DI SMALTIMENTO",
      img: "/img/icons/smaltimento.png",
      text: "Servizi di gestione Impianti di selezione e smaltimento dei rifiuti",
    },
    {
      name: "RIFIUTI",
      img: "/img/icons/rifiuti.png",
      text: "Servizi di Igiene (pulizia, sanificazione, disinfezione, disinfestazione,derattizzazione, bonifiche ambientali in genere), servizi di gestione e manutenzione parchi contenitori per raccolta di RSU, servizi di gestione rifiuti",
    },
    {
      name: "EDILIZIA E IMPIANTISTICA",
      img: "/img/icons/edilizia.png",
      text: [
        "Lavori Edili",
        "Lavori di Impiantistica Elettrica speciali",
        "Lavori di Impiantistica Idraulica",
        "Lavori di Impiantistica Meccanica",
        "Lavori Stradali",
        "Restauro/Manutenzioni immobili sottoposti a tutela",
      ],
    },
  ];

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
