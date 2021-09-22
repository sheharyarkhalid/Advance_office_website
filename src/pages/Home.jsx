import React from 'react';
import Footer from '../component/footer_component/Footer';
import Header from '../component/header_component/Header';
import HomeBanner from '../component/home_banner/HomeBanner';
import OurProduct from '../component/OurProduct/OurProduct';

const Home = () => {
    return (
        <>
          <Header />
          <HomeBanner />
          <OurProduct />
         <Footer />
       </>  
    )
}

export default Home
