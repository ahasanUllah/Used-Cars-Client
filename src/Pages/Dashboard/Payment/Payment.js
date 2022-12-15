import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
   const booking = useLoaderData();
   const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

   return (
      <div>
         <div>
            <h2 className="text-2xl">Payment for {booking.carName}</h2>
         </div>
         <div>
            <Elements stripe={stripePromise}>
               <CheckoutForm booking={booking} />
            </Elements>
         </div>
      </div>
   );
};

export default Payment;
