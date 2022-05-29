import React from "react";
import Image from "next/image";
import styles from "../../styles/components/LoginHero.module.css";

export default function LoginHero() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <Image src="https://cdn.pixabay.com/photo/2016/10/13/09/06/luxury-villas-1737167_960_720.jpg" alt="hero-image" layout="responsive" className={styles.image} width={2} height={1}></Image>
        </div>
      </div>
    </>
  );
}
