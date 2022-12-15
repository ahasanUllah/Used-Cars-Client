import React from 'react';
import Adviertised from './Adviertised';
import HomeBanner from './HomeBanner';
import HomeFeature from './HomeFeature';

const Home = () => {
   return (
      <div className="">
         <HomeBanner></HomeBanner>
         <Adviertised></Adviertised>
         <HomeFeature></HomeFeature>
      </div>
   );
};

export default Home;
