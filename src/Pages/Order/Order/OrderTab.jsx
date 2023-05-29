import FoodCard from "../../../components/FoodCard/FoodCard";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const OrderTab = ({ items }) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >
            <div>
                {
                    items?.map(item => <SwiperSlide key={item?._id}>
                        <FoodCard item={item}></FoodCard>
                    </SwiperSlide>)
                }
            </div>
        </Swiper>
    );
};

export default OrderTab;