import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Spinner from '../Shared/Spinner';

const AllBuyers = () => {
   const { user } = useContext(AuthContext);
   const {
      data: buyers,
      isLoading,
      isError,
      refetch,
   } = useQuery(['buyers'], async () => {
      return await axios('https://carsale-server.vercel.app/users/buyer', {
         headers: { authorization: `bearer ${localStorage.getItem('accesstoken')}` },
      }).then((data) => data.data);
   });
   if (isLoading) {
      return <Spinner></Spinner>;
   }
   const handleDelete = (id) => {
      fetch(`https://carsale-server.vercel.app/users/${id}?email=${user.email}`, {
         method: 'DELETE',
         headers: { authorization: `bearer ${localStorage.getItem('accesstoken')}` },
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            refetch();
         });
   };
   return (
      <div>
         <div>
            <div className="overflow-x-auto">
               <table className="table w-full">
                  {/* <!-- head --> */}
                  <thead>
                     <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* <!-- row 1 --> */}
                     {buyers.map((buyer, i) => (
                        <tr key={buyer._id}>
                           <th>{i + 1}</th>
                           <td>{buyer.name}</td>
                           <td>{buyer.email}</td>
                           <td>
                              <button onClick={() => handleDelete(buyer._id)} className="btn btn-sm bg-red-600">
                                 Delete
                              </button>
                           </td>
                        </tr>
                     ))}

                     {/* <!-- row 2 --> */}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default AllBuyers;
