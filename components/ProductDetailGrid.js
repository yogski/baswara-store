import Link from "next/link";
import Image from "next/image";
import styles from "../styles/LogoGrid.module.css";
import {
  Container,
  Button,
  Badge,
  Row,
  ListGroup,
  Card,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import router from "next/router";
import defaultProductData from "../public/data/dummy-product.json"
import ButtonTokopedia from "./ButtonTokopedia";
import ButtonShopee from "./ButtonShopee";
import ButtonWhatsapp from "./ButtonWhatsapp";
import CardProductDetail from "./CardProductDetail";

const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

const ProductDetailGrid = (id) => {
  const [productInfo, setProductInfo] = useState(null);

  useEffect(async () => {
    if (id) {
      getProductsByCategory(setProductInfo, parseInt(id.id));
    }
  }, [id]);

  return productInfo === null ? (
    <div>Not Found</div>
  ) : (
    <Container className={styles.logoGridContainer}>
      <CardProductDetail>
        <Card.Body>
          <Card.Title>{productInfo.name}</Card.Title>
          <Card.Img className="px-3" variant="top" src={productInfo.linkImage} />

          
          <Card.Text>
            <p className={productInfo.isAvailable ? "palette-text-1" : "text-muted"}>
              {productInfo.isAvailable ? "Produk Ini Tersedia" : "Maaf, Produk Habis"}
            </p>
            <p>{productInfo.description}</p>
          </Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <ButtonShopee url={productInfo.linkShopee}>Cek Shopee</ButtonShopee>
            </ListGroup.Item>
            <ListGroup.Item>
              <ButtonTokopedia url={productInfo.linkTokopedia}>Cek Tokopedia</ButtonTokopedia>
            </ListGroup.Item>
            <ListGroup.Item>
              <ButtonWhatsapp url={productInfo.linkWhatsapp}>Cek Whatsapp</ButtonWhatsapp>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </CardProductDetail>
    </Container>
  );
};

export default ProductDetailGrid;

const getProductsByCategory = (setProductInfo, productId) => {
  if (!domain) {
    const selectedProduct = defaultProductData.filter((product) => product.id === productId);
    setProductInfo(selectedProduct[0]);
  } else {
    const config = {
      headers: {
      "Content-Type": "application/json",
    },
  };      
      const productInfoDataSource = domain + "truck-signs/truck-logo-list/";
      axios
      .get(productInfoDataSource, config)
      .then(async (res) => {
        const result = await res.data;
        setProductInfo(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
