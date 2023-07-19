import React from "react";
import LayoutPages from "../layoutPages";
import style from "./page.module.scss";
import { Raleway } from "next/font/google";
const text = Raleway({ subsets: ["latin"] });
type Props = {};

function Consorzio({}: Props) {
  return (
    <LayoutPages>
      <h1>Sanificazione</h1>
      <div className={`${style.testoPagine} ${text.className}`}>
        <p>
          Il nostro Paese e il mondo intero stanno attraversando un periodo di
          grave emergenza sanitaria ed è anche per questo che il consorzio
          Cotraf ha il piacere di comunicare che tra le sue associate ha fatto
          ingresso una realtà che si occupa di sanificazione di ambienti civili,
          industriali e veicoli ad uso civile o commerciale (ai sensi della
          81/08 e ss.mm.ii. comprese le recenti disposizioni in termini di
          emergenza COVID), tramite l’utilizzo di un prodotto innovativo ed
          unico sul mercato. E’ ORA DI CAMBIARE ARIA!!! REair, azienda italiana
          costituita da un team di professionisti attenti al benessere umano e
          ambientale, ha scelto di investire nella tecnologia al fine di dare
          una soluzione immediata e concreta per abbattere l’inquinamento indoor
          e outdoor, causa di danno ambientale e di gravi conseguenze alla
          salute.
        </p>
        <p>
          Le sostanze e i prodotti utilizzati nella costruzione di edifici,
          nella manutenzione, nella pulizia e gli inquinanti determinati dalle
          abitudini dei fruitori, sono destinati a diventare parte dell’aria che
          respiriamo, dell’acqua che beviamo e degli oggetti che tocchiamo.
          L’innovazione tecnologica, anche in un’ottica di economia circolare,
          ha portato alla nascita di una famiglia di prodotti sostenibili come
          soluzione all’inquinamento chimico, ma anche biologico. Il risultato
          finale è una gamma di prodotti a tecnologia avanzata messa al servizio
          dell’uomo e del pianeta. Ora, più che mai, ospedali, case
          farmaceutiche, enti pubblici e privati si rivolgono a REair per
          eliminare le sostanze nocive per la salute, per migliorare il
          benessere delle persone che operano negli ambienti indoor, e
          contestualmente per:
        </p>
        <ul>
          <li>• Sanificare ambienti ad alto rischio di infezioni;</li>
          <li>
            • Creare una superficie fotocatalitica, super-idrofilica e
            autopulente in grado di disgregare le sostanze inquinanti e i
            batteri presenti nell’aria e sul supporto trattato;
          </li>
          <li>
            • Eliminare o ridurre sensibilmente l’utilizzo di sostanze chimiche
            nocive utilizzate per la detersione/sanificazione;
          </li>
          <li>
            • Rispettare la vigente normativa in materia di valori minimi di
            esposizione agli agenti inquinanti.
          </li>
        </ul>
        <p>
          Applicare il sistema REair sulle superfici consente di attivare una
          azione di prevenzione; i benefici sono reali ed immediati e possono
          essere sintetizzati come segue:
        </p>
        <ul>
          <li>
            <strong>- ANTINQUINANTE (PURIFICAZIONE DELL’ARIA):</strong> il forte
            processo ossidativo, attivato dalla fotocatalisi, porta alla
            disgregazione delle sostanze inquinanti che entrano a contatto con
            gli ambienti trattati, trasformandoli in Sali inorganici, in
            anidride carbonica e acqua ppb;
          </li>
          <li>
            <strong>- SANIFICANTE/DISINFETTANTE:</strong> REair è in grado di
            abbattere una vasta gamma di batteri e virus (vd Escherichia Coli,
            Streptococcus faccium, Salmonella choleraesius e thyphosa). Gli
            ultimi studi evidenziano l’efficacia del prodotto REDIOXIDE anche
            nei confronti del virus dell’influenza Aviaria e della SARS. Può
            essere utilizzato anche su superfici a contatto con alimenti (senza
            necessità di risciacquo). Non è irritante per la pelle, non è
            corrosivo e non danneggia le superfici (dure o morbide) su cui viene
            applicato.
          </li>
          <li>
            <strong>- ANTIODORE:</strong> la fotocatalisi attiva il processo di
            disgregazione delle sostanze inquinanti, tra cui anche la molecola
            della nicotina e tutte le sostanze che generano odori;
          </li>
          <li>
            <strong>- AUTOPULIZIA E SUPERIDROFILIA:</strong> quando le gocce di
            acqua o vapore acqueo si depositano sulla superficie trattata con
            REair, esse generano un angolo di contatto di circa 90°.
            Sottoponendo la superficie a irradiazione UV le gocce d’acqua
            gradualmente decrementano l’angolo di contatto con la superficie
            trattata resa superidrofila. La superidrofilia indotta dal biossido
            di titanio di REair impedisce l’adesione di composti anche grassi,
            rendendo così la superficie facile da pulire.
          </li>
        </ul>
        <p>
          Numerosi test di laboratorio hanno dimostrato, in seguito all’utilizzo
          di REair, che la riduzione della carica batterica superficiale e degli
          inquinanti inorganici di natura chimica presenti nell’aria è stata
          superiore al 90%. RICORDATI: il decreto &rdquo;Cura Italia&rdquo;
          all&apos;articolo 64 prevede un credito di imposta del 50% sulle spese
          di sanificazione degli ambienti di lavoro, e la Regione Toscana
          prevede nelle sue linee guida la sanificazione dei veicoli adibiti a
          trasporto. PER INFO SUL PRODOTTO, LE SUE APPLICAZIONI O IL COSTO
          POTETE SCRIVERE A sanificazione@consorzio-cotraf.it o
          info@consorzio-cotraf.it, OPPURE CHIAMARE DIRETTAMENTE IL NUMERO:
          3285594048.
        </p>
      </div>
    </LayoutPages>
  );
}

export default Consorzio;
