import Link from "next/link";
import styles from "../styles/Footer.module.css";
import {
  Container,
  Row,
} from "react-bootstrap";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
        <Row className={styles.footerWrapper}>
      <Container className={styles.footerWrapper}>
          <p className={styles.p}>
            Copyright &copy; 2023 Baswara Store All Rights Reserved
          </p>
          <Link href="/">
            <a className={styles.footerLink}>Privacy Policy</a>
          </Link>{" "}
          <Link href="/">
            <a className={styles.footerLink}>Terms</a>
          </Link>{" "}
      </Container>
        </Row>
        <Row className={styles.contactUsRow}>
          <Link href="/">
            <a className={styles.footerLink}>Kontak Kami</a>
          </Link>{" "}
        </Row>

        <Row className={styles.developer_row}>
          <p className={styles.p}>
            Developed by Yogi Saputro
          </p>
        </Row>
    </footer>
  );
};

export default Footer;
