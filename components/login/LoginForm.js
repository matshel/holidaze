import { useState, useContext } from "react";
import router from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Forms from "../../styles/common/Forms.module.css";
import Heading from "../../components/common/Heading";

import ValidationError from "../common/ValidationError";
import { BASE_URL_LOGIN, TOKEN_PATH, TOKEN_KEY } from "../../constants/api";
import AuthContext from "../../context/AuthContext";

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);

    const settings = { identifier: data.username, password: data.password };

    try {
      const response = await axios.post(TOKEN_PATH, settings);
      console.log("response", response.data);
      setAuth(response.data);
      router.push("/admin/admin");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <div className={Forms.container}>
        <Heading>Logg inn</Heading>

        <form onSubmit={handleSubmit(onSubmit)} className={Forms.form}>
          {loginError && <ValidationError>{"Wrong username or password"}</ValidationError>}
          <fieldset disabled={submitting} className={Forms.fieldset}>
            <div>
              <input name="username" placeholder="Brukernavn..." {...register("username")} className={Forms.input} aria-label="Ditt brukernavn" />
              {errors.username && <ValidationError>{errors.username.message}</ValidationError>}
            </div>

            <div>
              <input name="password" placeholder="Passord..." {...register("password")} type="password" className={Forms.input} aria-label="Ditt passord" />
              {errors.password && <ValidationError>{errors.password.message}</ValidationError>}
            </div>

            <button aria-label="Logg inn knapp" className={Forms.button}>
              {submitting ? "Logger inn..." : "Logg inn"}
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
