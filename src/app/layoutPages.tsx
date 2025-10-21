import React from "react";
import Sidebar from "../../components/sidebar";
import style from "./page.module.scss";
type Props = {};

function LayoutPages({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.wrapperPages}>
      <main>{children}</main>
    </div>
  );
}

export default LayoutPages;
