import React from "react";
import LayoutPages from "../../layoutPages";
import style from "./page.module.scss";
import { Raleway } from "next/font/google";

const text = Raleway({ subsets: ["latin"] });
type Props = {};

function Legalita({}: Props) {
  return (
    <LayoutPages>
      <h1>Rating di legalità</h1>
      <div className={`${style.testoPagine} ${text.className}`}>
        <ul>
          <li>
            <a
              href={"/pdf/rating-legalita/Segnatura.pdf"}
              className="link-certificazioni"
            >
              Rating di legalità
            </a>
          </li>
        </ul>
      </div>
    </LayoutPages>
  );
}

export default Legalita;
