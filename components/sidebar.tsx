import React from "react";
import Image from "next/image";
import style from "./sidebar.module.scss";
import { Raleway } from "next/font/google";
const text = Raleway({ subsets: ["latin"] });
type Props = {};

function Sidebar({}: Props) {
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
    <aside className={style.sidebar}>
      <h2>I nostri servizi</h2>
      <ul>
        {data.map((item) => (
          <li key={item.name}>
            <Image
              className={style[item.name]}
              src={item.img}
              width="40"
              height="40"
              alt="servizi icona"
            />

            <h3>{item.name}</h3>
            <p className={text.className}>{item.text}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
