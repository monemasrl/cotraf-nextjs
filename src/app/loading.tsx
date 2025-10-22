import style from "./loading.module.scss";

export default function Loading() {
  return (
    <div className={style.container}>
      <div className={style.spinner}>
        <div className={style.spinnerInner}></div>
      </div>
      <p className={style.text}>Caricamento in corso...</p>
    </div>
  );
}
