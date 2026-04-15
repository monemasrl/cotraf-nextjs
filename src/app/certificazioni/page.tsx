import React from "react";
import LayoutPages from "../layoutPages";
import style from "./page.module.scss";
import { Raleway } from "next/font/google";

const text = Raleway({ subsets: ["latin"] });
type Props = {};
export const metadata = {
  title: "Consorzio Cotraf - certificazioni",
  description:
    "Per rispondere all’alto livello di richieste delle committenze pubbliche e private, specialmente nell’ultimo decennio, il Consorzio si è dotato di un corredo di certificazioni ampio e completo.",
};
const pdfIcon = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 384 512"
    height="200px"
    width="200px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Pdf Icon</title>
    <desc>Icona pdf per il link al documento</desc>
    <path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"></path>
  </svg>
);
function Certificazioni({}: Props) {
  return (
    <LayoutPages>
      <h1>Certificazioni</h1>
      <div className={`${style.main} ${text.className}`}>
        <p className={style.intro}>
          CO.TRA.F. ha da sempre un’organizzazione comune d’impresa che coordina
          le attività delle consorziate promuovendone sviluppo e
          razionalizzazione. I servizi, lavori e forniture vengono affidati ed
          eseguiti dalle consorziate stesse senza ricorrere strategicamente al
          subappalto o altri uffici di avvalimento se non ove strettamente
          necessario al buon esito della procedura. Per rispondere all’alto
          livello di richieste delle committenze pubbliche e private,
          specialmente nell’ultimo decennio, il Consorzio si è dotato di un
          corredo di certificazioni ampio e completo. Dal 25/07/2020 Certificati
          ISO 9001, ISO 14000, ISO 45000, dal 09/01/2023 SA 8000 s.a.s.,
          UNI/PdR125:2020. Inoltre dal 02/08/2023 ha ottenuto l’Attestazione SOA
          nelle categorie OG1 OG2 OG3 OG8 OG9 OS28.
        </p>
        <ul className={style.certificazioni}>
          <li>
            <div className={style.certificazioneTitle}>
              Attestazione SOA per la qualificazione alle esecuzioni di lavori
              pubblici
            </div>
            <p>
              Il Consorzio Cotraf è in possesso dell’Attestazione SOA, che
              necertifica la capacità tecnica ed economica ad eseguire lavori
              pubblici, in conformità a quanto previsto dal D.P.R. 207/2010.
            </p>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/pdf/certificazioni2025/Attestazione_SOA_COTRAF_260119.pdf"
                >
                  <span>{pdfIcon}</span> Link alla certificazione
                </a>
              </li>
            </ul>
          </li>

          <li>
            <div className={style.certificazioneTitle}>
              Responsabilità sociale SA8000
            </div>
            <p>
              Il Consorzio Cotraf è in possesso della certificazione SA8000, che
              attesta il rispetto dei requisiti di responsabilità sociale
              previsti dalla norma.
            </p>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/pdf/certificazioni2025/SA8000-220602-CONSORZIO-COTRAF_26.06.2024_R01.pdf"
                >
                  <span>{pdfIcon}</span> Link alla certificazione
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className={style.certificazioneTitle}>UNI/pdr125:2020</div>
            <p>
              Il Consorzio Cotraf è in possesso della certificazione
              UNI/pdr125:2020, che attesta la conformità ai requisiti previsti
              dalla norma.
            </p>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/pdf/certificazioni2025/24PGAC005-00_uni_pdr.pdf"
                >
                  <span>{pdfIcon}</span> Link alla certificazione
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className={style.certificazioneTitle}>
              ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018.
            </div>
            <p>
              Il Consorzio Cotraf è in possesso della certificazione ISO
              9001:2015, ISO 14001:2015 and ISO 45001:2018, che attesta la
              conformità ai requisiti previsti dalle norme.
            </p>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/pdf/certificazioni2025/COTRAF_001041-1-IT-1-QES-I6.pdf"
                >
                  <span>{pdfIcon}</span> Link alla certificazione
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </LayoutPages>
  );
}

export default Certificazioni;
