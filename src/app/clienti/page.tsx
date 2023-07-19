import React from "react";
import LayoutPages from "../layoutPages";
import style from "./page.module.scss";
import { Raleway } from "next/font/google";
const text = Raleway({ subsets: ["latin"] });
type Props = {};
const data = [
  "Uniflotte gruppo HERA spa",
  "AgegasApsAmga gruppo",
  "HERA spa",
  "Cosea gruppo HERA spa",
  "A2A spa",
  "Iren Ambiente spa",
  "SEI Toscana srl",
  "ALIA spa",
  "UNICO spa",
  "ESTAR",
  "ANT",
];
function Consorzio({}: Props) {
  return (
    <LayoutPages>
      <h1>Clienti</h1>
      <div className={`${style.testoPagine} ${text.className}`}>
        <h3>Principali Clienti</h3>
        <ul>
          {data.map((item, index) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </LayoutPages>
  );
}

export default Consorzio;
