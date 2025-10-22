import React from "react";
import Image from "next/image";
import LayoutPages from "../layoutPages";
import style from "./page.module.scss";
import { Raleway } from "next/font/google";
const text = Raleway({ subsets: ["latin"] });
import ListaClienti from "../../../components/listaClienti";
type Tdata = {
  nome: string;
  lista: { nome: string; descrizione: string; immagine: string }[];
};
import dataClienti from "../../../public/data/clienti.json";

export const metadata = {
  title: "Consorzio Cotraf - clienti",
  description:
    "I nostri principali clienti: enti pubblici e realtà private che hanno scelto CO.TRA.F. per la qualità, la puntualità e l'affidabilità dei servizi offerti.",
};

const data: Tdata[] = dataClienti;

function Clienti() {
  return (
    <LayoutPages>
      <h1>Clienti</h1>
      <div className={` ${text.className} ${style.clienti}`}>
        <p className={style.intro}>
          I nostri principali clienti: enti pubblici e realtà private che hanno
          scelto CO.TRA.F. per la qualità, la puntualità e l'affidabilità dei
          servizi offerti. La lista seguente illustra i settori di attività e le
          collaborazioni che testimoniano la nostra esperienza e il nostro
          impegno verso soluzioni su misura.
        </p>
        <ul className={style.settoriLista}>
          {data?.map((item, index) => (
            <li key={index}>
              <div className={style.nomeSettore}>{item.nome}</div>
              <ListaClienti lista={item.lista} />
            </li>
          ))}
        </ul>
      </div>
    </LayoutPages>
  );
}

export default Clienti;
