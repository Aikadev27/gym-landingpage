import clsx from 'clsx';
import app from '../src/app.module.css';
import color from './styles/color.module.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import Ship from './Components/Ship';
import Explore from './Components/Explore';
import Category from './Components/Category';
import ProductList from './Components/ProductList';
import CateBar from './Components/CateBar';
import Letter from './Components/Letter';
// letter img
import aboutUs from './assets/images/letter/aboutUs.png';
import whyChoose from './assets/images/letter/whychoose.png';
// product
import {
  newProduct,
  trendingProduct,
  popularProduct,
  categoryList,
  facilitiesList,
} from './constants/product';

function App() {
  return (
    <main className={clsx(color.primaryColor, app.height)}>
      <div className={clsx(app.paddingBody)}>
        <Header />
      </div>
      <section>
        <Banner />
      </section>
      <section className={clsx(app.shipPos)}>
        <Ship />
      </section>
      <section className={clsx(app.paddingBody)}>
        <h1 className={clsx(app.headText)}>
          Explore Our Dynamic Training Programs
        </h1>
        <Explore />
      </section>
      <section className={clsx(app.paddingBody)}>
        <CateBar categoryText="CATEGORY" />
        <Category blueCardList={categoryList} />
      </section>
      <section className={clsx(app.paddingBody)}>
        <CateBar categoryText="NEW PRODUCT" />

        <ProductList productInfo={newProduct} />
      </section>
      <section className={clsx(app.paddingBody)}>
        <CateBar categoryText="TREJDING PRODUCT" />
        <ProductList productInfo={trendingProduct} />
      </section>
      <section className={clsx(app.paddingBody)}>
        <CateBar categoryText="POPULAR PRODUCT" />
        <ProductList productInfo={popularProduct} />
      </section>
      <section className={clsx(app.paddingBody, app.marginY)}>
        <Letter image={aboutUs} name={'about us'} isReverse={false} />
      </section>
      <section className={clsx(app.paddingBody, app.marginY)}>
        <Letter image={whyChoose} name={'about us'} isReverse={true} />
      </section>
      <section className={clsx(app.paddingBody, app.marginY)}>
        <CateBar categoryText="FACILITIES" />
        <Category blueCardList={facilitiesList} />
      </section>
      <Footer />
    </main>
  );
}

export default App;
