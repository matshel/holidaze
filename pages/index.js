import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import { BASE_URL, ACCOMMODATIONS_URL, ENQUIRIES_URL } from "../constants/api";
import FeaturedHeader from "../components/home/FeaturedHeader";
import styles from "../styles/pages/Index.module.css";
import FeedbackMessage from "../components/common/FeedbackMessage";
import Us from "../components/home/Us";

export default function Home(props) {
  console.log(props);
  const [disabled, setDisabled] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");
  const router = useRouter();

  const searchResults = props.accommodations.filter((e) => e.attributes.name.toLowerCase().includes(searchValue.toLowerCase()));

  function showDropdown(e) {
    setSearchValue(e.target.value);
    setCurrentSearch(e.target.value);
  }

  function addValueToInput(e) {
    setCurrentSearch(e.target.textContent);
    setSearchValue("");
    setDisabled(false);
  }

  function redirect() {
    const id = props.accommodations.filter((e) => {
      if (e.attributes.name.toLowerCase().includes(currentSearch.toLowerCase())) {
        return e.id;
      } else {
        return false;
      }
    });

    if (id) {
      const url = "/detail/" + JSON.parse(id[0].id);
      router.push(url);
    } else {
      setDisabled(true);
    }
  }
  return (
    <Layout>
      <Head title="Hjem" content="Holidaze sin forside | Holidaze er en platform for å finne din neste og beste overnatting" />
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <div className={styles.leftBoxInner}>
            <h1 className={styles.headingPrimary}> Finn Din Neste og Beste Overnatting</h1>
            <p className={styles.heroInfo}>Velkommen til Holidaze! Vi hjelper deg i å finne et perfekt overnattingstilbud i Bergen!</p>
            <div>
              {props.error && <FeedbackMessage message="An error occurred while loading the page. Please refresh the page or try again later." />}

              {!props.error && (
                <>
                  <div className={styles.searchBar}>
                    <input className={styles.inputSearch} value={currentSearch} placeholder="Søk etter sted..." aria-label="Søk etter sted" onChange={(e) => showDropdown(e)} />
                    <button className={styles.buttonSearch} disabled={disabled} onClick={redirect}>
                      Finn!
                    </button>
                  </div>
                  {searchValue.length > 0 && (
                    <div>
                      <ul className={styles.searchUl}>
                        {searchResults.map((e) => (
                          <li key={e.id} onClick={(e) => addValueToInput(e)} className={styles.searchList}>
                            {e.attributes.name}
                          </li>
                        ))}
                        {searchResults.length < 1 ? <li>Ingen resultater</li> : ""}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container2}>
        <FeaturedHeader />
      </div>
      <div className={styles.containerTest}>
        <div className={styles.container1}>
          {props.accommodations.map((accommodation) => {
            if (accommodation.attributes.featured) {
              return (
                <div>
                  <div key={accommodation.id} className={styles.list}>
                    <Image className={styles.cardImage} src={accommodation.attributes.img_url} layout="responsive" width="140" height="100" quality="45" alt={accommodation.attributes.name} />
                    <div className={styles.cardInformation}>
                      <p>{accommodation.attributes.address}</p>
                      <h2>{accommodation.attributes.name}</h2>
                      <p>kr {accommodation.attributes.price} per natt</p>
                      <div className={styles.cardLinks}>
                        <Link href={`enquiry/${accommodation.id}`} className={styles.cardLinks__enquire}>
                          Book
                        </Link>
                        <Link href={`detail/${accommodation.id}`} className={styles.cardLinks__learnMore}>
                          Mer info
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <Us />
    </Layout>
  );
}

export async function getStaticProps() {
  let accommodations = [];

  let errorMessage = null;

  const url = BASE_URL + ACCOMMODATIONS_URL;

  try {
    const response = await axios.get(url);
    accommodations = response.data.data;
  } catch (error) {
    errorMessage = error.toString();
    console.log("An error occurred. Error message: " + error);
  }

  return {
    props: {
      accommodations: accommodations,
      error: errorMessage,
    },
  };
}
