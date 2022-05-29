import React from "react";
import Link from "next/link";
import styles from "../../styles/components/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faAmbulance, faAnchor, faFacebookF } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.innerContainer}>
        <div>Holidaze</div>
        <p>Takk for at du besøker Holidaze! Vi her hos Holidaze gleder oss til å hjelpe deg til å finne ditt neste overnattings sted</p>
        <div className={styles.socials}>
          <Link href="http://instagram.com">
            <a>
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 24, color: "black" }} />
            </a>
          </Link>
          <Link href="http://twitter.com">
            <a>
              <FontAwesomeIcon icon={faTwitter} style={{ fontSize: 24, color: "black" }} />
            </a>
          </Link>
          <Link href="http://facebook.com">
            <a>
              <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 24, color: "black" }} />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
