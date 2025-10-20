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
        initial={{ filter: "blur(10px)", y: 20 }}
        whileInView={{ filter: "blur(0px)", y: 0 }}
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
    <div className={style.numeriwrapper}>
      <div className={style.homeNumeri}>
        {numeri.map((item, index) => (
          <NumeroAnimato numero={item} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default HomeNumeri;
