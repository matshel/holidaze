import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import PlacesHero from "../components/places/PlacesHero";
import axios from "axios";
import { BASE_URL, ACCOMMODATIONS_URL_NS } from "../constants/api";
import styles from "../styles/pages/Places.module.css";
import SubHeadingStyles from "../styles/components/SubHeading.module.css";
import Image from "next/image";
import Link from "next/link";
import SubHeading from "../components/common/SubHeading";

export default function Home(props) {
  console.log(props);

  return (
    <Layout>
      <Head title="Home" content="Holidaze sin side for overnattings plasser | Finn et hotell, bnb, eller leilighet til leie!" />
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <div className={styles.test}>
            <PlacesHero />
            <div className={SubHeadingStyles.subHeadingContainer}>
              <div className={SubHeadingStyles.subHeading}>
                <SubHeading />
              </div>
              <div></div>
            </div>
            <div className={styles.containerWrapper}>
              <div className={styles.container1}>
                {props.messages.map((message) => {
                  return (
                    <>
                      <div key={message.id} className={styles.list}>
                        <Image className={styles.cardImage} src={message.attributes.img_url} layout="responsive" width="140" height="100" quality="75" alt={message.attributes.name} />
                        <div className={styles.cardInformation}>
                          <p>{message.attributes.address}</p>
                          <h2>{message.attributes.name}</h2>
                          <p>Kr {message.attributes.price} per natt</p>
                          <div className={styles.cardLinks}>
                            <Link href={`enquiry/${message.id}`}>Book</Link>
                            <Link href={`detail/${message.id}`}>Lær mer</Link>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  let messages = [];

  const url = BASE_URL + ACCOMMODATIONS_URL_NS;

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
