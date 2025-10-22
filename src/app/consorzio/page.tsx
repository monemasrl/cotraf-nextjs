import React from "react";
import LayoutPages from "../layoutPages";
import style from "./page.module.scss";
import Timeline from "../../../components/timeline";
import { Raleway } from "next/font/google";
import ListaClienti from "../../../components/listaClienti";
const text = Raleway({ subsets: ["latin"] });
type Props = {};
export const metadata = {
  title: "Consorzio Cotraf - consorzio",
  description:
    "CO.TRA.F. nasce come consorzio di imprese artigiane dedite al trasporto dei farmaci, ambito che necessita di grande professionalità, cura ed attenzione per garantire la filiera della temperatura controllata e della assoluta puntualità.",
};
const data = [
  {
    titolo: "storia",
    testo:
      "CO.TRA.F. nasce come consorzio di imprese artigiane dedite al trasporto dei farmaci, ambito che necessita di grande professionalità, cura ed attenzione per garantire la filiera della temperatura controllata e della assoluta puntualità. Ancora oggi la Presidenza del Consorzio, grazie alla ultra quarantennale esperienza nel settore, garantisce che questi valori siano patrimonio di tutti coloro i quali collaborano con noi. Dal 2008 al 2013 CO.TRA.F. ha gestito il servizio di distribuzione dei farmaci per conto di ESTAV, ovvero la stazione appaltante di Regione Toscana. Successivamente, nel settore privato, inizia la collaborazione con Unico - la farmacia dei farmacisti, azienda leader nella vendita di prodotti farmacologici. Per conto di Unico svolgiamo tutt’oggi l’attività di logistica ed approvvigionamento delle farmacie delle province di Firenze, Prato, Pistoia, Siena e Lucca e Grosseto. Dal 2013, grazie ad alcune collaborazioni con professionisti del settore, inizia l’esperienza con Multiutility quali le società del gruppo Hera spa, A2A spa, SEI Toscana, IREN Ambiente, AMA ed ALIA spa, quali aggiudicatari di servizi come la gestione integrata dei parchi contenitori per la raccolta rifiuti, il lavaggio di automezzi per la raccolta, la movimentazione e la gestione del personale per l’approvvigionamento degli impianti di proprietà delle suddette aziende.",
  },
];
const consorziati = {
  titolo: "i nostri consorziati",
  testo:
    "Ad oggi CO.TRA.F. conta 9 aziende consorziate, tutte operanti nei settori dei servizi ambientali, della logistica, del trasporto a temperatura controllata, dell’amministrazione e gestione di mense aziendali e scolastiche, del portierato e dei servizi amministrativi, nonché del settore edile e della manutenzione immobiliare. La compagine sociale è in continua evoluzione ed espansione, con l’obiettivo di ampliare ulteriormente il ventaglio di servizi offerti ai propri clienti.",
  consorziati: [
    { nome: "ASSOLOG S.R.L.", immagine: "/img/consorziate/assolog.png" },
    {
      nome: "MELLON SOCIETA’ COOPERATIVA",
      immagine: "/img/consorziate/mellon.png",
    },
    {
      nome: "CRISTOFORO SOCIETA’ COOPERATIVA SOCIALE ONLUS",
      immagine: "/img/consorziate/cristoforo.png",
    },
    { nome: "FI.R.MA S.R.L.", immagine: "/img/consorziate/firma.png" },
    {
      nome: "TOP COSTRUZIONI S.R.L.",
      immagine: "/img/consorziate/top.png",
    },
    { nome: "KAIROS S.R.L.", immagine: "/img/consorziate/kairos.png" },
    { nome: "SICUREL S.R.L.", immagine: "/img/consorziate/sicurel.png" },
  ],
};
const storia = [
  {
    anno: "2000",
    evento:
      "CO.TRA.F. nasce come consorzio di imprese artigiane dedite al trasporto dei farmaci, ambito che necessita di grande professionalità, cura ed attenzione per garantire la filiera della temperatura controllata e della assoluta puntualità.",
  },
  {
    anno: "2008-2013",
    evento:
      "CO.TRA.F. ha gestito il servizio di distribuzione dei farmaci per conto di ESTAV di Regione Toscana e dei più importanti distributori del farmaco su scala nazionale.",
  },
  {
    anno: "2013",
    evento:
      "Grazie	ad	alcune	collaborazioni con	professionisti	del settore, CO.TRA.F. allarga	il proprio ambito operativo consorziando aziende attive nell’esecuzione	di servizi cosiddetti “soft”. È l’inizio di un percorso che fa di CO.RA.F. un player riconosciuto presso le più importanti Multiutility del Paese, tra le quali società gruppo Hera spa, Hera ambiente, Uniflotte, AMA Roma spa, A2A spa, Alia spa, società del Gruppo IREN, SEI Toscana, quale aggiudicatario di commesse come la gestione integrata dei servizi gestiti	in outsourcing.",
  },
  {
    anno: "2022 ",
    evento:
      "La trasformazione in Consorzio Stabile e l’allargamento della compagine	consortile ad Aziende attive nel settore dell’edilizia e della manutenzione immobiliare completa, un percorso di inclusione che fa di CO.TRA.F. una azienda dinamica e pronta per affrontare le sfide del mercato dei servizi e dei lavori sia	in	ambito pubblico che privato.",
  },
];
function Consorzio({}: Props) {
  return (
    <LayoutPages>
      <h1>Consorzio</h1>
      <div className={`testoPagine ${text.className}`}>
        {data.map((item, index) => (
          <>
            <h2>{item.titolo}</h2>
            <p className={style.mainTesto}>{item.testo}</p>
          </>
        ))}
      </div>
      <Timeline items={storia} />
      <h2>{consorziati.titolo}</h2>
      <div
        className={`testoPagine ${text.className} ${style.consorziatiSection}`}
      >
        <p>{consorziati.testo}</p>
        <ListaClienti lista={consorziati.consorziati} margin="3rem 0 0 0" />
      </div>
    </LayoutPages>
  );
}

export default Consorzio;
