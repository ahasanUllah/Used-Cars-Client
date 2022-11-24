import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCards from './CategoryCards';

const Category = () => {
   const cars = useLoaderData();
   console.log(cars);

   return (
      <div className="grid grid-cols-3">
         {cars.map((car) => (
            <CategoryCards key={car._id} car={car}></CategoryCards>
         ))}
      </div>
   );
};

export default Category;
