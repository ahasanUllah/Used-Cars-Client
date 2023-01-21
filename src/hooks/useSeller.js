import { useEffect, useState } from 'react';

const useSeller = (email) => {
   const [isSeller, setIsSeller] = useState();
   const [isSellerLoading, setIsSellerLoading] = useState(true);
   useEffect(() => {
      fetch(`${process.env.REACT_APP_serverLink}users/Seller/${email}`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setIsSeller(data.isSeller);
            setIsSellerLoading(false);
         });
   }, [email]);
   return [isSeller, isSellerLoading];
};
export default useSeller;
