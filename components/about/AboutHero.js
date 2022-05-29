import React from "react";
import Image from "next/image";
import styles from "../../styles/components/AboutHero.module.css";

export default function AboutHero() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <Image src="https://cdn.pixabay.com/photo/2017/04/28/22/16/room-2269594_960_720.jpg" alt="hero-image" layout="responsive" className={styles.image} width={2} height={1}></Image>
        </div>
      </div>
    </>
  );
}
