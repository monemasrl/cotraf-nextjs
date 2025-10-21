import HomeServizi from "../../components/homeServizi";
import { Raleway } from "next/font/google";
import HomeLavora from "../../components/homeLavora";
const inter = Raleway({ subsets: ["latin"] });
import clientiData from "../../public/data/clienti.json";
import LoghiHome from "../../components/LoghiHome";
import HomeNumeri from "../../components/homeNumeri";
import style from "./page.module.scss";
const numeri = [
  { numero: 9, descrizione: "Consorziati", from: 0 },
  { numero: 3500, descrizione: "Dipendenti", from: 3000 },
  { numero: 15, descrizione: "Anni di esperienza", from: 0 },
  { numero: 11, descrizione: "Regioni in cui operiamo", from: 0 },
  {
    numero: 200000000,
    descrizione: "Euro di fatturato aggregato",
    from: 199999950,
  },
];
export const metadata = {
  title: "Consorzio Cotraf",
  description: "Consorzio Cotraf",
};

export default function Home() {
  return (
    <>
      <main className={`${style.home} ${inter.className}`}>
        <HomeServizi />
        <HomeNumeri numeri={numeri} />
        <LoghiHome loghi={clientiData} />
      </main>
      <HomeLavora />
    </>
  );
}
