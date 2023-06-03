import Link from "next/link";
import Image from "next/image";
import styles from "../styles/LogoGrid.module.css";
import {
  Container,
  Button,
  Col,
  Row,
  ControlLabel,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import defaultProductData from "../public/data/dummy-product.json";

const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

const NewArrivalGrid = () => {
  const [logos, setLogos] = useState([]);

  useEffect(async () => {
     getLogos(setLogos);
  }, []);

  return logos.length == 0 ? (
    <div>Cannot Get Best Seller Items</div>
  ) : (
    <Container className={styles.logoGridContainer}>
      <Row className={styles.row}>
        {logos.map((product, index) => {
          return (
            <Col
              key={index}
              xs={12}
              sm={12}
              md={6}
              lg={3}
              className={styles.logoCol}
            >
            <Link href={`/product/${product.id}/`}>
            <div className={styles.truck_logo_div}>
            <div className={styles.logoImage_div}>
              <img alt="Logo" src={product.linkImage} className={styles.logoImage}></img>
            </div>
              <div className={styles.orderLogoButton_div}>
                <p>{product.name}</p>
                <Button size="sm" className={styles.orderLogoButton}>
                  Cek Barang
                </Button>
              </div>
            </div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default NewArrivalGrid;

const getLogos = (setLogos) => {
  if (!domain) {
    const NEW_ARRIVAL_COUNT = 8;
    const newArrivalProducts = defaultProductData.filter((product) => product.isNew).slice(0,NEW_ARRIVAL_COUNT);
    setLogos(newArrivalProducts);
  } else {

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    
    const logos_url = domain + "truck-signs/truck-logo-list/";
    axios
    .get(logos_url, config)
    .then(async (res) => {
      const result = await res.data;
      setLogos(result);
    })
    .catch((error) => {
      console.log(error);
      setLogos(defaultData);
    });
  }
};
