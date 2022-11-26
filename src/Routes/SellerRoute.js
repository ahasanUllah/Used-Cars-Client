import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Spinner from '../Pages/Shared/Spinner';

const SellerRoute = ({ children }) => {
   const { user, loader } = useContext(AuthContext);
   const [isSeller, isSellerLoading] = useAdmin(user.email);
   const location = useLocation();

   if (loader || isSellerLoading) {
      return <Spinner></Spinner>;
   }

   if (user?.uid && isSeller) {
      return children;
   }

   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
