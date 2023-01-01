import React, { useState } from 'react';
import Bmw from '../../assets/brand/Bmw.jpg';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Spinner from '../Shared/Spinner';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';

const BrowseByBrand = () => {
   const [brandCount, setBrandCount] = useState(4);
   const [toggleBrands, setToggleBrands] = useState(false);
   const {
      data: allBrands,
      isLoading,
      isError,
   } = useQuery(['allBrands'], async () => {
      return axios('https://carsale-server.vercel.app/brands').then((data) => data.data);
   });
   if (isLoading) {
      return <Spinner></Spinner>;
   }
   if (isError) {
      return <div>Fetch error</div>;
   }

   return (
      <div>
         <div className="border border-gray-300 px-6 py-8">
            <h1 className="text-3xl text-center ">Browse By brand</h1>
            <div className="grid grid-cols-4 gap-6 m-11">
               {allBrands.slice(0, `${brandCount}`).map((brand) => (
                  <div className="border border-gray-300 flex flex-col justify-center items-center p-5 w-52 h-48">
                     <img src={brand.image.thumb} className="w-24 h-24" alt="" />
                     <h2 className="text-xl">{brand.name}</h2>
                  </div>
               ))}
            </div>
            <div className="text-center p-5">
               <button className="" onClick={() => setToggleBrands(!toggleBrands)}>
                  <p className="flex">
                     {!toggleBrands ? (
                        <>
                           <PlusIcon className="w-6 h-6"></PlusIcon> <span>Show all brands</span>
                        </>
                     ) : (
                        <>
                           <XMarkIcon className="w-6 h-6"></XMarkIcon> <span>Hide all brands</span>
                        </>
                     )}
                  </p>
               </button>
            </div>
            <div className={`grid grid-cols-5 gap-4 ${!toggleBrands ? 'hidden' : ''}`}>
               {allBrands.map((brand) => (
                  <div className="flex w-56 h-11 border border-gray-300 justify-start py-1 px-3 items-center">
                     <img src={brand.image.thumb} className="w-8 h-8 mx-6" alt="" />
                     <h2>{brand.name}</h2>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default BrowseByBrand;