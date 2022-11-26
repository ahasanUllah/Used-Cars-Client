import React from 'react';
import toast from 'react-hot-toast';

const BookingModal = ({ car, user }) => {
   const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const location = form.location.value;
      const phone = form.phone.value;

      const bookingInfo = {
         carName: car.name,
         price: car.resalePrice,
         image: car.image,
         carId: car._id,
         name: user.displayName,
         email: user.email,
         location,
         phone,
      };
      fetch('http://localhost:5000/bookings', {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.getItem('accesstoken')}`,
         },
         body: JSON.stringify(bookingInfo),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.acknowledged) {
               toast.success('Booking Complete');
            }
         });
   };
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
               <form
                  onSubmit={handleSubmit}
                  noValidate=""
                  action=""
                  className="space-y-12 ng-untouched ng-pristine ng-valid"
               >
                  <div className="space-y-4">
                     <div>
                        <label htmlFor="name" className="block mb-2 text-sm">
                           Name
                        </label>
                        <input
                           type="text"
                           name="name"
                           id="name"
                           defaultValue={user?.displayName}
                           disabled
                           placeholder="leroy@jenkins.com"
                           className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                        />
                     </div>
                     <div>
                        <div className="flex justify-between mb-2">
                           <label htmlFor="email" className="text-sm">
                              Email
                           </label>
                        </div>
                        <input
                           type="email"
                           name="email"
                           id="email"
                           defaultValue={user?.email}
                           disabled
                           className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                        />
                     </div>
                     <div>
                        <div className="flex justify-between mb-2">
                           <label htmlFor="location" className="text-sm">
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
                           <label htmlFor="phone" className="text-sm">
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
                           type="submit"
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
