import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCards from '../Category/CategoryCards';

const Brand = () => {
   const brand = useLoaderData();
   console.log(brand);

   return (
      <div>
         {brand.length > 0 ? (
            <div className="space-y-8 m-16">
               <h2 className="text-2xl font-semibold text-center"> Cars up for sale</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {brand.map((car) => (
                     <CategoryCards key={car._id} car={car}></CategoryCards>
                  ))}
               </div>
            </div>
         ) : (
            <div className="h-screen -mt-16 flex justify-center items-center">
               <h2 className="text-xl">No Car available</h2>
            </div>
         )}
      </div>
   );
};

export default Brand;
