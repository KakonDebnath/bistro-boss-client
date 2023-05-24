import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import coverImg from "../../../assets/menu/banner3.jpg";
import coverDessert from "../../../assets/menu/dessert-bg.jpeg";
import coverPizza from "../../../assets/menu/pizza-bg.jpg";
import coverSalad from "../../../assets/menu/salad-bg.jpg";
import coverSoup from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';


const Menu = () => {
    return (
        <>
            <Helmet>
                <title>Bistro : menu</title>
            </Helmet>
            <Cover coverImg={coverImg} coverTitle="OUR MENU" coverDetails="Would you like to try a dish?" style={{ textTransform: "uppercase" }} bgStyle={{ background: "rgba(21, 21, 21,0.6)" }}></Cover>
            <section className='mt-20'>
                <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>
                <PopularMenu button="ORDER YOUR FAVOURITE FOOD"></PopularMenu>
            </section>
            <Cover coverImg={coverDessert} coverTitle="DESSERTS" coverDetails="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bgStyle={{ background: "rgba(21, 21, 21,0.6)" }}></Cover>
            <section className='mt-20'>
                <PopularMenu button="ORDER YOUR FAVOURITE FOOD"></PopularMenu>
            </section>
            <Cover coverImg={coverPizza} coverTitle="Pizza" coverDetails="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bgStyle={{ background: "rgba(21, 21, 21,0.6)" }}></Cover>
            <section className='mt-20'>
                <PopularMenu button="ORDER YOUR FAVOURITE FOOD"></PopularMenu>
            </section>
            <Cover coverImg={coverSalad} coverTitle="Salad" coverDetails="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bgStyle={{ background: "rgba(21, 21, 21,0.6)" }}></Cover>
            <section className='mt-20'>
                <PopularMenu button="ORDER YOUR FAVOURITE FOOD"></PopularMenu>
            </section>
            <Cover coverImg={coverSoup} coverTitle="Soup" coverDetails="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bgStyle={{ background: "rgba(21, 21, 21,0.6)" }}></Cover>
            <section className='mt-20'>
                <PopularMenu button="ORDER YOUR FAVOURITE FOOD"></PopularMenu>
            </section>
        </>
    );
};

export default Menu;