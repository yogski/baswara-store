import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from "../styles/HomePage.module.css";
import {
  Container,
  Form,
  FormControl,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import ButtonPalettePrimary from './ButtonPalettePrimary';
import CategoryGrid from './CategoryGrid';
import BestSellerGrid from './BestSellerGrid';
import NewArrivalGrid from './NewArrivalGrid';

const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const router = useRouter();

  useEffect(async () => {

  }, []);

  const handleSearch = () => {
    router.push('/search/[query]', `/search/${searchQuery}`); // Replace "123" with the desired postId
  };

  return (
    <>
      <svg width="100%" height="10%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,100 0,100 C 192.53333333333336,116.80000000000001 385.0666666666667,133.60000000000002 548,128 C 710.9333333333333,122.39999999999999 844.2666666666667,94.39999999999999 988,86 C 1131.7333333333333,77.60000000000001 1285.8666666666668,88.80000000000001 1440,100 C 1440,100 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#e57f55" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,400 C 0,400 0,200 0,200 C 146.2666666666667,190.53333333333333 292.5333333333334,181.06666666666666 447,189 C 601.4666666666666,196.93333333333334 764.1333333333332,222.26666666666665 931,227 C 1097.8666666666668,231.73333333333335 1268.9333333333334,215.86666666666667 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#e57f55" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><path d="M 0,400 C 0,400 0,300 0,300 C 182.66666666666669,292.4 365.33333333333337,284.8 510,287 C 654.6666666666666,289.2 761.3333333333333,301.2 910,305 C 1058.6666666666667,308.8 1249.3333333333335,304.4 1440,300 C 1440,300 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#e57f55" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2"></path></svg>
      <Container fluid className={styles.titleContainer}>
        <h1 className={styles.titleStoreMain}>Baswara Store</h1>
        <h2 className='text-center palette-font'>Aesthetics for your well-being</h2>
        <Form className="d-flex px-lg-5">
          <FormControl
            type="text"
            placeholder="barang apa yang ingin kamu cari?"
            className="mr-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <ButtonPalettePrimary 
            className='palette-color-1 px-2'
            onClick={handleSearch}
          >
            <FontAwesomeIcon icon={faSearch} size='xs'/>
            Cari
          </ButtonPalettePrimary>
        </Form>
        <p>{searchQuery}</p>
      </Container>
      <svg width="100%" height="10%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,100 0,100 C 202.66666666666663,105.19999999999999 405.33333333333326,110.39999999999999 556,113 C 706.6666666666667,115.60000000000001 805.3333333333335,115.6 944,113 C 1082.6666666666665,110.4 1261.3333333333333,105.2 1440,100 C 1440,100 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#e57f55" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path><path d="M 0,400 C 0,400 0,200 0,200 C 128.93333333333334,218.26666666666665 257.8666666666667,236.53333333333333 438,228 C 618.1333333333333,219.46666666666667 849.4666666666667,184.13333333333335 1025,175 C 1200.5333333333333,165.86666666666665 1320.2666666666667,182.93333333333334 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#e57f55" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path><path d="M 0,400 C 0,400 0,300 0,300 C 206.66666666666669,314.26666666666665 413.33333333333337,328.53333333333336 566,334 C 718.6666666666666,339.46666666666664 817.3333333333333,336.1333333333333 954,329 C 1090.6666666666667,321.8666666666667 1265.3333333333335,310.93333333333334 1440,300 C 1440,300 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#e57f55" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 200)"></path></svg>

      <div className={styles.bannerContainer}>
        <h1 className={styles.banner}>
          Category
        </h1>
      </div>

      <CategoryGrid />

      <div className={styles.bannerContainer}>
        <h1 className={styles.banner}>
          New Arrival
        </h1>
      </div>

      <NewArrivalGrid className="my-2" />

      <div className={styles.bannerContainer}>
        <h1 className={styles.banner}>
          Best Seller
        </h1>
      </div>

      {/* separata component for displaying products */}
      <BestSellerGrid className="py-2 my-2"/>

    </>
  );
};

export default HomePage;