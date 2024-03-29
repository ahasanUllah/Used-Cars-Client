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
      return axios(`${process.env.REACT_APP_serverLink}availableCars`).then((data) => data.data);
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
            <div className="p-6 py-12  text-gray-50 ">
               <div className="container mx-auto">
                  <div className="flex flex-col lg:flex-row items-center justify-center">
                     <h2 className="text-center text-gray-700 text-4xl tracking-tighter font-xl">
                        Latest from <span> </span>
                        <br className="sm:hidden" />
                        Us
                     </h2>
                  </div>
               </div>
            </div>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {allCars.map((car) => (
               <CategoryCards key={car._id} car={car}></CategoryCards>
            ))}
         </div>
      </div>
   );
};

export default AllCars;
