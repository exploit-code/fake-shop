import styles from "./footer.module.scss";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <span className={styles.footer__copyright}>
        © {currentYear} @bug_dev
      </span>
      <div className={styles.footer__group}>
        <Link
          to={"https://t.me/bug_dev"}
          target="_blank"
          className={styles.footer__link}
        >
          <FaTelegramPlane className={styles.footer__icon} />
        </Link>
        <Link
          to={"https://github.com/exploit-code"}
          target="_blank"
          className={styles.footer__link}
        >
          <AiFillGithub className={styles.footer__icon} />
        </Link>
      </div>
    </footer>
  );
};
