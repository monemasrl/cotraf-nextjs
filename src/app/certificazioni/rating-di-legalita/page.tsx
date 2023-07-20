import React from "react";
import LayoutPages from "../../layoutPages";
import style from "./page.module.scss";
import { Raleway } from "next/font/google";
import BackButton from "../../../../components/backButton";
const text = Raleway({ subsets: ["latin"] });
type Props = {};
export const metadata = {
  title: "Consorzio Cotraf - certificazioni - rating di legalità",
  description: "Consorzio Cotraf - certificazioni",
};
function Legalita({}: Props) {
  return (
    <LayoutPages>
      <BackButton />
      <h1>Rating di legalità</h1>

      <div className={`${style.testoPagine} ${text.className}`}>
        <ul>
          <li>
            <a
              href={"/pdf/rating-legalita/Segnatura.pdf"}
              className="link-certificazioni"
              target="_blank"
              rel="noopener noreferrer"
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
