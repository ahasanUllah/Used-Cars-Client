import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useToken = (email) => {
   const [token, setToken] = useState('');
   const [istokenLoading, setIsTokenLoading] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();
   const from = location.state?.from?.pathname || '/';

   useEffect(() => {
      setIsTokenLoading(true);
      if (email) {
         fetch(`https://carsale-server.vercel.app/jwt?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
               console.log(data);
               if (data.accessToken) {
                  localStorage.setItem('accesstoken', data.accessToken);
                  setToken(data.accessToken);
                  setIsTokenLoading(false);
                  navigate(from, { replace: true });
               }
            });
      }
   }, [email, token, from, navigate]);
   return [token, istokenLoading];
};
export default useToken;
