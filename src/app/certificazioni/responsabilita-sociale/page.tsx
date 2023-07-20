import React from "react";
import LayoutPages from "../../layoutPages";
import style from "./page.module.scss";
import { Raleway } from "next/font/google";
import Image from "next/image";
const text = Raleway({ subsets: ["latin"] });
type Props = {};
export const metadata = {
  title: "Consorzio Cotraf - certificazioni - responsabilità sociale",
  description: "Consorzio Cotraf - certificazioni",
};
function Sociale({}: Props) {
  return (
    <LayoutPages>
      <h1>Responsabilità sociale</h1>
      <div className={`${style.testoPagine} ${text.className}`}>
        <h3>Politica per la Responsabilità Sociale </h3>
        <p>
          L&rsquo;Azienda ha definito una politica per la qualità,
          l&rsquo;ambiente e la sicurezza contenuta nel documento{" "}
          <a
            href={"/pdf/responsabilita-sociale/Politica SA8000 (1) (1).pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            POLITICA SA 8000
          </a>
        </p>
        <h3>Politica per la qualità, ambiente e sicurezza</h3>
        <p>
          L&rsquo;Azienda ha definito una politica per la qualità,
          l&rsquo;ambiente e la sicurezza contenuta nel documento{" "}
          <a
            href={
              "/pdf/responsabilita-sociale/Politica integrata qualita, ambiente e sicurezza (1).pdf"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            POLITICA INTEGRATA QUALITA’ AMBIENTE E SICUREZZA
          </a>
        </p>
        <h3>Premessa: Codici di condotta</h3>
        <p>
          Etica e Certificazione SA 8000 La diffusione di codici di condotta
          Etica, sia pure di struttura e contenuto assai diversi tra loro, si è
          andata ad accrescere nel corso degli anni. In particolare, negli USA
          la redazione dei Codici Etici ha avuto una diffusione straordinaria,
          tanto che circa l’85% delle principali imprese del Paese ha adottato
          tale strumento. Lo standard certificativo SA 8000 (emesso nel 1997 ed
          aggiornato prima nel 2001 poi nel 2008), superando l’eterogeneità dei
          codici di condotta etica, ha rappresentato il primo schema di
          riferimento riconosciuto in ambito internazionale ed avente valore
          certificativo dei valori di eticità sostenuti da un’organizzazione.
          Nel 2014 la Norma ha preso in considerazione altre tematiche sempre
          più inclusive e attente alle necessità dell’epoca in cui viviamo.
          Alleghiamo qui di seguito la norma SA 8000 <br />{" "}
          <a
            href={"/pdf/responsabilita-sociale/norma SA8000 (1).pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            NORMA SA 8000
          </a>
        </p>{" "}
        <h3>
          Cenni informativi sul percorso certificativo intrapreso dall’azienda
        </h3>
        <p>
          La decisione di applicare lo standard internazionale SA 8000 e
          l’intenzione di ottenere la sua certificazione (cioè l’attestazione di
          conformità alla norma) da un organismo indipendente, nasce dall’idea
          del consorzio di trasferire anche alle consorziate il clima sereno
          improntato sulla valorizzazione di tutto il personale operante Lo
          standard SA8000 sintetizza e rappresenta i principi considerati
          fondamentali dal consorzio e che sono contenuti nella Politica
          consorziale. COTRAF fa riferimento alla propria Politica della
          Responsabilità Sociale per le decisioni ed i comportamenti ai quali
          tutto il consorzio deve attenersi. Lo standard SA8000 rappresenta così
          un programma di responsabilità sociale, composto da numerose
          iniziative, collegate a sistema, con cui l&rsquo;azienda intende
          liberamente assumere le proprie responsabilità nei confronti dei
          diversi interlocutori; sintetizza i valori su cui si fonda la propria
          cultura; le responsabilità verso ciascuna categoria delle parti
          interessate; le direttive in materia di etica associativa e
          dell’imprenditorialità socialmente orientata. COTRAF si impegna a
          trasferire alle consorziate la costante attenzione al rispetto dei
          diritti umani. Per diritti umani si intendono in primo luogo quelli
          tutelati dalle normative ILO e quelli presenti nella Dichiarazione
          Internazionale dei Diritti Umani, quali la non discriminazione, la
          libertà d&rsquo;associazione, il diritto alla nutrizione e
          all&rsquo;educazione, il controllo diretto e la sensibilizzazione dei
          fornitori sui valori etici. In questa cornice COTRAF considera il
          personale come un suo capitale fondamentale; a tal fine dimostra
          consapevolezza dei problemi loro collegati e profonde impegno e
          volontà per risolverli, non solo nell&rsquo;interesse dello staff, ma
          anche dell&rsquo;Azienda stessa. Alcuni obiettivi facilitati
          dall’applicazione dello standard SA 8000: instaurare un clima di mutuo
          affiatamento dal punto di vista organizzativo; mantenere relazioni
          ottimali all’interno del consorzio creando un apposito Gruppo di
          coordinamento Etico consortile; applicare a tutti i livelli del
          personale criterio di pari opportunità (assunzione, formazione,
          sviluppo, promozione, ecc.); evitare forme di discriminazione e di
          emarginazione e favorire pari opportunità a tutto il personale.
          Valutare frequentemente la valutazione del rischio relativa ad ogni
          forma di discriminazione Oltre questo SA 8000 è un mezzo efficace a
          disposizione delle organizzazioni per prevenire comportamenti
          irresponsabili o illeciti da parte di chi opera in nome e per conto
          proprio, perché introduce una definizione chiara ed esplicita delle
          responsabilità etiche e sociali verso i diversi gruppi di stakeholder
          dei propri dirigenti, del personale e spesso anche dei fornitori. Esso
          è il principale strumento di implementazione dell’etica
          all&rsquo;interno dell&rsquo;Azienda, un mezzo che garantisce la
          gestione equa ed efficace delle transazioni e delle relazioni umane,
          che sostiene la reputazione del Consorzio, in modo da alimentare la
          fiducia verso l’esterno. SA 8000 prescrive la conformità ai seguenti
          requisiti:
        </p>
        <ul>
          <li>lavoro infantile</li>
          <li>lavoro forzato e obbligatorio</li>
          <li>salute e sicurezza sul</li>
          <li>
            lavoro libertà di associazione e diritto alla contrattazione
            collettiva
          </li>
          <li>discriminazione</li>
          <li>procedure disciplinari</li>
          <li>orario di lavoro</li>
          <li>criteri retributivi</li>
          <li>Sistemi di Gestione</li>
        </ul>
        <h3>Bilancio Sociale</h3>
        <p>
          Il Bilancio Sociale SA 8000 risponde all&rsquo;obiettivo di comunicare
          in modo trasparente, chiaro e completo a tutte le parti interessate
          sulle prestazioni del Consorzio relativamente agli aspetti della
          Responsabilità Sociale, e di fornire un resoconto puntuale sulla
          propria capacità di soddisfare i requisiti della norma SA8000:2014.
        </p>{" "}
        <h3>Lavoro infantile</h3>{" "}
        <p>
          Il Consorzio rifiuta di usufruire del lavoro infantile e a tal
          proposito ha creato una specifica procedura che prende spunto dalla
          Politica SA 8000 relativamente all’educazione dei bambini e dei
          giovani lavoratori:{" "}
          <a
            href={
              "/pdf/responsabilita-sociale/PRS 01 - Procedura  lavoro infantile (1) (1).pdf"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            PRS.01 (lavoro infantile)
          </a>
        </p>{" "}
        <h3>Segnalazioni anonime e rilievi</h3>
        <p>
          Per garantire a tutti i lavoratori ed a tutte le parti interessate una
          facile comunicazione di segnalazioni e suggerimenti in merito agli
          aspetti etici e di responsabilità sociale, il Consorzio ha previsto la
          possibilità di inviare comunicazioni anche in maniera anonima:{" "}
          <a
            href={
              "/pdf/responsabilita-sociale/PRS 02 - Procedura  Reclami e segnalazioni (1).pdf"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            PRS.2 (Reclami e Segnalazioni SA8000)
          </a>
        </p>
        <ul className={style.socialeUl}>
          <li>
            <a
              href={"/pdf/responsabilita-sociale/Politica SA8000 (1) (1).pdf"}
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
              <span>POLITICA SA 8000</span>
            </a>
          </li>
          <li>
            <a
              href={
                "/pdf/responsabilita-sociale/Politica integrata qualita, ambiente e sicurezza (1).pdf"
              }
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
              <span>POLITICA INTEGRATA QUALITA’ AMBIENTE E SICUREZZA</span>
            </a>
          </li>
          <li>
            <a
              href={"/pdf/responsabilita-sociale/norma SA8000 (1).pdf"}
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
              <span>POLNORMA SA 8000</span>
            </a>
          </li>
          <li>
            <a
              href={
                "/pdf/responsabilita-sociale/PRS 01 - Procedura  lavoro infantile (1) (1).pdf"
              }
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
              <span>PRS.01 (lavoro infantile)</span>
            </a>
          </li>
          <li>
            <a
              href={
                "/pdf/responsabilita-sociale/PRS 02 - Procedura  Reclami e segnalazioni (1).pdf"
              }
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
              <span>PRS.2 (Reclami e Segnalazioni SA8000)</span>
            </a>
          </li>
        </ul>
      </div>
    </LayoutPages>
  );
}

export default Sociale;
