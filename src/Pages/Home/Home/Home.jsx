import BannerSlider from "../BannerSlider/BannerSlider";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import FeaturedMenu from "../FeaturedMenu/FeaturedMenu";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <FeaturedMenu></FeaturedMenu>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;