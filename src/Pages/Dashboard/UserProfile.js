import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const UserProfile = () => {
   const { user } = useContext(AuthContext);
   console.log(user);

   return (
      <div className="flex justify-center items-center h-[400px]">
         <h1 className="text-4xl">Welcome to Dashboard</h1>
      </div>
   );
};

export default UserProfile;
