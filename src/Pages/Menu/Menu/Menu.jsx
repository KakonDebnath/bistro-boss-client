import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import coverImg from "../../../assets/menu/banner3.jpg";
import coverDessert from "../../../assets/menu/dessert-bg.jpeg";
import coverPizza from "../../../assets/menu/pizza-bg.jpg";
import coverSalad from "../../../assets/menu/salad-bg.jpg";
import coverSoup from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
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
            <Cover coverImg={coverImg} coverTitle="Our menu" coverDetails="Would you like to try a dish?" bgStyle={{ background: "rgb(21 21 21/60%)" }}></Cover>
            <div className='mt-20'>
                <SectionTitle subHeading="don't miss" heading="Today's offer"></SectionTitle>
                {/* offered menu */}
                <MenuCategory items={todaysOffer} button="order your favorite food"></MenuCategory>
                {/* Desserts menu */}
                <MenuCategory items={dessert} coverImg={coverDessert} coverTitle="dessert" coverDetails="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." button="order your favorite food"></MenuCategory>
                {/* Pizza menu */}
                <MenuCategory items={pizza} coverImg={coverPizza} coverTitle="pizza" coverDetails="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." button="order your favorite food"></MenuCategory>
                {/* Salad menu */}
                <MenuCategory items={salad} coverImg={coverSalad} coverTitle="salad" coverDetails="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." button="order your favorite food"></MenuCategory>
                {/* Soup menu */}
                <MenuCategory items={soup} coverImg={coverSoup} coverTitle="soup" coverDetails="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." button="order your favorite food"></MenuCategory>
            </div>
        </>
    );
};

export default Menu;