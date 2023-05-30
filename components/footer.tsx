import React from "react";
import style from "./footer.module.scss";
type Props = {};

function Footer({}: Props) {
  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <div className={style.data}>
          <p>
            © 2016 Consorzio stabile Co.tra.f. viale Montegrappa 13, Prato (PO)
            - tutti i diritti riservati
          </p>
          <p>p.iva 05070980486</p>
        </div>
        <div className={style.credit}>Realizzato da Monema srl</div>
      </div>
    </footer>
  );
}

export default Footer;
