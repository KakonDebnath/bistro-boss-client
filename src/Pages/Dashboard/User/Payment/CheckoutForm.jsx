import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
    const [cartError, setCartError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault()
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        console.log("card", card);
        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error) {
            console.log(error);
            setCartError(error.message)
        }else{
            console.log("paymentMethod", paymentMethod);
        }
    }
    return (
        <div className="bg-white w-3/4 mx-auto p-10 rounded-xl">
            {
                cartError && <p className="text-red-500 mb-5">{cartError}</p>
            }
            <form onSubmit={handleSubmit}>
                <CardElement
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
                <button className="bg-blue-500 text-white px-20 py-2 rounded-lg relative left-1/2 -translate-x-1/2 mt-10" type="submit" disabled={!stripe}>Pay</button>
            </form>
            
        </div>
    );
};

export default CheckoutForm;