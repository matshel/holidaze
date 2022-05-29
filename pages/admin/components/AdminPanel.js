import React from "react";
import AdminLinks from "../../../components/admin/AdminLinks";
import styles from "../../../styles/components/AdminPanel.module.css";
import Heading from "../../../components/common/Heading";

export default function AdminPanel() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <div className={styles.test}>
            <Heading>Admin panel</Heading>
            <AdminLinks />
          </div>
        </div>
      </div>
    </>
  );
}
