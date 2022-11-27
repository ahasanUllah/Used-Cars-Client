import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import CategoryCards from '../Category/CategoryCards';

const Adviertised = () => {
   const { data: advertised } = useQuery(['advertised'], () => {
      return axios('http://localhost:5000/cars/advertised').then((data) => data.data);
   });
   console.log(advertised);

   return (
      <div className="my-12">
         <div className="grid grid-cols-3 gap-4">
            {advertised.map((car) => (
               <CategoryCards key={car._id} car={car}></CategoryCards>
            ))}
         </div>
      </div>
   );
};

export default Adviertised;
