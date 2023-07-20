import React from "react";
import LayoutPages from "../layoutPages";
import style from "./page.module.scss";
import { Raleway } from "next/font/google";
import Form from "../../../components/form";

const text = Raleway({ subsets: ["latin"] });
type Props = {};

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
