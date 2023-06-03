import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';
import styles from "../styles/CategoryGrid.module.css";
import {
  Container,
  Col,
  Row,
  Card
} from "react-bootstrap";
import defaultCategories from "../public/data/dummy-category.json"
import { useState, useEffect } from "react";
import axios from "axios";
import router from "next/router";

const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

const CategoryGrid = () => {
  const [categories, setCategories] = useState(null);

  useEffect(async () => {
    await getCategories(setCategories);
  }, []);

  return categories == null ? (
    <div>
      <p>Tidak Ada Kategori Ditemukan</p>
    </div>
  ) : (
    <Container className={styles.productGridContainer}>
      <Row className={styles.row}>
        {categories.map((category, index) => {
          return (
            <Col
              key={index}
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={3}
              className={styles.productCol}
            >
              <Link href={`/category/${category.id}/`}>
                <Card className={styles.categoryCard}>
                  <Card.Body>
                    <h3 className="text-center">{category.name}</h3>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CategoryGrid;

const getCategories = (setCategories) => {
  if (!domain) {
    setCategories(defaultCategories); 
  } else {

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    
    const categories_url = domain + "truck-signs/categories/";
    axios
    .get(categories_url, config)
    .then(async (res) => {
      const result = await res.data;
      setCategories(result);
    })
    .catch((error) => {
      console.log(error);
    });
  }
};
