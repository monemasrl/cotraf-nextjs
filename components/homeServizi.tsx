import React from "react";
import style from "./servizi.module.scss";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const title = Montserrat({ subsets: ["latin"] });
type Props = {};

function HomeServizi({}: Props) {
  const data = [
    {
      name: "TRASLOCHI / SMALTIMENTI",
      img: "/img/baggage.png",
      text: "L’esperienza nel settore dei trasporti e della logistica, ha permesso lo sviluppo di servizi di facchinaggio, traslochi per abitazioni e / o uffici, smaltimento di materiale di ogni tipologia. Sia materiale residuo dei traslochi, sia svuotamenti di locali, carta, legno, ferro e molto altro.",
    },
    {
      name: "SERVIZI AMBIENTALI",
      img: "/img/icona-ambiente.png",
      text: "L’esperienza nel settore dei trasporti e della logistica, ha permesso lo sviluppo di servizi di facchinaggio, traslochi per abitazioni e / o uffici, smaltimento di materiale di ogni tipologia. Sia materiale residuo dei traslochi, sia svuotamenti di locali, carta, legno, ferro e molto altro.",
    },
    {
      name: "TRASPORTO",
      img: "/img/icona-trasporto.png",
      text: "CO.TRA.F. lavora con un contratto di esclusiva per Unico spa, la farmacia dei farmacisti. Gli anni di collaborazione hanno permesso lo sviluppo di un importante know how sulla logistica e trasporto di prodotti importanti come i farmaci. CO.TRA.F. organizza inoltre servizi di trasporto di ogni tipo di merce, disponendo della conoscenza e dell’attrezzatura necessaria a categorie di beni quali pasti, e qualsiasi merce a temperatura controllata oltre che beni imballati di medio – piccole dimensioni.",
    },
    {
      name: "CONSULENZA",
      img: "/img/icona-consulenza.png",
      text: "nelle fasi di: partecipazione a gare d’appalto, monitoraggio di bandi e contributi che possono costituire opportunità per le imprese, gestione e rendicontazione degli stessi, implementazione di sistemi di certificazione Uni En Iso ed attestazione SOA.",
    },
  ];

  return (
    <section className={style.servizi}>
      <h2 className={title.className}>i nostri servizi</h2>
      <div className={style.wrapperServizi}>
        {data.map((item) => (
          <div key={item.name} className={style.servizio}>
            <div className={style.left}>
              <div className={style.imageBox}>
                <Image
                  className={style[item.name]}
                  width={40}
                  height={40}
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
        ))}
      </div>
    </section>
  );
}

export default HomeServizi;
