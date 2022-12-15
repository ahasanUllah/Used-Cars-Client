import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import CategoryCards from '../Category/CategoryCards';
import Spinner from '../Shared/Spinner';

const AllCars = () => {
   const {
      data: allCars,
      isLoading,
      isError,
   } = useQuery(['allCars'], async () => {
      return axios('https://carsale-server.vercel.app/availableCars').then((data) => data.data);
   });
   if (isLoading) {
      return <Spinner></Spinner>;
   }
   if (isError) {
      return <div>Cannot fetch data</div>;
   }
   console.log(allCars);
   return (
      <div>
         <div>
            <div className="p-6 py-12 bg-red-600 text-gray-50">
               <div className="container mx-auto">
                  <div className="flex flex-col lg:flex-row items-center justify-between">
                     <h2 className="text-center text-4xl tracking-tighter font-bold">
                        All <span> </span>
                        <br className="sm:hidden" />
                        Cars
                     </h2>
                  </div>
               </div>
            </div>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {allCars.map((car) => (
               <CategoryCards key={car._id} car={car}></CategoryCards>
            ))}
         </div>
      </div>
   );
};

export default AllCars;
