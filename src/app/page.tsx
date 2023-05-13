import HomeServizi from "../../components/homeServizi";
import { Raleway } from "next/font/google";
import HomeLavora from "../../components/homeLavora";
const inter = Raleway({ subsets: ["latin"] });

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
