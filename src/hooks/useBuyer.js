import { useEffect, useState } from 'react';

const useBuyer = (email) => {
   const [isBuyer, setIsBuyer] = useState();
   const [isBuyerLoading, setIsBuyerLoading] = useState(true);
   useEffect(() => {
      fetch(`${process.env.REACT_APP_serverLink}users/Buyer/${email}`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setIsBuyer(data.isBuyer);
            setIsBuyerLoading(false);
         });
   }, [email]);
   return [isBuyer, isBuyerLoading];
};
export default useBuyer;
