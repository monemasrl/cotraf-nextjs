import React from "react";

type Props = {};

function Form({}: Props) {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      action="contact/?success=true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <input type="text" name="firstname" id="firstname" />
        <label htmlFor="yourname">Your Name:</label> <br />
        <input type="text" name="name" id="yourname" />
      </p>
      <p>
        <label htmlFor="youremail">Your Email:</label> <br />
        <input type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="yourmessage">Message:</label> <br />
        <textarea name="message" id="yourmessage"></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
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
