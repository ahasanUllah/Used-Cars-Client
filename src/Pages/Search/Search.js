import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import CategoryCards from '../Category/CategoryCards';
import SkeletonCard from '../Shared/SkeletonCard';

const Search = () => {
   const searchParams = new URLSearchParams(document.location.search);
   const type = searchParams.get('type');
   const make = searchParams.get('make');
   const from = searchParams.get('from');
   const to = searchParams.get('to');

   const {
      data: cars = [],
      isLoading,
      isError,
   } = useQuery(['cars'], () => {
      return axios(`${process.env.REACT_APP_serverLink}search?type=${type}&make=${make}&from=${from}&to=${to}`).then(
         (data) => data.data
      );
   });
   if (isLoading) {
      return (
         <div className="space-y-8 my-20">
            <div className="w-1/4 h-6 rounded bg-gray-300 mx-auto"> </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
               <SkeletonCard></SkeletonCard>
               <SkeletonCard></SkeletonCard>
               <SkeletonCard></SkeletonCard>
            </div>
         </div>
      );
   }
   if (isError) {
      return (
         <div>
            <h1>No cars available</h1>
         </div>
      );
   }
   console.log(cars);

   return (
      <div>
         {cars.length > 0 ? (
            <div className="space-y-8 my-20">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                  {cars.map((car) => (
                     <CategoryCards key={car._id} car={car}></CategoryCards>
                  ))}
               </div>
            </div>
         ) : (
            <div className="h-[80vh] flex justify-center items-center">
               <h1 className="text-lg">No cars available</h1>
            </div>
         )}
      </div>
   );
};

export default Search;
