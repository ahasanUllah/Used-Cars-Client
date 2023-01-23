import React from 'react';
import Adviertised from './Adviertised';
import AllCars from './AllCars';
import BrowseByBrand from './BrowseByBrand';
import HomeBanner from './HomeBanner';
import HomeBannerAlt from './HomeBannerAlt';
import HomeFeature from './HomeFeature';

const Home = () => {
   return (
      <div className=" mx-auto">
         <HomeBannerAlt></HomeBannerAlt>

         <Adviertised></Adviertised>
         <BrowseByBrand></BrowseByBrand>
         <HomeFeature></HomeFeature>
         <AllCars></AllCars>
      </div>
   );
};

export default Home;
