import axios from "axios";
import Head from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";
import { BASE_URL, ACCOMMODATIONS_URL } from "../../constants/api";
import Image from "next/image";
import Heading from "../../components/common/Heading";
import styles from "../../styles/pages/Detail.module.css";
import Link from "next/link";

function AccommodationDetail({ accommodation }) {
  console.log(accommodation);
  return (
    <Layout>
      <Head title={accommodation.data.attributes.name} />
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <div className={styles.containerInnerLeft}>
            <Image src={accommodation.data.attributes.img_url} layout="responsive" width="400px" height="300px" alt={accommodation.data.attributes.name} className={styles.image1} />
          </div>
          <div className={styles.containerInnerRight}>
            <Image src={accommodation.data.attributes.img_url_2} layout="responsive" width="400px" height="300px" alt={accommodation.data.attributes.name} className={styles.image2} />
          </div>
          <div className={styles.containerInner2}>
            <Heading>{accommodation.data.attributes.name}</Heading>
            <p> {accommodation.data.attributes.address}</p>
            <p className={styles.paragraph}> {accommodation.data.attributes.description} </p>
            <p> kr {accommodation.data.attributes.price} per natt</p>
            <div>
              <Link href={`../enquiry/${accommodation.data.id}`}>
                <a className={styles.links}>Book</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AccommodationDetail;

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
