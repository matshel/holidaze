import React from "react";
import styles from "../../styles/components/FeaturedHeader.module.css";
import Link from "next/link";

function FeaturedHeader() {
  return (
    <div className={styles.featuredHeaderContainer}>
      <h2>Mest Polulære</h2>
      <div className={styles.featuredInfo}>
        <p>Våre mest populære overnattinger holder en høy standard</p>

        <Link href="/places">
          <a className={styles.viewAll}>Se alle</a>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedHeader;
