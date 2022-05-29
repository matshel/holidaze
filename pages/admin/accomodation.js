import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FeedbackMessage from "../../components/common/FeedbackMessage";
import { BASE_URL, ACCOMMODATIONS_URL, ACCOMMODATIONS_URL_TEST, TOKEN_KEY } from "../../constants/api";
import Layout from "../../components/layout/Layout";
import Head from "../../components/layout/Head";
import Heading from "../../components/common/Heading";
import styles from "../../styles/pages/Accommodations.module.css";
import Forms from "../../styles/common/Forms.module.css";

const schema = yup.object().shape({
  name: yup.string().required("Vennligst fyll inn steds navn").min(2, "Minimum 2 bokstaver"),
  description: yup.string().required("Vennligst fyll inn beskrivelse").min(4, "Minimum 8 bokstaver"),
  img_url: yup.string().required("Vennligst fyll inn pixabay url"),
  img_url_2: yup.string().required("Vennligst fyll inn pixabay url"),
  slug: yup.string().required("Vennligst fyll inn slug").min(2, "Minimum 2 bokstaver"),
  price: yup.string().required("Vennligst fyll inn pris"),
  address: yup.string().required("Vennligst fyll inn addresse").min(8, "Minimum 8 bokstaver"),
});

export default function AddNewForm() {
  const [submitting, setSubmitting] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    setToken(token);
    console.log(token);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSending(true);

    const url = BASE_URL + ACCOMMODATIONS_URL;

    try {
      const options = {
        headers: {
          Authorization: "Bearer" + token,
        },
      };
      const response = await axios.post(url, { data: data }, options);

      console.log("response", response.data);
    } catch (error) {
      setError(error.toString());
      console.log("An error occurred. Error message: " + error);
    } finally {
      setSubmitting(true);
    }
    // reset({
    //   name: "",
    //   slug: "",
    //   description: "",
    //   message: "",
    //   img_url: "",
    //   img_url_2: "",
    //   price: "",
    //   address: "",
    //   featured: ""
    // });
  }

  return (
    <Layout>
      <Head title="Legg til nytt sted" content="Admin side for å legge til nytt sted" />
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <div className={styles.test2}>
            <Heading>Legg til nytt sted</Heading>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className={Forms.form}>
            <fieldset className={Forms.fieldset} disabled={sending}>
              <div>
                <input className={Forms.input} type="text" name="name" placeholder="Navn..." {...register("name")} aria-label="Navn på sted" />
                {errors.name && <FeedbackMessage message={errors.name.message} />}
              </div>
              <div>
                <input className={Forms.input} name="slug" placeholder="eks: hotel-krantz" {...register("slug")} aria-label="legg til slug" />

                {errors.slug && <FeedbackMessage message={errors.slug.message} />}
              </div>
              <div>
                <input className={Forms.input} type="text" name="description" placeholder="Beskrivelse..." {...register("description")} aria-label="Beskrivelse" />
                {errors.description && <FeedbackMessage message={errors.description.message} />}
              </div>
              <div>
                <input className={Forms.input} name="img_url" placeholder="Link: https://cdn.pixabay.com/photo/..." {...register("img_url")} aria-label="Legg til bilde 1" />

                {errors.img_url && <FeedbackMessage message={errors.img_url.message} />}
              </div>

              <small className={Forms.small}>Info! Vår bildepartner er pixabay</small>
              <div>
                <input className={Forms.input} name="img_url_2" placeholder="Link: https://cdn.pixabay.com/photo/..." {...register("img_url_2")} aria-label="Legg til bilde 2" />

                {errors.img_url_2 && <FeedbackMessage message={errors.img_url_2.message} />}
              </div>
              <small className={Forms.small}>Info! Vår bildepartner er pixabay</small>
              <div>
                <input className={Forms.input} name="price" placeholder="Pris..." {...register("price")} aria-label="Legg til pris" />

                {errors.price && <FeedbackMessage message={errors.price.message} />}
              </div>
              <div>
                <input className={Forms.input} name="address" placeholder="Addresse..." {...register("address")} aria-label="Legg til addresse" />

                {errors.address && <FeedbackMessage message={errors.address.message} />}
              </div>
              <div>
                <label htmlFor="featured">Mest populær?</label>
                <input className={Forms.checkbox} type="checkbox" name="featured" placeholder="Featured" {...register("featured")} aria-label="avhuking mest populær" />
              </div>

              <div>
                <button className={Forms.button} type="submit" aria-label="Legg til sted knapp">
                  {/* {submitting ? "legger til..." : "Legg til sted"} */}legg til
                </button>
              </div>
              {error && <FeedbackMessage message="An error occurred. Please refresh the page and try again. Contact us if you still have issues." />}
              {submitting && !error ? <FeedbackMessage message="Nytt sted lagt til!" /> : ""}
            </fieldset>
          </form>
        </div>
      </div>
    </Layout>
  );
}
