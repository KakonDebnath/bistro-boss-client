import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";

import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="py-32">
            <SectionTitle subHeading="What Our client say" heading="testimonials"></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews?.map(review => <SwiperSlide key={review?._id}>
                        <div className="px-32 space-y-10">
                            <div className="flex justify-center">
                                <Rating
                                    className="text-center"
                                    style={{ maxWidth: 200 }}
                                    value={review?.rating}
                                    readOnly
                                />
                            </div>
                            <div className="flex justify-center text-6xl">
                                <FaQuoteLeft></FaQuoteLeft>
                            </div>
                            <div className="space-y-2">
                                <p className="text-xl text-center">{review?.details}</p>
                                <h3 className="uppercase text-yellow-500 text-center font-bold text-3xl">{review?.name}</h3>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;