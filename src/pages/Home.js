import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';
import Guarantee from '../components/Guarantee/Guarantee';
import Product from '../components/Product/Product';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div className="home">
      <Header />
      <Carousel />
      <Guarantee />
      <Product />
      <Footer />
    </div>
  );
}

export default Home;
