import React from "react";
import Image from "next/image";
import styles from "../../styles/components/ContactHero.module.css";

export default function ContactHero() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <Image src="https://cdn.pixabay.com/photo/2014/05/06/21/44/karl-hagen-339247_960_720.jpg" alt="hero-image" layout="responsive" className={styles.image} width={2} height={1}></Image>
        </div>
      </div>
    </>
  );
}
