import React from 'react';
import { Link } from 'react-router-dom';
import coupe3 from '../../assets/Coupe3.svg';
import convertible from '../../assets/Convertible.svg';
import electric from '../../assets/ElectricCar.svg';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../Shared/Spinner';

const HomeBanner = () => {
   const {
      data: category = [],
      isLoading,
      isError,
      refetch,
   } = useQuery(
      ['category'],
      async () => {
         return await axios('https://carsale-server.vercel.app/category').then((data) => data.data);
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

   return (
      <div>
         <div className="mb-16">
            <div className="bg-gray-200">
               <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                  <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                     <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-red-600">
                           Used
                        </p>
                     </div>
                     <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                           <svg
                              viewBox="0 0 52 24"
                              fill="currentColor"
                              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                           >
                              <defs>
                                 <pattern
                                    id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                 >
                                    <circle cx="1" cy="1" r=".7" />
                                 </pattern>
                              </defs>
                              <rect fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)" width="52" height="24" />
                           </svg>
                           <span className="relative">Find</span>
                        </span>{' '}
                        Your next car with us
                     </h2>
                     <p className="text-base text-gray-700 md:text-lg">
                        Leading online automotive marketplace in Bangladesh
                     </p>
                  </div>
                  <div className="flex items-center sm:justify-center">
                     <Link to="/register">
                        <button
                           type="submit"
                           className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                           Get started
                        </button>
                     </Link>
                     <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                     >
                        Learn more
                     </a>
                  </div>
               </div>
            </div>
            <div className="relative px-4 sm:px-0">
               <div className="absolute inset-0 bg-gray-200 h-1/2" />
               <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
                  {category.map((cat) => (
                     <Link key={cat._id} to={`/category/${cat._id}`}>
                        <div className="inline-block p-8 text-center">
                           <div className="flex items-center justify-center  mx-auto mb-4  ">
                              <img src={cat.image} className="w-48 h-24" alt="" />
                           </div>
                           <p className="font-bold tracking-wide text-gray-800">{cat.name}</p>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomeBanner;
