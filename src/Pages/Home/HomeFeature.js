import React from 'react';
import { FaCar, FaFileAlt, FaTags, FaShieldAlt } from 'react-icons/fa';

const HomeFeature = () => (
   <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
         <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
               <span className="relative inline-block">
                  <svg
                     viewBox="0 0 52 24"
                     fill="currentColor"
                     className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                     <defs>
                        <pattern id="27df4f81-c854-45de-942a-fe90f7a300f9" x="0" y="0" width=".135" height=".30">
                           <circle cx="1" cy="1" r=".7" />
                        </pattern>
                     </defs>
                     <rect fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)" width="52" height="24" />
                  </svg>
                  <span className="relative">All</span>
               </span>{' '}
               the ways to find car chemistry
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
               We're your one-stop shop for buying and selling your car. Get matched to your perfect car, or sell one
               swiftly.
            </p>
         </div>
         <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
               <div className="mr-4">
                  <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50">
                     <FaCar className="w-16 h-16 text-red-600"></FaCar>
                  </div>
               </div>
               <div>
                  <h6 className="mb-3 text-xl font-bold leading-5">Shop</h6>
                  <p className="mb-3 text-sm text-gray-900">
                     Find cars for sale, local dealers, and advice. Also, our price-badging and price-drop notifications
                     keep you informed of potential deals.
                  </p>
                  <a
                     href="/"
                     aria-label=""
                     className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                     Find car for sale
                  </a>
               </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
               <div className="mr-4">
                  <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50">
                     <FaFileAlt className="w-16 h-16 text-red-600" />
                  </div>
               </div>
               <div>
                  <h6 className="mb-3 text-xl font-bold leading-5">Research</h6>
                  <p className="mb-3 text-sm text-gray-900">
                     View side-by-side comparisons, payment calculators, video reviews, and consumer reviews. These let
                     you hear the good and the bad from current car owners.
                  </p>
                  <a
                     href="/"
                     aria-label=""
                     className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                     Learn more
                  </a>
               </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
               <div className="mr-4">
                  <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50">
                     <FaTags className="w-16 h-16 text-red-600" />
                  </div>
               </div>
               <div>
                  <h6 className="mb-3 text-xl font-bold leading-5">Sell</h6>
                  <p className="mb-3 text-sm text-gray-900">
                     Check out our free, secure methods for selling your car. You can either sell directly to a
                     private-party shopper or get an Instant Offer from a dealership. Choose the option that’s right for
                     you!
                  </p>
                  <a
                     href="/"
                     aria-label=""
                     className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                     Learn more
                  </a>
               </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
               <div className="mr-4">
                  <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50">
                     <FaShieldAlt className="w-16 h-16 text-red-600" />
                  </div>
               </div>
               <div>
                  <h6 className="mb-3 text-xl font-bold leading-5">Certified Pre-Owned</h6>
                  <p className="mb-3 text-sm text-gray-900">
                     Learn why you should consider a Certified Pre-Owned car, and get info on manufacturer programs.
                  </p>
                  <a
                     href="/"
                     aria-label=""
                     className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                     Learn more
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
);

export default HomeFeature;
