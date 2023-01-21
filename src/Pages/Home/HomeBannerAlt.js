import React from 'react';
import hero from '../../assets/hero.jpg';

const HomeBannerAlt = () => {
   return (
      <div className="overflow-hidden bg-cover" style={{ backgroundImage: `url(${hero})` }}>
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
               <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                  <h2 className="max-w-lg mb-6 font-roboto lg:text-6xl font-bold tracking-tight text-gray-50 sm:text-4xl sm:leading-none">
                     Find Your Next <br className="hidden md:block" />
                     Car <br className="hidden md:block" />
                     <span className="text-teal-accent-400">With Us</span>
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
                        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                           Sign up for updates
                        </h3>
                        <form>
                           <div className="mb-1 sm:mb-2">
                              <label htmlFor="name" className="inline-block mb-1 font-medium">
                                 Name
                              </label>
                              <input
                                 placeholder="John Doe"
                                 required
                                 type="text"
                                 className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                 id="name"
                                 name="name"
                              />
                           </div>
                           <div className="mb-1 sm:mb-2">
                              <label htmlFor="email" className="inline-block mb-1 font-medium">
                                 E-mail
                              </label>
                              <input
                                 placeholder="john.doe@example.org"
                                 required
                                 type="text"
                                 className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                 id="email"
                                 name="email"
                              />
                           </div>
                           <div className="mt-4 mb-2 sm:mb-4">
                              <button
                                 type="submit"
                                 className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                              >
                                 Subscribe
                              </button>
                           </div>
                           <p className="text-xs text-gray-600 sm:text-sm">
                              We respect your privacy. Unsubscribe at any time.
                           </p>
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
