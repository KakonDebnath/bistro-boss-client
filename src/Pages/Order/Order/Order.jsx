import { useState } from "react";
import coverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories= ["salad", "pizza", "soup", "dessert", "drink"];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    // console.log(category, menu);
    const salads = menu?.filter(item => item.category === "salad");
    const pizzas = menu?.filter(item => item.category === "pizza");
    const soups = menu?.filter(item => item.category === "soup");
    const desserts = menu?.filter(item => item.category === "dessert");
    const drinks = menu?.filter(item => item.category === "drinks");
    // const items = menu?.filter(item => item.category === category);
    // console.log(items);

    return (
        <div>
            <Helmet>
                <title>Bistro : Order Food</title>
            </Helmet>
            <Cover coverImg={coverImg} coverTitle="Order Food" coverDetails="Would you like to try a dish?" bgStyle={{ background: "rgba(21, 21, 21,0.6)" }}></Cover>
            <div className="py-20">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salads}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizzas}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soups}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={desserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;