import { useContext, useState } from "react";
import Link from "next/link";
import AuthContext from "../../context/AuthContext";
// import router from "next/router";
import styles from "../../styles/components/Navbar.module.css";
import { useRouter } from "next/router";

function Navbar() {
  const [auth, setAuth] = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function logout(e) {
    e.preventDefault();
    setAuth(null);
    router.push("/");
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navbarContainer}>
          <nav className={styles.navbar}>
            <Link href="/">
              <a className={styles.navLogo}>Holidaze</a>
            </Link>
            <ul className={isOpen === false ? styles.navMenu : styles.navMenu + " " + styles.active}>
              <li className={styles.navItem}>
                <Link href="/">
                  <a className={`${styles.navLink}, ${router.pathname == "/" ? styles.active : ""}`}>Hjem</a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/places">
                  <a className={`${styles.navLink}, ${router.pathname == "/places" ? styles.active : ""}`}>Steder</a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/about">
                  <a className={`${styles.navLink}, ${router.pathname == "/about" ? styles.active : ""}`}>Om oss</a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/contact">
                  <a className={`${styles.navLink}, ${router.pathname == "/contact" ? styles.active : ""}`}>Kontakt</a>
                </Link>
              </li>

              {auth ? (
                <>
                  <li className={styles.navItem}>
                    <Link href="/admin/admin">
                      <a className={`${styles.navLink}, ${router.pathname == "/admin/admin" ? styles.active : ""}`}>Admin</a>
                    </Link>{" "}
                    <Link href="/">
                      <a className={`${styles.navLink} ${styles.login}`} onClick={logout}>
                        Logg ut
                      </a>
                    </Link>
                  </li>
                </>
              ) : (
                <li className={styles.navItem}>
                  <Link href="/admin/login">
                    <a className={`${styles.navLink} ${styles.login}`}>Logg inn</a>
                  </Link>
                </li>
              )}
            </ul>

            <div className={isOpen === false ? styles.hamburger : styles.hamburger + " " + styles.active} onClick={() => setIsOpen(!isOpen)}>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
