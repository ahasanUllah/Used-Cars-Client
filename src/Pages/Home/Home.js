import React from 'react';
import Adviertised from './Adviertised';
import AllCars from './AllCars';
import BrowseByBrand from './BrowseByBrand';
import HomeBannerAlt from './HomeBannerAlt';

const Home = () => {
   return (
      <div className=" mx-auto">
         <HomeBannerAlt></HomeBannerAlt>

         <Adviertised></Adviertised>
         <BrowseByBrand></BrowseByBrand>

         <AllCars></AllCars>
      </div>
   );
};

export default Home;
