"use client";
import React from "react";
import style from "./footer.module.scss";
import { usePathname } from "next/navigation";
type Props = {};

function Footer({}: Props) {
  const pathname = usePathname();

  function footerheight() {
    if (pathname === "/") {
      return "home";
    } else {
      return "page";
    }
  }
  return (
    <footer className={`${style.footer} ${style[footerheight()]}`}>
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
