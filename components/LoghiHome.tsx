import React from "react";
import style from "./loghiHome.module.scss";
type Loghi = {
  nome: string;
  lista: { nome: string; descrizione: string; immagine: string }[];
};
function LoghiHome({ loghi }: { loghi: Loghi[] }) {
  return (
    <div className={style.loghiHome}>
      <h2>I nostri clienti</h2>
      <div className={style.loghiContainer}>
        {loghi.map((categoria, index) => (
          <div key={index} className={style.categoria}>
            <h3>{categoria.nome}</h3>
            <div className={style.loghiList}>
              {categoria.lista.map((cliente, idx) => (
                <div key={idx} className={style.cliente}>
                  <img
                    src={cliente.immagine}
                    alt={cliente.nome}
                    title={cliente.nome}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoghiHome;
