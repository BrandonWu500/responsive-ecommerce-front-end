import styles from './home.module.css';
import Navbar from '../../components/navbar/Navbar';
import Categories from '../../components/Categories';
import Slider from '../../components/Slider';
import Products from '../../components/Products';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}
