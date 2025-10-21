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
  description: "Consorzio Cotraf - clienti",
};

const data: Tdata[] = dataClienti;

function Clienti() {
  return (
    <LayoutPages>
      <h1>Clienti</h1>
      <div className={`testoPagine ${text.className} ${style.clienti}`}>
        <ul>
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
