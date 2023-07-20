import React from "react";
import LayoutPages from "../layoutPages";
import style from "./page.module.scss";
import { Raleway } from "next/font/google";
const text = Raleway({ subsets: ["latin"] });
type Props = {};
export const metadata = {
  title: "Consorzio Cotraf - bandi",
  description: "Consorzio Cotraf - bandi",
};
function Bandi({}: Props) {
  return (
    <LayoutPages>
      <h1>Bandi</h1>
      <div className={`${style.testoPagine} ${text.className}`}>
        <p>
          il Consorzio Stabile Co.Tra.F. si occupa di cercare e monitorare tutte
          le opportunità in termini di finanziamenti, contributi ed agevolazioni
          da qualunque ente promosse, ce possano essere di aiuto allo sviluppo
          delle imprese consorziate. Nel caso di interesse da parte di queste,
          il consorzio offre la propria struttura e la propria competenza alla
          gestione di dette opportunità. Sei interessato a:
        </p>
        <ul>
          <li>Finanziamenti per investimenti</li>
          <li>contributi per certificazioni</li>
          <li>progetti culturali e/o sociali</li>
        </ul>
      </div>
    </LayoutPages>
  );
}

export default Bandi;
