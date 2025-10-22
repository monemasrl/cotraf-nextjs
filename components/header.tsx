"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import style from "./header.module.scss";
import Link from "next/link";
import useMediaQuery from "../hooks/useMediaQuery";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";
import heroImage from "/public/img/immagine_home.jpg";
import { blurBaseHero } from "../src/app/utility";
import { motion } from "motion/react";
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
      { name: "CONSORZIO", link: "/consorzio" },
      { name: "SERVIZI", link: "/servizi" },
      { name: "CLIENTI", link: "/clienti" },
      { name: "CERTIFICAZIONI", link: "/certificazioni" },
      { name: "CONTATTI", link: "/contatti" },
    ],
    nav2: [
      { name: "Telefono:", link: "055/3987323", url: "+390553987323" },
      { name: "Mail:", link: "info@consorzio-cotraf.it" },
      { name: "contattaci", link: "/contatti" },
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
      <div className={style.fullwidthNav}>
        <div className={style.navWrapper}>
          <Link className={style.logoMainNav} href="/">
            <Image
              src="/img/logo_cotraf_bianco.png"
              alt="cotraf logo"
              width={124}
              height={80}
              priority={true}
            />
          </Link>

          <div className={style.navContainer}>
            <nav className={style.secondaryNav}>
              <ul>
                <li>
                  <a href={`tel:${data.nav2[0].url}`}>
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
            <nav
              className={`${style.mainNav} ${mobileMenu ? style.mobile : ""}`}
            >
              {mobile && (
                <div
                  className={style.menuIcon}
                  onClick={() => setMobileMenu(true)}
                >
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
                        {pathname.includes(item.link) &&
                          item.link.length > 1 && (
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
                  <a href={`tel:${data.nav2[0].url}`}>
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
        </div>
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
          <motion.div
            className={style.testoJumboHome}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0,
            }}
          >
            <div className={style.subHead}>Il consorzio stabile</div>
            <h1 className="title">CO.TRA.F.</h1>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
            >
              STABILE PER VOCAZIONE
            </motion.h2>
            <motion.p
              style={{ maxWidth: "900px" }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.7,
              }}
            >
              {" "}
              IL CONSORZIO STABILE CO.TRA.F. è una realtà composta da imprese
              che, con scopo mutualistico e comune struttura di impresa, si
              occupa di promuovere, organizzare e coordinare le attività dei
              soci nella partecipazione e gestione degli appalti.
            </motion.p>
          </motion.div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default Header;
