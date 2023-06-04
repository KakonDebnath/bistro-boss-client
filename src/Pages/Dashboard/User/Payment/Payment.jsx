import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../../hooks/useCart";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
const Payment = () => {
    const [cart] = useCart();
    const totalPrice = cart?.reduce((sum, item) => sum + item?.price, 0);
    return (
        <>
            <Helmet>
                <title>Bistro : Payment</title>
            </Helmet>
            <section className="py-12 bg-slate-100">
                <SectionTitle subHeading="please payment" heading="Payment"></SectionTitle>
                <Elements stripe={stripePromise}>
                    <CheckoutForm price={totalPrice}></CheckoutForm>
                </Elements>
            </section>
        </>
    );
};

export default Payment;