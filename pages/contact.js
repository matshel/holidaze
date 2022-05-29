import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Heading from "../components/common/Heading";
import ContactForm from "../components/contact/ContactForm";
import ContactHero from "../components/contact/ContactHero";

export default function ContactPage() {
  return (
    <Layout>
      <Head title="Kontakt" content="Holidaze kontakt side | Kontakt oss nå å få et godt tilbud på overnatting" />
      {/* <Heading>Contact page</Heading> */}
      <ContactHero />
      <ContactForm />
    </Layout>
  );
}
