import React from 'react';
import CategoryHomeCards from '../../Components/CategoryHomeCards';
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
         <CategoryHomeCards></CategoryHomeCards>
      </div>
   );
};

export default Home;
