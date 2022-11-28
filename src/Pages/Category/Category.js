import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import Spinner from '../Shared/Spinner';
import CategoryCards from './CategoryCards';

const Category = () => {
   // const [singlecategory, setSingleCategory] = useState({});
   const cars = useLoaderData();

   const { id } = useParams();

   const { data, isLoading } = useQuery(['categories'], () => {
      return axios(`http://localhost:5000/category/single/${id}`).then((data) => data.data);
   });

   if (isLoading) {
      return <Spinner></Spinner>;
   }
   console.log(data);

   return (
      <div className="space-y-8 mt-12">
         <h2 className="text-2xl font-semibold text-center">{data.name} Cars up for sale</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cars.map((car) => (
               <CategoryCards key={car._id} car={car}></CategoryCards>
            ))}
         </div>
      </div>
   );
};

export default Category;
