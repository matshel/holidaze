import Link from "next/link";
import styles from "../../styles/components/AdminLinks.module.css";

export default function AdminLinks() {
  return (
    <>
      <div className={styles.container}>
        <Link href="/admin/messages" className={styles.links}>
          Kontakt meldinger
        </Link>
        <Link href="/admin/enquiries" className={styles.links}>
          Bookinger / Henvendelser
        </Link>
        <Link href="/admin/accomodation" className={styles.links}>
          Legg til nytt sted
        </Link>
      </div>
    </>
  );
}
