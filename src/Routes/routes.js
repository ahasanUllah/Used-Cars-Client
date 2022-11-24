import DashboardLayout from '../Layout/DashboardLayout';
import Main from '../Layout/Main';
import Category from '../Pages/Category/Category';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';

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
            loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
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
      element: <DashboardLayout></DashboardLayout>,
   },
]);
