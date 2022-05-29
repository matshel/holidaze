import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import AboutMain from "../components/about/AboutMain";
import AboutHero from "../components/about/AboutHero";

export default function AboutPage() {
  return (
    <Layout>
      <Head title="Om oss" content="Holidaze om oss side - Lær om den raskest voksende airbnb lignende platformen for Bergens regionen!" />
      <AboutHero />
      <AboutMain />
    </Layout>
  );
}
