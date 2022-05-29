import React from "react";
import styles from "../../styles/components/Us.module.css";
import Image from "next/image";
import Link from "next/link";

function Us() {
  return (
    <div className={styles.usContainer}>
      <div className={styles.leftBox}>
        <div className={styles.usImageContainer}>
          <Image
            className={styles.usImage}
            src="/images/inner.jpg"
            // layout="responsive"

            width="600"
            height="500"
            alt="hotel"
          />
        </div>
      </div>

      <div className={styles.rightBox}>
        <h2 className={styles.usHeader}>Litt om oss</h2>
        <p>Bergen har endelig fått sin egen Airbnb!</p>
        <p className={styles.paragraph}>
          Markedet for utleie vokser stadig, og etterspørselen etter å kunne leie steder for ferie eller forretning øker. Vi så at markedet trengte en side som samlet gode steder for overnatting for
          bruker og utleie for innehaver. Vi knytter sammen utleier og bruker.{" "}
        </p>
        <Link href="/about">
          <a className={styles.more}>Lær mer</a>
        </Link>
      </div>
    </div>
  );
}

export default Us;
