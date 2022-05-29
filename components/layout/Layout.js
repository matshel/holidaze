import { AuthProvider } from "../../context/AuthContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../../styles/components/Layout.module.css";

export default function Layout({ children }) {
  return (
    <AuthProvider>
      <div className={styles.wrapper}>
        <Navbar />
        <div className="container">{children}</div>
      </div>
      <Footer />
    </AuthProvider>
  );
}
