import React from "react";
import Image from "next/image";
import styles from "../../styles/components/PlacesHero.module.css";

export default function PlacesHero() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <Image src="https://cdn.pixabay.com/photo/2015/11/06/11/45/interior-1026452_960_720.jpg" alt="hero-image" layout="responsive" className={styles.image} width={2} height={1}></Image>
        </div>
      </div>
    </>
  );
}
