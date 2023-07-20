import HomeServizi from "../../components/homeServizi";
import { Raleway } from "next/font/google";
import HomeLavora from "../../components/homeLavora";
const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Consorzio Cotraf",
  description: "Consorzio Cotraf",
};

export default function Home() {
  return (
    <>
      <main className={`home ${inter.className}`}>
        <HomeServizi />
      </main>
      <HomeLavora />
    </>
  );
}
