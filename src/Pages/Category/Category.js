import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import SkeletonCard from '../Shared/SkeletonCard';
import Spinner from '../Shared/Spinner';
import CategoryCards from './CategoryCards';

const Category = () => {
   // const [singlecategory, setSingleCategory] = useState({});
   const cars = useLoaderData();

   const { id } = useParams();

   const { data, isLoading } = useQuery(['categories'], async () => {
      return axios(`${process.env.REACT_APP_serverLink}category/single/${id}`).then((data) => data.data);
   });

   if (isLoading) {
      return (
         <div className="space-y-8 my-20">
            <div className="w-1/4 h-6 rounded bg-gray-300 mx-auto"> </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
               {cars.map((car) => (
                  <SkeletonCard></SkeletonCard>
               ))}
            </div>
         </div>
      );
   }
   console.log(data);

   return (
      <div className="space-y-8 my-20">
         <h2 className="text-2xl font-semibold text-center">{data.name} Cars up for sale</h2>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {cars.map((car) => (
               <CategoryCards key={car._id} car={car}></CategoryCards>
            ))}
         </div>
      </div>
   );
};

export default Category;
