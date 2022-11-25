import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import ConfirmationModal from '../Shared/ConfirmationModal';
import Spinner from '../Shared/Spinner';

const MyProduct = () => {
   const { user } = useContext(AuthContext);
   const [deleteProduct, setDeletePproduct] = useState(null);
   const {
      data: myCar,
      isLoading,
      isError,
      refetch,
   } = useQuery(['myCar'], () => {
      return axios(`http://localhost:5000/cars/${user?.email}`).then((data) => data.data);
   });

   if (isLoading) {
      return <Spinner></Spinner>;
   }
   if (isError) {
      return <h2>Cannot fetch data</h2>;
   }

   const handleDelete = (id) => {
      fetch(`http://localhost:5000/cars/${id}`, {
         method: 'DELETE',
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.deletedCount === 1) {
               refetch();
            }
         });
   };
   console.log(myCar);

   return (
      <>
         <div className="container p-2 mx-auto sm:p-4 text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">My Product</h2>
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
                        <th className="p-3">Year of purchase</th>
                        <th className="p-3">Price</th>
                        <th className="p-3 text-right">Amount</th>
                        <th className="p-3"></th>
                     </tr>
                  </thead>
                  <tbody>
                     {myCar.map((car) => (
                        <tr key={car._id} className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                           <td className="p-3">
                              <img src={car.image} className="w-20 h-20" alt="" />
                           </td>
                           <td className="p-3">
                              <p>{car.name}</p>
                           </td>
                           <td className="p-3">
                              <p>{car.purchaseYear}</p>
                           </td>
                           <td className="p-3">
                              <p>${car.resalePrice}</p>
                           </td>
                           <td className="p-3 text-right">
                              <p>$15,792</p>
                           </td>
                           <td className="p-3 text-right">
                              <label
                                 onClick={() => setDeletePproduct(car)}
                                 htmlFor="my-modal"
                                 className="btn btn-primary btn-sm font-semibold rounded-md bg-red-600 text-gray-50"
                              >
                                 Delete
                              </label>
                              {/* <button
                                 onClick={() => handleDelete(car._id)}
                                 className="px-3 py-1 font-semibold rounded-md bg-red-600 text-gray-50"
                              >
                                 <span>Delete</span>
                              </button> */}
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
         {deleteProduct && (
            <ConfirmationModal
               title={`Are you sure delete ${deleteProduct.name}`}
               message={`This action cannot be undone`}
               modalData={deleteProduct}
               successAction={handleDelete}
               setDeletePproduct={setDeletePproduct}
            ></ConfirmationModal>
         )}
      </>
   );
};

export default MyProduct;
