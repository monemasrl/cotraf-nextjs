"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import style from "./header.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";
import heroImage from "/public/img/immagine_home.jpg";
import { blurBaseHero } from "../src/app/utility";
type Props = {};

function Header({}: Props) {
  const mobile = useMediaQuery(860);
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);

  function headerheight() {
    if (pathname === "/") {
      return "home";
    } else {
      return "page";
    }
  }
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const data = {
    nav1: [
      { name: "HOME", link: "/" },
      { name: "CONSORZIO", link: "/consorzio" },
      { name: "CLIENTI", link: "/clienti" },
      { name: "SANIFICAZIONE", link: "/sanificazione" },
      { name: "BANDI", link: "/bandi" },
      { name: "CERTIFICAZIONI", link: "/certificazioni" },
      { name: "INFORMAZIONI", link: "/informazioni" },
    ],
    nav2: [
      { name: "Telefono:", link: "055/0202253" },
      { name: "Mail:", link: "info@consorzio-cotraf.it" },
      { name: "contattaci", link: "/informazioni" },
    ],
  };

  function animationLineInMenuMobile() {
    if (!mobile) {
      return "underline";
    }
    return "";
  }

  return (
    <header className={`${headerheight() === "home" ? "" : style.page}`}>
      <div className={style.navWrapper}>
        <nav className={style.secondaryNav}>
          <ul>
            <li>
              <a href={`tel:${data.nav2[0].link}}>
                <span> {data.nav2[0].name}</span> {data.nav2[0].link}
              </a>
            </li>

            <li>
              <a href={`mailto:${data.nav2[1].link}`}>
                <span> {data.nav2[1].name}</span> {data.nav2[1].link}
              </a>
            </li>

            <li>
              <Link className="button" href={data.nav2[2].link}>
                {data.nav2[2].name}
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={`${style.mainNav} ${mobileMenu ? style.mobile : ""}`}>
          <Link className={style.logoMainNav} href="/">
            <Image
              src="/img/logo_cotraf_bianco.png"
              alt="cotraf logo"
              width={124}
              height={80}
              priority={true}
            />
          </Link>
          {mobile && (
            <div className={style.menuIcon} onClick={() => setMobileMenu(true)}>
              <GiHamburgerMenu />
            </div>
          )}
          <ul>
            {mobile && (
              <li
                className={style.menuIconClose}
                onClick={() => setMobileMenu(false)}
              >
                <TfiClose />
              </li>
            )}
            {data.nav1.map((item) => {
              return (
                <li key={item.name}>
                  {" "}
                  <Link href={item.link}>
                    {pathname.includes(item.link) && item.link.length > 1 && (
                      <motion.span
                        layoutId={animationLineInMenuMobile()}
                        className={style.navUnderline}
                      ></motion.span>
                    )}
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <li className={style.info}>
              <a href={`tel:${data.nav2[0].link}`}>
                <span> {data.nav2[0].name}</span> {data.nav2[0].link}
              </a>

              <a href={`mailto:${data.nav2[1].link}`}>
                <span> {data.nav2[1].name}</span> {data.nav2[1].link}
              </a>

              <Link className={style.button} href={data.nav2[2].link}>
                {data.nav2[2].name}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={style.wrapperJumbo}>
        <Image
          className={style.headerImage}
          src={heroImage}
          alt="cotraf hero image"
          fill={true}
          priority={true}
          placeholder="blur"
          blurDataURL={blurBaseHero}
        />
        {headerheight() === "home" ? (
          <div className={style.testoJumboHome}>
            <div className={style.subHead}>Il consorzio stabile</div>
            <h1 className="title">CO.TRA.F.</h1>
            <p>
              Da anni impegnati nell&apos;attività di: <br />
              logistica e trasporto conto terzi, facchinaggio, pulizie,
              <br />
              servizi di igiene ambientale di vario tipo, come la manutenzione
              cassonetti ed il lavaggio di mezzi di lavoro
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default Header;
