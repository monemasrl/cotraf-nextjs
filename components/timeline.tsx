"use client";
import React from "react";
import { motion } from "motion/react";
import style from "./timeline.module.scss";
type TimelineItem = {
  anno: string;
  evento: string;
};
console.log(style);

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className={style.timeline}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={style.timelineItem}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className={style.timelineDate}>{item.anno}</div>
          <div className={style.timelineContent}>{item.evento}</div>
        </motion.div>
      ))}
    </div>
  );
}

export default Timeline;
