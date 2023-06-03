import Link from "next/link";
import Image from "next/image";
import styles from "../styles/LogoGrid.module.css";
import {
  Container,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import router from "next/router";
import defaultProductData from "../public/data/dummy-product.json"

const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

const ProductByCategoryGrid = (id) => {
  const [productList, setProductList] = useState(null);

  useEffect(async () => {
    if (id) {
      getProductsByCategory(setProductList, parseInt(id.id));
    }
  }, [id]);

  return productList == null ? (
    <div>Not Found</div>
  ) : (
    <div>
    <Container className={styles.logoGridContainer}>
      <Row className={styles.row}>
        {productList.map((product, index) => {
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
              <img alt="Truck Sign Vinyl Logo" src={product.linkImage} className={styles.logoImage}></img>
            </div>
            <div>
              <h4 className="text-center">{product.name}</h4>
            </div>
            <div className={styles.orderLogoButton_div}>
              <Button size="sm" className={styles.orderLogoButton}>
                Pesan
              </Button>
            </div>
            </div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
    </div>
  );
};

export default ProductByCategoryGrid;

const getProductsByCategory = (setProductList, categoryId) => {
  if (!domain) {
    const filteredProductByCategory = defaultProductData.filter((product) => product.categoryId === categoryId);
    setProductList(filteredProductByCategory);
  } else {
    const config = {
      headers: {
      "Content-Type": "application/json",
    },
  };      
      const productListDataSource = domain + "truck-signs/truck-logo-list/";
      axios
      .get(productListDataSource, config)
      .then(async (res) => {
        const result = await res.data;
        setProductList(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
