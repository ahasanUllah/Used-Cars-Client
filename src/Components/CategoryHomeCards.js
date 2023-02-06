import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Pages/Shared/Spinner';

const CategoryHomeCards = () => {
   const {
      data: category = [],
      isLoading,
      isError,
      refetch,
   } = useQuery(
      ['category'],
      async () => {
         return await axios(`${process.env.REACT_APP_serverLink}category`).then((data) => data.data);
      },
      {
         refetchOnWindowFocus: true,
      }
   );

   if (isLoading) {
      return <Spinner></Spinner>;
   }
   if (isError) {
      return <h2>Cannot fetch data</h2>;
   }
   console.log(category);
   return (
      <div className="my-24">
         <div className="border border-gray-300 px-8 py-8  ">
            <h1 className="text-3xl text-center ">Browse By Category</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-6 my-11 ml-8 ">
               {category.map((cat) => (
                  <Link
                     to={`/category/${cat._id}`}
                     key={cat._id}
                     className="border border-gray-300 flex flex-col justify-center items-center p-5 w-52 h-36"
                  >
                     <img src={cat.image} className="w-full h-24" alt="" />
                     <h2 className="text-xl">{cat.name}</h2>
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
};

export default CategoryHomeCards;
