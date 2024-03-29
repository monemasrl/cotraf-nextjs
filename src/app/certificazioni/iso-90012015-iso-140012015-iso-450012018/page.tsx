import LayoutPages from "../../layoutPages";
import style from "./page.module.scss";
import { Raleway } from "next/font/google";
import Image from "next/image";
import BackButton from "../../../../components/backButton";
const text = Raleway({ subsets: ["latin"] });
type Props = {};
export const metadata = {
  title:
    "Consorzio Cotraf - certificazioni - iso 9001:2015, iso 14001:2015, iso 45001:2018",
  description: "Consorzio Cotraf - certificazioni",
};
function Iso({}: Props) {
  return (
    <LayoutPages>
      <BackButton />
      <h1>
        ISO 9001:2015, ISO 14001:2015, <br />
        ISO 45001:2018
      </h1>

      <div className={`${style.testoPagine} ${text.className}`}>
        <p>
          Il Consorzio Stabile COTRAF ha implementato un Sistema di Gestione
          Integrato Ambiente, Sicurezza, Responsabilità Sociale, Qualità
          conforme rispettivamente alle norme ISO 14001, ISO 45001, SA 8000, ISO
          9001.
        </p>
        <ul>
          <li>
            <a
              href="/pdf/iso/(Posizione 1) ISO9001.2015,ISO14001.2015,ISO45001.2018 (2).pdf"
              className="link-certificazioni"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/img/pdf-icon.png"
                alt="white list"
                width={24}
                height={24}
              />
              <span>ISO 14001, ISO 45001, SA 8000, ISO 9001</span>
            </a>
          </li>
        </ul>
      </div>
    </LayoutPages>
  );
}

export default Iso;
