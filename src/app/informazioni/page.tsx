import React from "react";
import LayoutPages from "../layoutPages";
import style from "./page.module.scss";
import { Raleway } from "next/font/google";
const text = Raleway({ subsets: ["latin"] });
type Props = {};
const data = [
  {
    titolo: "",
    testo:
      "IL CONSORZIO STABILE CO.TRA.F. è una realtà composta da imprese che, con scopo mutualistico e comune struttura di impresa, si occupa di promuovere, organizzare e coordinare le attività dei soci nella partecipazione e gestione degli appalti. I settori in cui operiamo sono i servizi ambientali, quali la gestione integrata dei parchi contenitori e dei mezzi destinati alla RSU, la gestione di impianti di selezione e smaltimento dei rifiuti, la logistica ed il trasporto di cose conto terzi, facchinaggio, pulizie, traslochi e manutenzione del verde. Il Consorzio intende inoltre promuovere la collaborazione e le sinergie tra le aziende consorziate, la trasmissione del know-how sui servizi svolti, la capacità di individuare sempre nuovi canali di sviluppo e competenze su possibili opportunità per la crescita delle consorziate stesse. Oggi CO.TRA.F è attivo in tutto il centro-nord con particolari focus in Toscana, Emilia-Romagna, Lombardia, Piemonte, Friuli Venezia Giulia e Lazio. Dall’esperienza nei servizi di supporto all’igiene ambientale nasce lo sviluppo della gamma di accessori e ricambi per contenitori stradali, compatibili con quelli delle più importanti aziende del settore, oltre che la produzione, anche customizzata, di cestini per rifiuti, mono e pluriconferimento. La durata ed il decoro dei contenitori passano anche attraverso la programmazione delle sostituzioni delle parti più soggette a stress da utilizzo; i nostri prodotti rispondono in maniera efficace e conveniente a questo aspetto decisivo per la tenuta del valore dei beni di proprietà di aziende pubbliche e private.",
  },
  {
    titolo: "storia",
    testo:
      "CO.TRA.F. nasce come consorzio di imprese artigiane dedite al trasporto dei farmaci, ambito che necessita di grande professionalità, cura ed attenzione per garantire la filiera della temperatura controllata e della assoluta puntualità. Ancora oggi la Presidenza del Consorzio, grazie alla ultra quarantennale esperienza nel settore, garantisce che questi valori siano patrimonio di tutti coloro i quali collaborano con noi. Dal 2008 al 2013 CO.TRA.F. ha gestito il servizio di distribuzione dei farmaci per conto di ESTAV, ovvero la stazione appaltante di Regione Toscana. Successivamente, nel settore privato, inizia la collaborazione con Unico – la farmacia dei farmacisti, azienda leader nella vendita di prodotti farmacologici. Per conto di Unico svolgiamo tutt’oggi l’attività di logistica ed approvvigionamento delle farmacie delle province di Firenze, Prato, Pistoia, Siena e Lucca e Grosseto. Dal 2013, grazie ad alcune collaborazioni con professionisti del settore, inizia l’esperienza con Multiutility quali le società del gruppo Hera spa, A2A spa, SEI Toscana, IREN Ambiente, AMA ed ALIA spa, quali aggiudicatari di servizi come la gestione integrata dei parchi contenitori per la raccolta rifiuti, il lavaggio di automezzi per la raccolta, la movimentazione e la gestione del personale per l’approvvigionamento degli impianti di proprietà delle suddette aziende.",
  },
];
function Consorzio({}: Props) {
  return (
    <LayoutPages>
      <h1>Informazioni</h1>
      <div className={`${style.testoPagine} ${text.className}`}>
        {data.map((item, index) => (
          <>
            <h3>{item.titolo}</h3>
            <p>{item.testo}</p>
          </>
        ))}
      </div>
    </LayoutPages>
  );
}

export default Consorzio;
