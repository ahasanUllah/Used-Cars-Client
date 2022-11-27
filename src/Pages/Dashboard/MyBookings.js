import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Spinner from '../Shared/Spinner';

const MyBookings = () => {
   const { user } = useContext(AuthContext);
   const {
      data: bookings,
      isLoading,
      isError,
   } = useQuery(['bookings'], () => {
      return axios(`http://localhost:5000/bookings/${user.email}`, {
         headers: { authorization: `bearer ${localStorage.getItem('accesstoken')}` },
      }).then((data) => data.data);
   });
   if (isLoading) {
      return <Spinner></Spinner>;
   }
   if (isError) {
      return <div>Cannot fetch data</div>;
   }
   console.log(bookings);

   return (
      <div>
         <div className="container p-2 mx-auto sm:p-4 text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">My Bookings</h2>
            <div className="overflow-x-auto">
               <table className="min-w-full text-xs">
                  <colgroup>
                     <col />
                     <col />
                     <col />
                     <col />
                     <col />
                     <col className="w-24" />
                  </colgroup>
                  <thead className="bg-gray-300">
                     <tr className="text-left">
                        <th className="p-3"></th>
                        <th className="p-3">Name</th>
                        <th className="p-3">Price</th>
                        <th className="p-3"></th>
                     </tr>
                  </thead>
                  <tbody>
                     {bookings.map((booking) => (
                        <tr key={booking._id} className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                           <td className="p-3">
                              <img src={booking.image} className="w-20 h-20" alt="" />
                           </td>
                           <td className="p-3">
                              <p>{booking.carName}</p>
                           </td>
                           <td className="p-3">
                              <p className="">${booking.price}</p>
                           </td>
                           <td className="p-3 text-right">
                              {booking.status === 'sold' ? (
                                 <button
                                    disabled
                                    className="px-3 py-1 font-semibold rounded-md  btn-disabled text-gray-50"
                                 >
                                    <span>Paid</span>
                                 </button>
                              ) : (
                                 <Link to={`/dashboard/payment/${booking._id}`}>
                                    <button className="px-3 py-1 font-semibold rounded-md bg-red-600 text-gray-50">
                                       <span>Pay</span>
                                    </button>
                                 </Link>
                              )}
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default MyBookings;
