import React from 'react';
import Adviertised from './Adviertised';
import AllCars from './AllCars';
import BrowseByBrand from './BrowseByBrand';
import HomeBanner from './HomeBanner';
import HomeFeature from './HomeFeature';

const Home = () => {
   return (
      <div className="w-5/6 mx-auto">
         <HomeBanner></HomeBanner>
         <Adviertised></Adviertised>
         <BrowseByBrand></BrowseByBrand>
         <HomeFeature></HomeFeature>
         <AllCars></AllCars>
      </div>
   );
};

export default Home;
