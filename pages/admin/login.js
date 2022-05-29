import Head from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";
import Heading from "../../components/common/Heading";
import LoginForm from "../../components/login/LoginForm";
import LoginHero from "../../components/login/LoginHero";

export default function LoginPage() {
  return (
    <Layout>
      <Head title="Login" content="Holidaze admin login" />
      {/* <Heading>Login page</Heading> */}
      <LoginHero />
      <LoginForm />
    </Layout>
  );
}
