import BannerSlider from "../BannerSlider/BannerSlider";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <Category></Category>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;