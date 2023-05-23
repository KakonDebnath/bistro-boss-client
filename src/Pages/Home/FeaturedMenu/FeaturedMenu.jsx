import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featheredImg from "../../../assets/home/featured.jpg";

import "./Feature.css";


const FeaturedMenu = () => {
    return (
        <div className="featured-item py-32 mt-20">
            <SectionTitle heading="From our menu" subHeading="Check it out"></SectionTitle>
            <div className="flex items-center gap-10">
                <div>
                    <img src={featheredImg} alt="" />
                </div>
                <div>
                    <h3></h3>
                    <h3 className="uppercase text-2xl">WHERE CAN I GET SOME?</h3>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="border-b-[3px] border-black rounded-b-lg mt-12 mb-20 uppercase px-5 py-4  transition-all duration-500 hover:bg-black hover:text-white ">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedMenu;