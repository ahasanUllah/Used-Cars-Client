import { useEffect, useState } from 'react';

const useToken = (email) => {
   const [token, setToken] = useState('');
   const [istokenLoading, setIsTokenLoading] = useState(false);

   useEffect(() => {
      setIsTokenLoading(true);
      if (email) {
         fetch(`http://localhost:5000/jwt?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
               console.log(data);
               if (data.accessToken) {
                  localStorage.setItem('accesstoken', data.accessToken);
                  setToken(data.accessToken);
                  setIsTokenLoading(false);
               }
            });
      }
   }, [email, token]);
   return [token, istokenLoading];
};
export default useToken;
