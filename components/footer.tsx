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
            © 2023 Consorzio stabile Co.tra.f. Piazza san Lorenzo 1, Firenze. -
            tutti i diritti riservati
          </p>
          <p>p.iva 05070980486</p>
        </div>
        <div className={style.credit}>
          Realizzato da{" "}
          <a rel="noopener noreferrer" target="_blank" href="https://monema.it">
            Monema srl
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
