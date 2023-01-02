import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Spinner from '../Shared/Spinner';
var moment = require('moment');

const AddAProduct = () => {
   const { user } = useContext(AuthContext);
   const navigate = useNavigate();

   const {
      data: allBrands,
      isLoading: allBrandsLoading,
      isError: allBrandsError,
   } = useQuery(['allBrands'], async () => {
      return axios('https://carsale-server.vercel.app/brands').then((data) => data.data);
   });
   if (allBrandsLoading) {
      return <Spinner></Spinner>;
   }
   if (allBrandsError) {
      return <div>Fetch error</div>;
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const productName = form.productName.value;
      const purchaseYear = form.purchaseYear.value;
      const originalPrice = form.originalPrice.value;
      const resalePrice = form.resalePrice.value;
      const description = form.description.value;
      const location = form.location.value;
      const phone = form.phone.value;
      const condition = form.condition.value;
      const categoryId = form.category.value;
      const brandName = form.brand.value.split(',')[0];
      const brandId = form.brand.value.split(',')[1];

      //image Upload
      const image = form.image.files[0];
      const formData = new FormData();
      formData.append('image', image);
      const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_API}`;
      fetch(url, {
         method: 'POST',
         body: formData,
      })
         .then((res) => res.json())
         .then((imageData) => {
            const imageUrl = imageData.data.display_url;

            const productInfo = {
               image: imageUrl,
               name: productName,
               categoryid: categoryId,
               brandId,
               brandName,
               purchaseYear,
               originalPrice,
               resalePrice,
               condition,
               description,
               sellerEmail: user?.email,
               sellerName: user?.displayName,
               location,
               phone,
               status: 'available',
               date: new Date(),
            };
            fetch(`https://carsale-server.vercel.app/cars?email=${user.email}`, {
               method: 'POST',
               headers: {
                  'content-type': 'application/json',
                  authorization: `bearer ${localStorage.getItem('accesstoken')}`,
               },

               body: JSON.stringify(productInfo),
            })
               .then((res) => res.json())
               .then((data) => {
                  console.log(data);
                  if (data.acknowledged) {
                     navigate('/dashboard/my-product');
                  }
                  toast.success('Car Added');
               });
         });
   };
   return (
      <div>
         <section className="p-6 bg-gray-100 text-gray-900 mt-8">
            <form
               onSubmit={handleSubmit}
               noValidate=""
               action=""
               className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
            >
               <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                  <div className="space-y-2 col-span-full lg:col-span-1">
                     <p className="font-medium">Add a product</p>
                     <p className="text-xs">Please fill all the field to add product</p>
                  </div>
                  <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                     <div className="col-span-full sm:col-span-3">
                        <label htmlFor="productName" className="text-sm">
                           Product Name
                        </label>
                        <input
                           id="productName"
                           name="productName"
                           type="text"
                           placeholder="Product name"
                           className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-red-600 border-gray-300 text-gray-900"
                        />
                     </div>
                     <div className="col-span-full sm:col-span-3">
                        <label htmlFor="purchaseYear" className="text-sm">
                           Year of purchase
                        </label>
                        <input
                           id="purchaseYear"
                           name="purchaseYear"
                           type="text"
                           placeholder="Year of purchase"
                           className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-red-600 border-gray-300 text-gray-900"
                        />
                     </div>
                     <div className="col-span-full sm:col-span-3">
                        <label htmlFor="originalPrice" className="text-sm">
                           Original Price
                        </label>
                        <input
                           id="originalPrice"
                           name="originalPrice"
                           type="Original Price"
                           placeholder="originalPrice"
                           className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-red-600 border-gray-300 text-gray-900"
                        />
                     </div>
                     <div className="col-span-full sm:col-span-2">
                        <label htmlFor="resalePrice" className="text-sm">
                           Resale Price
                        </label>
                        <input
                           id="resalePrice"
                           name="resalePrice"
                           type="text"
                           placeholder="Resale price"
                           className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-red-600 border-gray-300 text-gray-900"
                        />
                     </div>
                     <div className="col-span-full sm:col-span-2">
                        <label htmlFor="Condition" className="text-sm">
                           Condition
                        </label>
                        <select
                           defaultValue="Excelent"
                           name="condition"
                           className="select select-bordered select-sm w-full max-w-xs"
                        >
                           <option value="Excelent">Excelent</option>
                           <option value="Good">Good</option>
                           <option value="Fair">Fair</option>
                        </select>
                     </div>
                     <div className="col-span-full sm:col-span-2">
                        <label htmlFor="category" className="text-sm">
                           Category
                        </label>
                        <select
                           defaultValue="637ef772b9533ee1def95b2f"
                           name="category"
                           className="select select-bordered select-sm w-full max-w-xs"
                        >
                           <option value="637ef772b9533ee1def95b2f">Electric</option>
                           <option value="637ef772b9533ee1def95b2d">Convirtible</option>
                           <option value="637ef772b9533ee1def95b2e">Coupe</option>
                        </select>
                     </div>

                     <div className="col-span-full sm:col-span-2">
                        <label htmlFor="brand" className="text-sm">
                           brand
                        </label>
                        <select
                           defaultValue="637ef772b9533ee1def95b2f"
                           name="brand"
                           className="select select-bordered select-sm w-full max-w-xs"
                        >
                           {allBrands.map((brand) => (
                              <option key={brand._id} value={[brand.name, brand._id]}>
                                 {brand.name}
                              </option>
                           ))}
                        </select>
                     </div>
                     <div className="col-span-full ">
                        <label htmlFor="description" className="text-sm">
                           Description
                        </label>
                        <textarea
                           id="description"
                           name="description"
                           type="text"
                           placeholder="Description"
                           className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-red-600 border-gray-300 text-gray-900"
                        />
                     </div>

                     <div className="col-span-full sm:col-span-2">
                        <label htmlFor="location" className="text-sm">
                           Location
                        </label>
                        <input
                           id="location"
                           name="location"
                           type="text"
                           placeholder="Location"
                           className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-red-600 border-gray-300 text-gray-900"
                        />
                     </div>
                     <div className="col-span-full sm:col-span-2">
                        <label htmlFor="phone" className="text-sm">
                           phone
                        </label>
                        <input
                           id="phone"
                           name="phone"
                           type="text"
                           placeholder="phone"
                           className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-red-600 border-gray-300 text-gray-900"
                        />
                     </div>
                     <div className="col-span-full ">
                        <fieldset className="w-full space-y-1 text-gray-800">
                           <label htmlFor="files" className="block text-sm font-medium">
                              Upload product Image
                           </label>
                           <div className="flex">
                              <input
                                 type="file"
                                 name="image"
                                 id="image"
                                 className="px-8 py-12 border-2 border-dashed rounded-md border-gray-300 text-gray-600 bg-gray-100"
                              />
                           </div>
                        </fieldset>
                     </div>
                     <div className="col-span-full mt-4">
                        <button
                           type="submit"
                           className="btn border-none bg-gradient-to-r from-red-600 to-red-700 text-white w-full"
                        >
                           Add Product
                        </button>
                     </div>
                  </div>
               </fieldset>
            </form>
         </section>
      </div>
   );
};

export default AddAProduct;
