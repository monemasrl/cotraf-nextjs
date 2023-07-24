"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import style from "./form.module.scss";
type Props = {};

function SuccessMessage() {
  return (
    <div className={style.success}>
      <h3>Messaggio inviato</h3>
      <p>Risponderemo al messaggio nel più breve tempo possibile</p>
    </div>
  );
}

function Form({}: Props) {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const [ragioneSociale, setRagioneSociale] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [messaggio, setMessaggio] = useState<string>("");

  const [error, setError] = useState<string>("");
  const [submit, setSubmit] = useState<boolean>(false);

  useEffect(() => {
    if (ragioneSociale.length < 3) {
      setError("Nome troppo corto");
    } else if (mail.length < 3 && !mail.includes("@")) {
      setError("Mail troppo corta");
    } else if (phone.length < 3) {
      setError("Telefono troppo corto");
    } else if (messaggio.length < 10) {
      setError("Messaggio troppo corto");
    } else {
      setError("");
    }
    //controllo sul submit del form netlify
    if (
      ragioneSociale.length < 3 &&
      mail.length < 3 &&
      !mail.includes("@") &&
      phone.length < 3 &&
      messaggio.length < 10
    ) {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  }, [ragioneSociale, mail, phone, messaggio]);

  return (
    <form
      className={style.form}
      name="contact"
      method="POST"
      data-netlify="true"
      action="informazioni/?success=true"
      data-netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
    >
      {success && <SuccessMessage />}
      {error && <p className={style.error}>{error}</p>}
      <input type="hidden" name="form-name" value="contact" />
      <p>
        {" "}
        <label htmlFor="ragionesociale">Ragione Sociale:</label> <br />
        <input
          onChange={(e) => {
            setRagioneSociale(e.target.value);
          }}
          type="text"
          name="ragionesociale"
          id="ragionesociale"
          required
        />
      </p>
      <p>
        <label htmlFor="youremail">Indirizzo mail:</label> <br />
        <input
          onChange={(e) => setMail(e.target.value)}
          type="email"
          name="email"
          id="youremail"
          required
        />
      </p>
      <p>
        <label htmlFor="phone">Telefono</label> <br />
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          name="phone"
          id="phone"
          required
        />
      </p>
      <p>
        <label htmlFor="yourmessage">Messaggio:</label> <br />
        <textarea
          onChange={(e) => {
            setMessaggio(e.target.value);
          }}
          name="message"
          id="yourmessage"
          required
        ></textarea>
      </p>
      <p>
        <button disabled={error ? true : false} type="submit">
          Invia
        </button>
      </p>
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
    </form>
  );
}

export default Form;
