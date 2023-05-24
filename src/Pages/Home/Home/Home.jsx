import Cover from "../../Shared/Cover/Cover";
import BannerSlider from "../BannerSlider/BannerSlider";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import FeaturedMenu from "../FeaturedMenu/FeaturedMenu";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from 'react-helmet-async';
import coverImg from "../../../assets/home/chef-service.jpg"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss Restaurant</title>
            </Helmet>
            <BannerSlider></BannerSlider>
            <Category></Category>
            <Cover coverImg={coverImg} coverTitle="Bistro Boss" coverDetails="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo." bgStyle={{ background: "#ffffff", color: "#000000" }}></Cover>
            <section className="mt-20">
                <SectionTitle heading="FROM OUR MENU" subHeading="Check it out"></SectionTitle>
                <PopularMenu button="View Full menu"></PopularMenu>
            </section>
            <CallUs></CallUs>
            <FeaturedMenu></FeaturedMenu>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;