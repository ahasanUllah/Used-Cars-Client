import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';
import Spinner from '../Shared/Spinner';

const Login = () => {
   const { login, googleLogin } = useContext(AuthContext);
   const location = useLocation();
   const navigate = useNavigate();
   const from = location.state?.from?.pathname || '/';
   const [userEmail, setUserEmail] = useState('');
   const [token] = useToken(userEmail);

   // if (token) {
   //    navigate(from, { replace: true });
   // }

   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      login(email, password)
         .then((result) => {
            const user = result.user;

            setUserEmail(user.email);
            toast.success('Login successful');
         })
         .catch((error) => {
            console.log(error);

            toast.error(error.message);
         });
   };
   const handleGoogle = () => {
      googleLogin()
         .then((result) => {
            const user = result.user;
            setUserEmail(user.email);
            const userInfo = {
               name: user.displayName,
               email: user.email,
               role: 'buyer',
            };
            fetch(`http://localhost:5000/users/${user.email}`, {
               method: 'POST',
               headers: {
                  'content-type': 'application/json',
               },
               body: JSON.stringify(userInfo),
            })
               .then((res) => res.json())
               .then((data) => {
                  if (data.acknowledged) {
                     console.log('data inserted');
                     navigate(from, { replace: true });
                  }
                  toast.success('Login successful');
               });
         })
         .catch((error) => {
            console.log(error);
            toast.error(error.message);
         });
   };

   return (
      <div className="flex justify-center">
         <div className="flex flex-col w-full max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
            <div className="mb-8 text-center">
               <h1 className="my-3 text-4xl font-bold">Sign in</h1>
               <p className="text-sm text-gray-600">Sign in to access your account</p>
            </div>
            <form
               onSubmit={handleSubmit}
               noValidate=""
               action=""
               className="space-y-12 ng-untouched ng-pristine ng-valid"
            >
               <div className="space-y-4">
                  <div>
                     <label htmlFor="email" className="block mb-2 text-sm">
                        Email address
                     </label>
                     <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="leroy@jenkins.com"
                        className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                     />
                  </div>
                  <div>
                     <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm">
                           Password
                        </label>
                        <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-600">
                           Forgot password?
                        </a>
                     </div>
                     <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="*****"
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
                        Login
                     </button>
                  </div>
                  <p className="px-6 text-sm text-center text-gray-600">
                     Don't have an account yet?
                     <Link rel="noopener noreferrer" to="/register" className="hover:underline text-red-600">
                        Register
                     </Link>
                     .
                  </p>
                  <button
                     onClick={handleGoogle}
                     aria-label="Login with Google"
                     type="button"
                     className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-red-600 focus:border-none"
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                     </svg>
                     <p>Login with Google</p>
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Login;
