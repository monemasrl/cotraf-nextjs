"use client";
import React, { useRef, useState } from "react";
import style from "./homenumeri.module.scss";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

type Tnumeri = {
  from: number;
  numero: number;
  descrizione: string;
};
function NumeroAnimato({ numero, index }: { numero: Tnumeri; index: number }) {
  "use client";

  const count = useMotionValue(numero.from);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  const formatted = useTransform(() => {
    const num = Math.round(count.get());
    return num.toLocaleString("it-IT");
  });

  const handleViewportEnter = () => {
    if (!hasAnimated) {
      animate(count, numero.numero, { duration: 3 });
      setHasAnimated(true);
    }
  };

  return (
    <div className={style.numeroContainer}>
      <div className={style.descrizione}>{numero.descrizione}</div>
      <motion.div
        initial={{ filter: "blur(5px)" }}
        whileInView={{ filter: "blur(0px)" }}
        onViewportEnter={handleViewportEnter}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.2 }}
        className={style.numero}
      >
        {formatted}
      </motion.div>
    </div>
  );
}

function HomeNumeri({ numeri }: { numeri: Tnumeri[] }) {
  return (
    <div className={style.numeriContainer}>
      <div className={style.numeriwrapper}>
        <h2>I numeri di co.tra.f.</h2>
        <p className="claim">
          Sono i numeri che fanno del consorzio Stabile{" "}
          <strong>CO.TRA.F.</strong> una realtà capace di affrontare la sfida di
          servizi erogati direttamente e completamente dalle consorziate
          indicate come affidatarie, con strumenti, metodi e personale propri di
          quest’ultime. I vantaggi per il committente e cliente sono
          l’individuazione chiara del fornitore del servizio, un’assistenza
          precisa e puntuale per qualsiasi necessità, l’individuazione di costi
          certi e una qualità migliore garantita da esperienza e competenza.
        </p>

        <div className={style.homeNumeri}>
          {numeri.map((item, index) => (
            <NumeroAnimato numero={item} key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeNumeri;
