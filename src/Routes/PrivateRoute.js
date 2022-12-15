import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Spinner from '../Pages/Shared/Spinner';

const PrivateRoute = ({ children }) => {
   const { user, loader } = useContext(AuthContext);
   const location = useLocation();

   if (loader) {
      return <Spinner></Spinner>;
   }

   if (user?.uid) {
      return children;
   }

   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
