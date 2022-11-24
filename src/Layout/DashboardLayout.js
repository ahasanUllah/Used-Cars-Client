import React from 'react';
import Navbar from '../Pages/Shared/Navbar';

const DashboardLayout = () => {
   return (
      <>
         <Navbar></Navbar>
         <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
               {/* <!-- Page content here --> */}
               content
            </div>
            <div className="drawer-side">
               <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
               <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                  {/* <!-- Sidebar content here --> */}
                  <li>
                     <a>Sidebar Item 1</a>
                  </li>
                  <li>
                     <a>Sidebar Item 2</a>
                  </li>
               </ul>
            </div>
         </div>
      </>
   );
};

export default DashboardLayout;
