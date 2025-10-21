import React from "react";
import LayoutPages from "../layoutPages";
import style from "./page.module.scss";
import { Raleway } from "next/font/google";
import Form from "../../../components/form";
import MapComponent from "../../../components/mapComponent";

const text = Raleway({ subsets: ["latin"] });
type Props = {};
export const metadata = {
  title: "Consorzio Cotraf - informazioni",
  description: "Consorzio Cotraf - informazioni",
};
function Consorzio({}: Props) {
  return (
    <LayoutPages>
      <h1>Informazioni</h1>

      <div className={style.mapContainer}>
        <MapComponent address="Piazza san Lorenzo 1, Firenze" />
      </div>
      <h2>Contatti</h2>
      <div className={` ${text.className} ${style.contattiContainer}`}>
        <div className={style.contattiForm}>
          <Form />
        </div>
        <div className={style.contattiInfo}>
          <p>
            <strong>Consorzio Cotraf</strong>
            <br />
            Piazza san Lorenzo 1, Firenze
            <br />
            P.IVA: 05070980486
            <br />
            Tel: <a href="tel:+390553987323">+39 055/3987323</a>
            <br />
            Email:{" "}
            <a href="mailto:info@consorziocotraf.it">info@consorziocotraf.it</a>
          </p>
        </div>
      </div>
    </LayoutPages>
  );
}

export default Consorzio;
