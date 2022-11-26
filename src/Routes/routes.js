import DashboardLayout from '../Layout/DashboardLayout';
import Main from '../Layout/Main';
import Category from '../Pages/Category/Category';
import AddAProduct from '../Pages/Dashboard/AddAProduct';
import AllBuyers from '../Pages/Dashboard/AllBuyers';
import AllSeller from '../Pages/Dashboard/AllSeller';
import MyBookings from '../Pages/Dashboard/MyBookings';
import MyProduct from '../Pages/Dashboard/MyProduct';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import PrivateRoute from './PrivateRoute';

const { createBrowserRouter } = require('react-router-dom');

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
         },
         {
            path: '/category/:id',
            element: <Category></Category>,
            loader: async ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
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
      children: [
         {
            path: '/dashboard/addproduct',
            element: <AddAProduct></AddAProduct>,
         },
         {
            path: '/dashboard/my-product',
            element: (
               <PrivateRoute>
                  <MyProduct></MyProduct>
               </PrivateRoute>
            ),
         },
         {
            path: '/dashboard/my-bookings',
            element: (
               <PrivateRoute>
                  <MyBookings></MyBookings>
               </PrivateRoute>
            ),
         },
         {
            path: '/dashboard/all-seller',
            element: (
               <PrivateRoute>
                  <AllSeller></AllSeller>
               </PrivateRoute>
            ),
         },
         {
            path: '/dashboard/all-buyer',
            element: (
               <PrivateRoute>
                  <AllBuyers></AllBuyers>
               </PrivateRoute>
            ),
         },
      ],
   },
]);
