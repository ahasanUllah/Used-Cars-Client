import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { toast } from 'react-hot-toast';

const CheckoutForm = ({ booking }) => {
   const { price, name, email, _id, carId } = booking;
   const [cardError, setCardError] = useState();
   const [success, setSuccess] = useState('');
   const [processing, setProcessing] = useState(false);
   const [transactionId, setTransactionId] = useState();
   const [clientSecret, setClientSecret] = useState('');
   const stripe = useStripe();
   const elements = useElements();

   useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch('http://localhost:5000/create-payment-intent', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ price }),
      })
         .then((res) => res.json())
         .then((data) => setClientSecret(data.clientSecret));
   }, [price]);

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!stripe || !elements) {
         return;
      }
      const card = elements.getElement(CardElement);
      if (card == null) {
         return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
         type: 'card',
         card,
      });

      if (error) {
         console.log('[error]', error);
         setCardError(error.message);
      } else {
         console.log('[PaymentMethod]', paymentMethod);
         setCardError('');
      }
      setSuccess('');
      setProcessing(true);
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
         payment_method: {
            card: card,
            billing_details: {
               name: name,
               email: email,
            },
         },
      });
      if (confirmError) {
         setCardError(confirmError.message);
         return;
      }
      if (paymentIntent.status === 'succeeded') {
         //store payment info to database
         const paymentInfo = {
            transactionId: paymentIntent.id,
            bookingId: _id,
            price,
            email,
            carId,
         };
         fetch('http://localhost:5000/payments', {
            method: 'POST',
            headers: {
               'content-type': 'application/json',
            },
            body: JSON.stringify(paymentInfo),
         })
            .then((res) => res.json())
            .then((data) => {
               console.log(data);
               if (data.insertedId) {
                  setSuccess('Congrats payment successful');
                  toast.success('Congrats payment successful');
                  setTransactionId(paymentIntent.id);
               }
            });
      }
      setProcessing(false);
      console.log(paymentIntent);
   };
   return (
      <form onSubmit={handleSubmit} className="mt-6">
         <CardElement
            className="w-96"
            options={{
               style: {
                  base: {
                     fontSize: '16px',
                     color: '#424770',
                     '::placeholder': {
                        color: '#aab7c4',
                     },
                  },
                  invalid: {
                     color: '#9e2146',
                  },
               },
            }}
         />
         <p className="text-lg text-red-600 mt-3">{cardError}</p>
         <button
            className="btn btn-md bg-red-600 border-none mt-3"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
         >
            Pay
         </button>
         {success && <p className="text-xl text-green-600">Transcaction id:{transactionId}</p>}
      </form>
   );
};

export default CheckoutForm;
