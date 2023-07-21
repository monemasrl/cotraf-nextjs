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

  const [ragionesociale, setRagionesociale] = useState<string>("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {}, []);

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

      <input type="hidden" name="form-name" value="contact" />
      <p>
        {" "}
        <label htmlFor="ragionesociale">Ragione Sociale:</label> <br />
        <input
          onChange={(e) => {
            setRagionesociale(e.target.value);
          }}
          type="text"
          name="ragionesociale"
          id="ragionesociale"
          required
        />
      </p>
      <p>
        <label htmlFor="youremail">Indirizzo mail:</label> <br />
        <input type="email" name="email" id="youremail" required />
      </p>
      <p>
        <label htmlFor="phone">Telefono</label> <br />
        <input type="phone" name="phone" id="phone" required />
      </p>
      <p>
        <label htmlFor="yourmessage">Messaggio:</label> <br />
        <textarea name="message" id="yourmessage" required></textarea>
      </p>
      <p>
        <button type="submit">Invia</button>
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
