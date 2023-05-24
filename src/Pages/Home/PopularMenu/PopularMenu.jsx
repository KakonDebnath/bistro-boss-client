import { useEffect, useState } from "react";
import MenuItem from "../../Shared/Menuitem/MenuItem";

const PopularMenu = ({button}) => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const popularMenuItems = data.filter(item => item.category === "popular");
                setMenu(popularMenuItems);
            })
            .catch(err => console.error(err))
    }, [])
    return (

        <>
            <div className="grid md:grid-cols-2 gap-8">
                {
                    menu?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className="border-b-[3px] border-black rounded-b-lg mt-12 mb-20 uppercase px-5 py-4 relative left-1/2 -translate-x-1/2 transition-all duration-500 hover:bg-black hover:text-white ">{button}</button>
        </>

    );
};

export default PopularMenu;