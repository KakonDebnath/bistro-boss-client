import BannerSlider from "../BannerSlider/BannerSlider";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import FeaturedMenu from "../FeaturedMenu/FeaturedMenu";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <FeaturedMenu></FeaturedMenu>

        </div>
    );
};

export default Home;