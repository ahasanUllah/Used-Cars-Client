import React from 'react';

const BookingModal = ({ car, user }) => {
   return (
      <div>
         {/* The button to open modal */}

         {/* Put this part before </body> tag */}
         <input type="checkbox" id="booking-modal" className="modal-toggle" />
         <div className="modal ">
            <div className="modal-box relative">
               <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
                  ✕
               </label>
               <h3 className="text-lg font-bold">{car.name}</h3>
               <h3 className="text-md font-semibold mb-3">Price: ${car.resalePrice}</h3>
               <form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                  <div className="space-y-4">
                     <div>
                        <label for="name" className="block mb-2 text-sm">
                           Name
                        </label>
                        <input
                           type="text"
                           name="name"
                           id="name"
                           value={user?.displayName}
                           disabled
                           placeholder="leroy@jenkins.com"
                           className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                        />
                     </div>
                     <div>
                        <div className="flex justify-between mb-2">
                           <label for="email" className="text-sm">
                              Email
                           </label>
                        </div>
                        <input
                           type="email"
                           name="email"
                           id="email"
                           value={user?.email}
                           disabled
                           className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                        />
                     </div>
                     <div>
                        <div className="flex justify-between mb-2">
                           <label for="location" className="text-sm">
                              Location
                           </label>
                        </div>
                        <input
                           type="location"
                           name="location"
                           id="location"
                           placeholder="Enter location you want to meet with saller"
                           className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                        />
                     </div>
                     <div>
                        <div className="flex justify-between mb-2">
                           <label for="phone" className="text-sm">
                              Phone
                           </label>
                        </div>
                        <input
                           type="phone"
                           name="phone"
                           id="phone"
                           placeholder="Phone number"
                           className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                        />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <div>
                        <button
                           type="button"
                           className="w-full px-8 py-3 font-semibold rounded-md bg-red-600 text-gray-50"
                        >
                           Book
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default BookingModal;
