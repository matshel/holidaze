import Head from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { BASE_URL, ACCOMMODATIONS_URL, MESSAGES_URL, ENQUIRIES_URL, SORT_URL, ACCOMMODATIONS_URL_TEST } from "../../constants/api";
import Heading from "../../components/common/Heading";
import styles from "../../styles/pages/Enquiries.module.css";

export default function EnquiriesList(props) {
  console.log(props);

  return (
    <Layout>
      <Head title="Home" content="Admin side for bookinger/henvendelser" />
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <div className={styles.test}>
            <div className={styles.test2}>
              <Heading>Bookinger</Heading>
              <div>Det er {props.accommodations.length} bookinger sortert på nyeste</div>
            </div>
            {props.accommodations.map((accommodation) => {
              const date = new Date(accommodation.attributes.publishedAt);
              const formattedDate = date.toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              });
              const date_from = new Date(accommodation.attributes.date_from);
              const formattedFromDate = date_from.toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
              const date_to = new Date(accommodation.attributes.date_to);
              const formattedToDate = date_to.toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

              return (
                <>
                  <div key={accommodation.id} className={styles.messagesList}>
                    <p>Sted: {accommodation.attributes.slug}</p>
                    <p>Booking id : #{accommodation.id}</p>
                    <p>Publisert : {formattedDate}</p>
                    <p>
                      Fra: {accommodation.attributes.first_name} {accommodation.attributes.last_name}
                    </p>
                    <p>Epost: {accommodation.attributes.email}</p>
                    <p>Mobil: {accommodation.attributes.phone_number}</p>
                    <p>Dato fra: {formattedFromDate}</p>
                    <p>Dato til: {formattedToDate}</p>
                    <p>Notat: {accommodation.attributes.note}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  let accommodations = [];

  const url = BASE_URL + ENQUIRIES_URL + SORT_URL;

  try {
    const response = await axios.get(url);
    accommodations = response.data.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      accommodations: accommodations,
    },
  };
}
