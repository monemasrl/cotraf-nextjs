"use client";
import React from "react";
import Image from "next/image";
import style from "./serviziImmagini.module.scss";
import { motion } from "motion/react";
function ServiziImmagini({
  servizi,
}: {
  servizi: { name: string; img: string }[];
}) {
  return (
    <div className={style.immagini}>
      {servizi?.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 * index }}
        >
          <Image
            src={item.img}
            alt={item.name}
            title={item.name}
            width={100}
            height={100}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default ServiziImmagini;
