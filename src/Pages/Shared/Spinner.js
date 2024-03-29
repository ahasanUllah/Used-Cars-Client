import React from 'react';

const Spinner = () => {
   return (
      <div>
         <div className="flex items-center justify-center min-h-screen space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse bg-green-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-green-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-green-600"></div>
         </div>
      </div>
   );
};

export default Spinner;
