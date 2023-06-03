import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import truckLogo from "../public/logos/baswara-logo.png";

import {
  Navbar,
  Container
} from "react-bootstrap";

const NextNavbar = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">

    <Navbar
      bg="light"
      variant="light"
      className={styles.navbar}
      >
      <Container>

        <Navbar.Brand
          className={`navbar-brand ${styles.smallBrand}`}
          href="/"
          >
          {/* Truck Sings */}
          <Image
            src={truckLogo}
            alt="Logo not available"
            height="110px"
            width="110px"
            className={styles.brand_img}
            />
        </Navbar.Brand>
      </Container>
    </Navbar>
    </div>
  );
};

export default NextNavbar;
