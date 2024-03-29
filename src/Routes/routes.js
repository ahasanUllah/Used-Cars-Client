import DashboardLayout from '../Layout/DashboardLayout';
import Main from '../Layout/Main';
import Blog from '../Pages/Blog/Blog';
import Brand from '../Pages/Brand/Brand';
import Cars from '../Pages/Cars/Cars';
import Category from '../Pages/Category/Category';
import ContactUs from '../Pages/ContactUs/ContactUs';
import AddAProduct from '../Pages/Dashboard/AddAProduct';
import AllBuyers from '../Pages/Dashboard/AllBuyers';
import AllSeller from '../Pages/Dashboard/AllSeller';
import MyBookings from '../Pages/Dashboard/MyBookings';
import MyProduct from '../Pages/Dashboard/MyProduct';
import Payment from '../Pages/Dashboard/Payment/Payment';
import UserProfile from '../Pages/Dashboard/UserProfile';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import Search from '../Pages/Search/Search';
import ErrorPage from '../Pages/Shared/ErrorPage';
import AdminRoute from './AdminRoute';
import BuyerRoute from './BuyerRoute';
import PrivateRoute from './PrivateRoute';
import SellerRoute from './SellerRoute';

const { createBrowserRouter } = require('react-router-dom');

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
         },
         {
            path: '/blog',
            element: <Blog></Blog>,
         },
         {
            path: '/search',
            element: <Search></Search>,
         },
         {
            path: '/cars',
            element: <Cars></Cars>,
         },
         {
            path: '/contact',
            element: <ContactUs></ContactUs>,
         },
         {
            path: '/category/:id',
            element: <Category></Category>,
            loader: async ({ params }) => fetch(`${process.env.REACT_APP_serverLink}category/${params.id}`),
         },
         {
            path: '/brand/:id',
            element: <Brand></Brand>,
            loader: async ({ params }) => fetch(`${process.env.REACT_APP_serverLink}brand/${params.id}`),
         },
         {
            path: '/login',
            element: <Login></Login>,
         },
         {
            path: '/register',
            element: <Register></Register>,
         },
      ],
   },
   {
      path: '/dashboard',
      element: (
         <PrivateRoute>
            <DashboardLayout></DashboardLayout>
         </PrivateRoute>
      ),
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: '/dashboard',
            element: (
               <PrivateRoute>
                  <UserProfile></UserProfile>
               </PrivateRoute>
            ),
         },
         {
            path: '/dashboard/addproduct',
            element: (
               <PrivateRoute>
                  <SellerRoute>
                     <AddAProduct></AddAProduct>
                  </SellerRoute>
               </PrivateRoute>
            ),
         },
         {
            path: '/dashboard/my-product',
            element: (
               <PrivateRoute>
                  <SellerRoute>
                     <MyProduct></MyProduct>
                  </SellerRoute>
               </PrivateRoute>
            ),
         },
         {
            path: '/dashboard/my-bookings',
            element: (
               <PrivateRoute>
                  <BuyerRoute>
                     <MyBookings></MyBookings>
                  </BuyerRoute>
               </PrivateRoute>
            ),
         },
         {
            path: '/dashboard/payment/:id',
            element: (
               <PrivateRoute>
                  <BuyerRoute>
                     <Payment></Payment>
                  </BuyerRoute>
               </PrivateRoute>
            ),
            loader: ({ params }) => fetch(`${process.env.REACT_APP_serverLink}booking/${params.id}`),
         },
         {
            path: '/dashboard/all-seller',
            element: (
               <PrivateRoute>
                  <AdminRoute>
                     <AllSeller></AllSeller>
                  </AdminRoute>
               </PrivateRoute>
            ),
         },
         {
            path: '/dashboard/all-buyer',
            element: (
               <PrivateRoute>
                  <AdminRoute>
                     <AllBuyers></AllBuyers>
                  </AdminRoute>
               </PrivateRoute>
            ),
         },
      ],
   },
]);
