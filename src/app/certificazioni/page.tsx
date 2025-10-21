import React from "react";
import LayoutPages from "../layoutPages";
import style from "./page.module.scss";
import { Raleway } from "next/font/google";
import Link from "next/link";
const text = Raleway({ subsets: ["latin"] });
type Props = {};
export const metadata = {
  title: "Consorzio Cotraf - certificazioni",
  description: "Consorzio Cotraf - certificazioni",
};
function Certificazioni({}: Props) {
  return (
    <LayoutPages>
      <h1>Certificazioni</h1>
      <div className={` ${text.className}`}>
        <ul className={style.certificazioni}>
          <li>
            <div className={style.certificazioneTitle}>
              Attestazione SOA per la qualificazione alle esecuzioni di lavori
              pubblici
            </div>
            <p>
              Il Consorzio Cotraf è in possesso dell’Attestazione SOA, che
              necertifica la capacità tecnica ed economica ad eseguire lavori
              pubblici, in conformità a quanto previsto dal D.P.R. 207/2010.
            </p>
            <ul>
              <li>
                <Link href="#">Link alla certificazione</Link>
              </li>
            </ul>
          </li>

          <li>
            <div className={style.certificazioneTitle}>
              Responsabilità sociale SA8000
            </div>
            <p>
              Il Consorzio Cotraf è in possesso della certificazione SA8000, che
              attesta il rispetto dei requisiti di responsabilità sociale
              previsti dalla norma.
            </p>
            <ul>
              <li>
                <Link href="#">Link alla certificazione</Link>
              </li>
            </ul>
          </li>
          <li>
            <div className={style.certificazioneTitle}>UNI/pdr125:2020</div>
            <p>
              Il Consorzio Cotraf è in possesso della certificazione
              UNI/pdr125:2020, che attesta la conformità ai requisiti previsti
              dalla norma.
            </p>
            <ul>
              <li>
                <Link href="#">Link alla certificazione</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </LayoutPages>
  );
}

export default Certificazioni;
