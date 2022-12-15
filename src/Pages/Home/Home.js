import React from 'react';
import Adviertised from './Adviertised';
import AllCars from './AllCars';
import HomeBanner from './HomeBanner';
import HomeFeature from './HomeFeature';

const Home = () => {
   return (
      <div className="">
         <HomeBanner></HomeBanner>
         <Adviertised></Adviertised>
         <HomeFeature></HomeFeature>
         <AllCars></AllCars>
      </div>
   );
};

export default Home;
