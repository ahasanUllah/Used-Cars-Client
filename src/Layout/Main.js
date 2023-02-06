import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Components/scrollToTop';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';
import NavbarAlt from '../Pages/Shared/NavbarAlt';

const Main = () => {
   return (
      <div className="container mx-auto">
         <NavbarAlt></NavbarAlt>
         <ScrollToTop />
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Main;
