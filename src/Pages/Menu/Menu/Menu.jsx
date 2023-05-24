import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import coverImg from "../../../assets/menu/banner3.jpg";
import coverDessert from "../../../assets/menu/dessert-bg.jpeg";
import coverPizza from "../../../assets/menu/pizza-bg.jpg";
import coverSalad from "../../../assets/menu/salad-bg.jpg";
import coverSoup from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    // console.log(menu);
    const todaysOffer = menu?.filter(item => item.category === "offered");
    const dessert = menu?.filter(item => item.category === "dessert");
    const pizza = menu?.filter(item => item.category === "pizza");
    const salad = menu?.filter(item => item.category === "salad");
    const soup = menu?.filter(item => item.category === "soup");
    // console.log(todaysOffer, dessert, pizza, salad, soup);
    return (
        <>
            <Helmet>
                <title>Bistro : menu</title>
            </Helmet>
            <Cover coverImg={coverImg} coverTitle="OUR MENU" coverDetails="Would you like to try a dish?" style={{ textTransform: "uppercase" }} bgStyle={{ background: "rgba(21, 21, 21,0.6)" }}></Cover>
            <section className='mt-20'>
                <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>
                <MenuCategory items={todaysOffer} button="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
            </section>
            <Cover coverImg={coverDessert} coverTitle="DESSERTS" coverDetails="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bgStyle={{ background: "rgba(21, 21, 21,0.6)" }}></Cover>
            <section className='mt-20'>
                <MenuCategory items={dessert} button="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
            </section>
            <Cover coverImg={coverPizza} coverTitle="Pizza" coverDetails="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bgStyle={{ background: "rgba(21, 21, 21,0.6)" }}></Cover>
            <section className='mt-20'>
                <MenuCategory items={pizza} button="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
            </section>
            <Cover coverImg={coverSalad} coverTitle="Salad" coverDetails="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bgStyle={{ background: "rgba(21, 21, 21,0.6)" }}></Cover>
            <section className='mt-20'>
                <MenuCategory items={salad} button="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
            </section>
            <Cover coverImg={coverSoup} coverTitle="Soup" coverDetails="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bgStyle={{ background: "rgba(21, 21, 21,0.6)" }}></Cover>
            <section className='mt-20'>
            <MenuCategory items={soup} button="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
            </section>
        </>
    );
};

export default Menu;