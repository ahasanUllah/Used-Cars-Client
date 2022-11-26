import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Spinner from '../Shared/Spinner';

const AllSeller = () => {
   const {
      data: sellers,
      isLoading,
      isError,
      refetch,
   } = useQuery(['sellers'], async () => {
      return await axios('http://localhost:5000/users/seller', {
         headers: {
            authorization: ` bearer ${localStorage.getItem('accessToken')}`,
         },
      }).then((data) => data.data);
   });
   if (isLoading) {
      return <Spinner></Spinner>;
   }
   const handleDelete = (id) => {
      fetch(`http://localhost:5000/users/${id}`, {
         method: 'DELETE',
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            refetch();
         });
   };

   return (
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
                  {sellers.map((seller, i) => (
                     <tr key={seller._id}>
                        <th>{i + 1}</th>
                        <td>{seller.name}</td>
                        <td>{seller.email}</td>
                        <td>
                           <button onClick={() => handleDelete(seller._id)} className="btn btn-sm bg-red-600">
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
   );
};

export default AllSeller;
