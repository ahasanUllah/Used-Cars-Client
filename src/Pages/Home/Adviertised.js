import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import CategoryCards from '../Category/CategoryCards';
import Spinner from '../Shared/Spinner';

const Adviertised = () => {
   const {
      data: advertised,
      isLoading,
      isError,
   } = useQuery(['advertised'], async () => {
      return axios(`${process.env.REACT_APP_serverLink}cars/advertised`).then((data) => data.data);
   });
   if (isLoading) {
      return <Spinner></Spinner>;
   }
   if (isError) {
      return <div>Cannot fetch data</div>;
   }

   return (
      <div className="my-12">
         <div>
            <div className="p-6 py-12  text-gray-50 ">
               <div className="container mx-auto">
                  <div className="flex flex-col lg:flex-row items-center justify-center">
                     <h2 className="text-center text-gray-700 text-4xl tracking-tighter font-xl">
                        Top <span> </span>
                        <br className="sm:hidden" />
                        Ads
                     </h2>
                  </div>
               </div>
            </div>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {advertised.map((car) => (
               <CategoryCards key={car._id} car={car}></CategoryCards>
            ))}
         </div>
      </div>
   );
};

export default Adviertised;
