import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import Head from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";
import { BASE_URL, ENQUIRIES_URL, ACCOMMODATIONS_URL } from "../../constants/api";
// import Image from "next/image";
import Heading from "../../components/common/Heading";
import FeedbackMessage from "../../components/common/FeedbackMessage";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Forms from "../../styles/common/Forms.module.css";
import EnquiryHero from "../../components/enquiries/EnquiryHero";

const schema = yup.object().shape({
  first_name: yup.string().required("Vennligst fyll in ditt fornavn.").min(2, `Må være minst 2 bokstaver.`).max(10, `Kan ikke være mer enn 10 bokstaver.`),
  last_name: yup.string().required("Vennligst fyll in ditt etternavn.").min(2, `Må være minst 2 bokstaver.`).max(10, `Kan ikke være mer enn 10 bokstaver.`),
  rooms: yup.string().required("Vennligst velg antall rom."),
  beds: yup.string().required("Vennligst velg antall senger."),
  email: yup.string().required("Vennligst fyll in din epost."),
  phone_number: yup.string().matches(/^[2-9][\0-9]{7}$/, "Fyll in gyldig mobilnummer ."),
  rooms: yup.string().required("Vennligst velg antall rom."),
  beds: yup.string().required("Vennligst velg antall senger."),
  date_from: yup.string().required("Vennligst velg fra dato."),
  date_to: yup.string().required("Vennligst velg fra dato"),
});

function AccommodationEnquiry({ accommodation }) {
  // const currentDate = new Date().toISOString().substr(0, 10);

  const [submitted, setSubmitted] = useState(false);
  // const [setError, setServerError] = useState(null);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function onSubmit(data) {
    // data.preventDefault();
    setSubmitted(true);

    // data.status = "publish";

    console.log(data);
    // const storedIdValue = accommodation.data.id;

    const url = BASE_URL + ENQUIRIES_URL;

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
      id: "",
      slug: "",
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      date_from: "",
      date_to: "",
      note: "",
    });
  }

  return (
    <Layout>
      <Head title={accommodation.data.attributes.name} content="Holidaze har mange utleiere som søker leiere og denne plassen er en av mange tilgjengelige! " />
      <EnquiryHero />
      <div className={Forms.container}>
        <Heading>Booking</Heading>
        {submitted && <span>Din booking er sendt!</span>}
        <form onSubmit={handleSubmit(onSubmit)} className={Forms.form}>
          <input defaultValue={accommodation.data.id} type="hidden" {...register("accommodation")} />
          {errors.accommodation && <FeedbackMessage type="error" message={errors.accommodation.message} />}

          <input defaultValue={accommodation.data.attributes.slug} type="text" {...register("slug")} className={Forms.input} readOnly />
          {errors.slug && <FeedbackMessage type="error" message={errors.slug.message} />}

          <input type="text" name="first_name" placeholder="Fornavn..." {...register("first_name")} className={Forms.input} />
          {errors.first_name && <FeedbackMessage type="error" message={errors.first_name.message} />}

          <input type="text" name="last_name" placeholder="Etternavn..." {...register("last_name")} className={Forms.input} />
          {errors.last_name && <FeedbackMessage type="error" message={errors.last_name.message} />}

          <input type="email" name="email" placeholder="Epost..." {...register("email")} className={Forms.input} />
          {errors.email && <FeedbackMessage type="error" message={errors.email.message} />}

          <input type="number" name="phone" placeholder="Mobil..." {...register("phone_number")} className={Forms.input} />
          {errors.phone_number && <FeedbackMessage type="error" message={errors.phone_number.message} />}

          <select name="rooms" {...register("rooms")} className={Forms.input}>
            <option defaultValue="" disabled selected>
              Antall rom
            </option>
            {/* <option value="0">Antall rom</option> */}
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          {errors.rooms && <FeedbackMessage type="error" message={errors.rooms.message} />}

          <select name="beds" {...register("beds")} className={Forms.input}>
            <option defaultValue="" disabled selected>
              Antall senger
            </option>

            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          {errors.beds && <FeedbackMessage type="error" message={errors.beds.message} />}

          <input
            type="date"
            name="date_from"
            // defaultValue={currentDate}
            {...register("date_from")}
            className={Forms.input}
          />
          {errors.date_from && <FeedbackMessage type="error" message={errors.date_from.message} />}
          <input
            type="date"
            name="date_to"
            // defaultValue={currentDate}
            {...register("date_to")}
            className={Forms.input}
          />
          {errors.date_from && <FeedbackMessage type="error" message={errors.date_from.message} />}
          <input type="text" name="note" placeholder="Ekstra info..." {...register("note")} className={Forms.input} />
          {errors.note && <FeedbackMessage type="error" message={errors.note.message} />}
          <button type="submit" className={Forms.button}>
            Send
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default AccommodationEnquiry;

export async function getStaticPaths() {
  const testUrl = BASE_URL + ACCOMMODATIONS_URL;
  try {
    const response = await axios.get(testUrl);
    console.log(response.data.data);
    const accommodations = response.data.data;

    const paths = accommodations.map((accommodation) => ({
      params: { id: accommodation.id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const url = BASE_URL + ACCOMMODATIONS_URL + params.id;

  let accommodation = null;

  try {
    const response = await axios.get(url);
    accommodation = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { accommodation: accommodation },
  };
}
