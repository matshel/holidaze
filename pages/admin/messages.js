import Head from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { BASE_URL, ACCOMMODATIONS_URL, MESSAGES_URL, SORT_URL } from "../../constants/api";
import Heading from "../../components/common/Heading";
import styles from "../../styles/pages/Messages.module.css";

export default function Home(props) {
  console.log(props);

  return (
    <Layout>
      <Head title="Home" content="Admin side for kontakt meldinger" />
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <div className={styles.test}>
            <div className={styles.test2}>
              <Heading>Kontakt meldinger</Heading>
              <div>Det er {props.messages.length} meldinger sortert på nyeste</div>
            </div>
            {props.messages.map((message) => {
              const date = new Date(message.attributes.publishedAt);
              const formattedDate = date.toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              });
              return (
                <>
                  <div key={message.id} className={styles.messagesList}>
                    <p>Meldings id : #{message.id}</p>
                    <p>Fra: {message.attributes.first_name}</p>
                    <p>{message.attributes.message}</p>
                    <p>Publisert : {formattedDate}</p>
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
  let messages = [];

  const url = BASE_URL + MESSAGES_URL + SORT_URL;

  try {
    const response = await axios.get(url);
    messages = response.data.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      messages: messages,
    },
  };
}
