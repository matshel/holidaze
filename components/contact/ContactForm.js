import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL, MESSAGES_URL, CORS_URL } from "../../constants/api";
import FeedbackMessage from "../common/FeedbackMessage";

import Forms from "../../styles/common/Forms.module.css";
import Heading from "../../components/common/Heading";

// const { first_name, last_name, email, message } = data;

const schema = yup.object().shape({
  first_name: yup.string().required("Vennligst fyll inn fornavn").min(2, "Minimum 2 bokstaver"),
  last_name: yup.string().required("Vennligst fyll inn etternavn").min(2, "Minimum 2 bokstaver"),
  email: yup.string().required("Vennligst fyll in epost").email("Vennligst fyll in gyldig epost"),
  message: yup.string().required("Vennligst fyll in melding").min(10, "Meldingen må være minst 10 bokstaver"),
});

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [setError, setServerError] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function onSubmit(data) {
    // data.preventDefault();
    setSending(true);
    setSubmitted(true);

    // data.status = "publish";

    console.log(data);

    const url = BASE_URL + MESSAGES_URL;

    try {
      const response = await axios.post(url, { data: data });
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitted(false);
    }

    reset({
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    });
  }

  console.log(errors);

  return (
    <>
      {submitted && <span className="success">Din melding ble sendt!</span>}
      <div className={Forms.container}>
        <Heading>Kontakt oss</Heading>
        <fieldset className={Forms.fieldset} disabled={sending}>
          <form onSubmit={handleSubmit(onSubmit)} className={Forms.form}>
            <input {...register("first_name")} className={Forms.input} placeholder="Fornavn..." aria-label="Ditt fornavn" />
            {errors.first_name && <FeedbackMessage type="error" message={errors.first_name.message} />}

            <input type="text" name="lastName" {...register("last_name")} className={Forms.input} placeholder="Etternavn..." aria-label="Ditt etternavn" />
            {errors.last_name && <FeedbackMessage type="error" message={errors.last_name.message} />}

            <input type="email" name="email" {...register("email")} className={Forms.input} placeholder="Epost..." aria-label="Din epost" />
            {errors.email && <FeedbackMessage type="error" message={errors.email.message} />}

            <textarea name="message" {...register("message")} className={Forms.textArea} placeholder="Din Melding..." aria-label="Din melding" />
            {errors.message && <FeedbackMessage type="error" message={errors.message.message} />}

            <button type="submit" className={Forms.button} aria-label="Send knapp">
              Send
            </button>
            {setError && <FeedbackMessage message="An error occurred. Please refresh the page and try again. Contact us if you still have issues." />}
            {submitted && !setError ? <FeedbackMessage message="Melding sendt!" /> : ""}
          </form>
        </fieldset>
      </div>
    </>
  );
}

export default ContactForm;
