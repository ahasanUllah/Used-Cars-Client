import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Spinner from '../Pages/Shared/Spinner';

const AdminRoute = ({ children }) => {
   const { user, loader } = useContext(AuthContext);
   const [isAdmin, isAdminLoading] = useAdmin(user.email);
   const location = useLocation();

   if (loader || isAdminLoading) {
      return <Spinner></Spinner>;
   }

   if (user?.uid && isAdmin) {
      return children;
   }

   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
