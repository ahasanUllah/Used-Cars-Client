import React from 'react';

const CategoryCards = ({ car }) => {
   const { name, image, location, originalprice, resaleprice, usedfor } = car;
   return (
      <div>
         <a href="#" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
            <img alt="Home" src={image} class="h-56 w-full rounded-md object-cover" />

            <div class="mt-2">
               <dl>
                  <div>
                     <dd class="font-medium">{name}</dd>
                     <dd class="">
                        Resale Price: <strong>${resaleprice}</strong>
                     </dd>
                     <dd class="text-sm text-gray-500">
                        Original Price: <strong>${originalprice}</strong>
                     </dd>
                  </div>

                  <div>
                     <dt class="">{location}</dt>
                  </div>
               </dl>

               <div class="mt-6 flex items-center gap-8 text-xs">
                  <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                     <svg
                        className="text-red-600 w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                     >
                        <path
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                        />
                     </svg>

                     <div class="mt-1.5 sm:ml-3 sm:mt-0">
                        <p class="text-gray-500">Used for</p>

                        <p class="font-medium">{usedfor} years</p>
                     </div>
                  </div>

                  <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                     <svg
                        className="text-red-600 h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                     >
                        <path
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                        />
                     </svg>

                     <div class="mt-1.5 sm:ml-3 sm:mt-0">
                        <p class="text-gray-500">color</p>

                        <p class="font-medium">red color</p>
                     </div>
                  </div>

                  <div class="sm:inline-flex sm:shrink-0 sm:items-center ">
                     <svg
                        className="text-red-600 w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                     >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                     </svg>

                     <div class="mt-1.5 sm:ml-3 sm:mt-0">
                        <p class="text-gray-500">Location</p>

                        <p class="font-medium">{location}</p>
                     </div>
                  </div>
               </div>
            </div>
         </a>
      </div>
   );
};

export default CategoryCards;
