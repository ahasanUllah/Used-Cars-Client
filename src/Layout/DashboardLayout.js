import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Navbar from '../Pages/Shared/Navbar';

const DashboardLayout = () => {
   const { user } = useContext(AuthContext);
   return (
      <div className="container mx-auto">
         <Navbar></Navbar>
         <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
               {/* <!-- Page content here --> */}
               <Outlet></Outlet>
            </div>
            <div className="drawer-side">
               <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
               <ul className="menu p-4 w-80  text-base-content">
                  {/* <!-- Sidebar content here --> */}
                  <div className="h-full p-3 space-y-2 w-60   text-gray-800">
                     <div className="flex items-center p-2 space-x-4">
                        {/* <img
                           src="https://source.unsplash.com/100x100/?portrait"
                           alt=""
                           className="w-12 h-12 rounded-full "
                        /> */}
                        <div>
                           <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                           <span className="flex items-center space-x-1">
                              <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-600">
                                 View profile
                              </a>
                           </span>
                        </div>
                     </div>
                     <div className="divide-y divide-gray-300">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                           <li className=" text-gray-900">
                              <Link
                                 rel="noopener noreferrer"
                                 to="/dashboard/addproduct"
                                 className="flex items-center p-2 space-x-3 rounded-md"
                              >
                                 <span>Add a Product</span>
                              </Link>
                           </li>
                           <li className=" text-gray-900">
                              <Link
                                 rel="noopener noreferrer"
                                 to="/dashboard/my-product"
                                 className="flex items-center p-2 space-x-3 rounded-md"
                              >
                                 <span>My Product</span>
                              </Link>
                           </li>
                           <li>
                              <a
                                 rel="noopener noreferrer"
                                 href="#"
                                 className="flex items-center p-2 space-x-3 rounded-md"
                              >
                                 <span>All User</span>
                              </a>
                           </li>

                           <li>
                              <a
                                 rel="noopener noreferrer"
                                 href="#"
                                 className="flex items-center p-2 space-x-3 rounded-md"
                              >
                                 <span>All seller</span>
                              </a>
                           </li>
                           <li>
                              <a
                                 rel="noopener noreferrer"
                                 href="#"
                                 className="flex items-center p-2 space-x-3 rounded-md"
                              >
                                 <span>All buyer</span>
                              </a>
                           </li>
                        </ul>
                        <ul className="pt-4 pb-2 space-y-1 text-sm">
                           <li>
                              <a
                                 rel="noopener noreferrer"
                                 href="#"
                                 className="flex items-center p-2 space-x-3 rounded-md"
                              >
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-5 h-5 fill-current text-gray-600"
                                 >
                                    <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                    <rect width="32" height="64" x="256" y="232"></rect>
                                 </svg>
                                 <span>Logout</span>
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default DashboardLayout;
