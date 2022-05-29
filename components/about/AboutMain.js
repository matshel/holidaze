import React from "react";
import styles from "../../styles/components/AboutMain.module.css";
import Heading from "../../components/common/Heading";

export default function AboutMain() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <div className={styles.infoMain}>
            <Heading>Om Holidaze</Heading>
            <h2>Ideèn bak</h2>
            <p>
              Bergen har endelig fått sin egen Airbnb! Markedet for utleie vokser stadig, og etterspørselen etter å kunne leie steder for ferie eller forretning øker. Vi så at markedet trengte en side
              som samlet gode steder for overnatting for bruker og utleie for innehaver. Vi knytter sammen utleier og bruker.{" "}
            </p>
            <h2>Vår visjon</h2>
            <p>
              Vår visjon er å gjøre det enklere for hus og hotelleiere i Bergen å finne hverandre. Vi står foran en turistbølge uten like, og Holidaze har som mål å ta en stor bit av denne kaken. Vi
              er allerede den raskest voksende platformen i Bergensområde for overnatting, etter en kåring fra Bergen mål og mening.
            </p>
            <h2>Kontakt informasjon</h2>
            <p>Telefon: 55546755</p>
            <p>Email: kunde@holidaze.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
