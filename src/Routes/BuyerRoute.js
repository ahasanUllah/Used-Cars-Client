import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

import useBuyer from '../hooks/useBuyer';
import Spinner from '../Pages/Shared/Spinner';

const BuyerRoute = ({ children }) => {
   const { user, loader } = useContext(AuthContext);
   const [isBuyer, isBuyerLoading] = useBuyer(user.email);
   const location = useLocation();

   if (loader || isBuyerLoading) {
      return <Spinner></Spinner>;
   }

   if (user?.uid && isBuyer) {
      return children;
   }

   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
