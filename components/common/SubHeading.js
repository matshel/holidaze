import PropTypes from "prop-types";
import styles from "../../styles/components/SubHeading.module.css";

export default function SubHeading() {
  return (
    <div className={styles.subHeaderContainer}>
      <h2>All våre steder</h2>
      <p>Alle være steder er blitt kvalitets godkjent av tredjepart!</p>
    </div>
  );
}
