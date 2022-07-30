import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <BsFacebook />
        </li>
        <li>
          <BsInstagram />
        </li>
        <li>
          <BsLinkedin />
        </li>
      </ul>
      <p className={styles.copy_right}>
        {" "}
        <span> Costs</span>&copy;2022
      </p>
    </footer>
  );
}

export default Footer;
