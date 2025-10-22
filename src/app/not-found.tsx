import Link from "next/link";
import style from "./not-found.module.scss";
import { Raleway } from "next/font/google";
const inter = Raleway({ subsets: ["latin"] });
import Image from "next/image";
export default function NotFound() {
  return (
    <div className={`${style.container} ${inter.className}`}>
      <div className={style.content}>
        <Image
          src="/img/logo.svg"
          alt="404 Not Found"
          width={300}
          height={300}
        />
        <h1 className={style.title}>404</h1>
        <h2 className={style.subtitle}>Pagina non trovata</h2>
        <p className={style.description}>
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <div className={style.actions}>
          <a href="/" className={style.homeButton}>
            Torna alla Home
          </a>
          <Link href="/contatti" className={style.contactButton}>
            Contattaci
          </Link>
        </div>
      </div>
    </div>
  );
}
