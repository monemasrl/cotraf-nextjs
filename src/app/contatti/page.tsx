import React from "react";
import LayoutPages from "../layoutPages";
import style from "./page.module.scss";
import { Raleway } from "next/font/google";
import Form from "../../../components/form";

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
      <div className={`${style.testoPagine} ${text.className}`}>
        <Form />
      </div>
    </LayoutPages>
  );
}

export default Consorzio;
