import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import hero from '../../assets/hero.jpg';
import Spinner from '../Shared/Spinner';

const HomeBannerAlt = () => {
   const [selectedYear, setSelectedYear] = useState(0);
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const type = form.type.value;
      const make = form.make.value;
      const yearFrom = form.yearFrom.value;
      const yearTo = form.yearTo.value;
      navigate(`search?type=${type}&make=${make}&from=${yearFrom}&to=${yearTo}`);
   };

   const optionsFrom = [];
   const optionsTo = [];
   const currentYear = new Date().getFullYear();
   for (let i = 0; i <= 30; i++) {
      const year = currentYear - i;
      optionsFrom.push(
         <option key={year} value={year}>
            {year}
         </option>
      );
      optionsTo.push(
         <option key={year} value={year}>
            {year}
         </option>
      );
   }

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
   const {
      data: allBrands,
      isLoading: allBrandsLoading,
      isError: allBrandsError,
   } = useQuery(['allBrands'], async () => {
      return axios(`${process.env.REACT_APP_serverLink}brands`).then((data) => data.data);
   });

   if (isLoading) {
      return <Spinner></Spinner>;
   }
   if (isError) {
      return <h2>Cannot fetch data</h2>;
   }

   if (allBrandsLoading) {
      return <Spinner></Spinner>;
   }
   if (allBrandsError) {
      return <div>Fetch error</div>;
   }

   return (
      <div className="overflow-hidden bg-cover" style={{ backgroundImage: `url(${hero})` }}>
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gray-900 bg-opacity-60">
            <div className="flex flex-col items-center justify-evenly xl:flex-row">
               <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                  <h2 className="max-w-lg  mb-6 font-roboto lg:text-5xl font-semibold tracking-tight text-gray-50 sm:text-4xl sm:leading-none">
                     Find Your Next <br className="hidden md:block" />
                     <span className="text-teal-accent-400"> Car With Us</span>
                  </h2>
               </div>
               <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                  <div className="relative">
                     <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
                     >
                        <defs>
                           <pattern id="766323e1-e594-4ffd-a688-e7275079d540" x="0" y="0" width=".135" height=".30">
                              <circle cx="1" cy="1" r=".7" />
                           </pattern>
                        </defs>
                        <rect fill="url(#766323e1-e594-4ffd-a688-e7275079d540)" width="52" height="24" />
                     </svg>
                     <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                        <form onSubmit={handleSubmit}>
                           <div className="flex justify-between">
                              <div className="mb-1 sm:mb-2">
                                 <label
                                    for="small"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                 >
                                    Type
                                 </label>
                                 <select
                                    class="block w-44 p-2 mb-6 text-sm text-gray-900 border border-gray-400  bg-gray-50 focus:border-gray-400 outline-none "
                                    name="type"
                                 >
                                    {category.map((type) => (
                                       <option key={type._id} value={type._id}>
                                          {type.name}
                                       </option>
                                    ))}
                                 </select>
                              </div>

                              <div className="mb-1 sm:mb-2">
                                 <label
                                    for="small"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                 >
                                    Make
                                 </label>
                                 <select
                                    className="block w-44 p-2 mb-6 text-sm text-gray-900 border border-gray-400  bg-gray-50 focus:border-gray-400 outline-none "
                                    name="make"
                                 >
                                    {allBrands.map((make) => (
                                       <option>{make.name}</option>
                                    ))}
                                 </select>
                              </div>
                           </div>
                           <div className="flex justify-between">
                              <div className="mb-1 sm:mb-2">
                                 <label
                                    for="small"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                 >
                                    Year From
                                 </label>
                                 <select
                                    class="block w-full py-2 px-4 mb-6 text-sm text-gray-900 border border-gray-400  bg-gray-50 focus:border-gray-400 outline-none "
                                    name="yearFrom"
                                 >
                                    {optionsFrom.reverse()}
                                 </select>
                              </div>
                              <div className="mb-1 sm:mb-2">
                                 <label
                                    for="small"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                 >
                                    Year To
                                 </label>
                                 <select
                                    class="block w-full py-2 px-4 mb-6 text-sm text-gray-900 border border-gray-400  bg-gray-50 focus:border-gray-400 outline-none "
                                    name="yearTo"
                                 >
                                    {optionsTo}
                                 </select>
                              </div>
                              <div className="mb-1 sm:mb-2">
                                 <label
                                    for="small"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                 >
                                    Choose a Model
                                 </label>
                                 <select
                                    class="block w-44 p-2 mb-6 text-sm text-gray-900 border border-gray-400  bg-gray-50 focus:border-gray-400 outline-none "
                                    name="model"
                                 >
                                    <option value="Choose a Model">Choose a Model</option>
                                 </select>
                              </div>
                           </div>

                           <div className="mt-4 mb-2 sm:mb-4">
                              <button
                                 type="submit"
                                 className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-b from-green-500 to-green-700  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                              >
                                 Search
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomeBannerAlt;
