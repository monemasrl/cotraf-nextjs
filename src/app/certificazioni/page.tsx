import React from "react";
import LayoutPages from "../layoutPages";
import style from "./page.module.scss";
import { Raleway } from "next/font/google";
import Link from "next/link";
const text = Raleway({ subsets: ["latin"] });
type Props = {};

function Certificazioni({}: Props) {
  return (
    <LayoutPages>
      <h1>Certificazioni</h1>
      <div className={`${style.testoPagine} ${text.className}`}>
        <ul>
          <li>
            <Link
              href={"certificazioni/iso-90012015-iso-140012015-iso-450012018"}
            >
              ISO 14001, ISO 45001, ISO 9001
            </Link>
          </li>
          <li>
            <Link href={"certificazioni/white-list"}>White list</Link>
          </li>
          <li>
            <Link href={"certificazioni/responsabilita-sociale"}>
              Responsabilità sociale
            </Link>
          </li>
          <li>
            <Link href={"certificazioni/rating-di-legalita"}>
              Rating di legalità
            </Link>
          </li>
        </ul>
      </div>
    </LayoutPages>
  );
}

export default Certificazioni;
