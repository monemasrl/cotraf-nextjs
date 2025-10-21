import React from "react";
import LayoutPages from "../layoutPages";
import style from "./page.module.scss";
import { Raleway } from "next/font/google";
import Image from "next/image";
const text = Raleway({ subsets: ["latin"] });
import servizi from "../../../public/data/servizi.json";
import ServiziImmagini from "../../../components/serviziImmagini";
type Props = {};
export const metadata = {
  title: "Consorzio Cotraf - consorzio",
  description: "Consorzio Cotraf - consorzio",
};
const data = {
  servizi1: {
    titolo: "Servizi soft",
    testo:
      "Il Consorzio, attraverso requisiti propri e mutuati dalle proprie Consorziate, può eseguire tali servizi forte di un portfolio ricco di esperienze presso Pubbliche Amministrazioni centrali e periferiche, Istituti di Credito, insegne della GDO, plessi scolatici ed ospedalieri, caserme, piattaforme logistiche ed	Aziende Multiutility.",
    lista: [
      "Servizi di Igiene (pulizia, sanificazione, disinfezione, disinfestazione, derattizzazione, bonifiche ambientali in genere)",
      "Servizi di Logistica (trasporto, trasloco, facchinaggio, gestione magazzini)",
      "Servizi di trasporto a temperatura controllata",
      "Servizi di portierato, front office, back office, servizi amministrativi",
      "Servizi ambientali e gestione rifiuti",
      "Servizi di gestione e manutenzione parchi contenitori per raccolta di RSU",
      "Servizi di gestione Impianti di selezione e smaltimento dei rifiuti",
      "Gestione aree a verde, verde urbano e non",
      "Ristorazione collettiva: gestione mense aziendali e scolastiche",
      "Servizi di gestione rifiuti",
    ],
  },
  servizi2: {
    titolo: "Lavori in edilizia ed impiantistica",
    testo:
      "La capacità di eseguire interventi di qualità certificata è confermata dall’ottenimento dell’ Attestazione SOA.",
    lista: [
      "Lavori Edili",
      "Lavori di Impiantistica Elettrica e speciali",
      "Lavori di Impiantistica Idraulica",
      "Lavori di Impiantistica Meccanica",
      "Lavori Stradali",
      "Restauro/Manutenzioni immobili sottoposti a tutela",
    ],
  },
};

function Servizi({}: Props) {
  return (
    <LayoutPages>
      <h1>Servizi</h1>
      <div className={style.serviziContainer}>
        <ServiziImmagini servizi={servizi} />
        <div className={`${style.servizi} ${text.className}`}>
          <h2>{data.servizi1.titolo}</h2>
          <p>{data.servizi1.testo}</p>
          <ul>
            {data.servizi1.lista.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h2>{data.servizi2.titolo}</h2>
          <p>{data.servizi2.testo}</p>
          <ul>
            {data.servizi2.lista.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </LayoutPages>
  );
}

export default Servizi;
