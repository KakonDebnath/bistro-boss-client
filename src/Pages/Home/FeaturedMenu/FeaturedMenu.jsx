import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featheredImg from "../../../assets/home/featured.jpg";

import "./Feature.css";


const FeaturedMenu = () => {
    return (
        <section className="featured-item py-32 mt-20 relative bg-black">
            <div className="bg-black bg-opacity-40 absolute top-0 w-full h-full">
            </div>
            <div className="z-10 relative">
                <SectionTitle style={{color: "white"}} heading="From our menu" subHeading="Check it out"></SectionTitle>
                <div className="flex items-center gap-10 text-white">
                    <div>
                        <img src={featheredImg} alt="" />
                    </div>
                    <div>
                        <h3></h3>
                        <h3 className="uppercase text-2xl">WHERE CAN I GET SOME?</h3>
                        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="border-b-[3px] border-white hover:border-black rounded-b-lg mt-12 mb-20 uppercase px-5 py-4  transition-all duration-500 text-white hover:bg-black hover:text-white ">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedMenu;