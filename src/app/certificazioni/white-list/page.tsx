import React from "react";
import LayoutPages from "../../layoutPages";
import style from "./page.module.scss";
import { Raleway } from "next/font/google";
import Image from "next/image";
const text = Raleway({ subsets: ["latin"] });
type Props = {};

function Whitelist({}: Props) {
  return (
    <LayoutPages>
      <h1>Whitelist</h1>
      <div className={`${style.testoPagine} ${text.className}`}>
        <ul>
          <li>
            <a
              className="link-certificazioni"
              href={"/pdf/whitelist/white list.pdf"}
            >
              <Image
                src="/img/pdf-icon.png"
                alt="white list"
                width={24}
                height={24}
              />
              <span>White list</span>
            </a>
          </li>
        </ul>
      </div>
    </LayoutPages>
  );
}

export default Whitelist;
