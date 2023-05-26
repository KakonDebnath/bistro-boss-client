import { Link } from "react-router-dom";
import MenuItem from "../../../Shared/Menuitem/MenuItem";
import Cover from "../../../Shared/Cover/Cover";

const MenuCategory = ({ items, coverImg, coverTitle, coverDetails, button }) => {
    console.log(items);
    return (
        <div>
            {coverImg &&
                <div className="mb-12">
                    <Cover coverImg={coverImg} coverTitle={coverTitle} coverDetails={coverDetails} bgStyle={{ background: "rgb(21 21 21/60%)" }}></Cover>
                </div>}
            <div className="grid md:grid-cols-2 gap-8">
                {
                    items?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${coverTitle}`}>
                <button className="border-b-[3px] border-black rounded-b-lg mt-12 mb-20 uppercase px-5 py-4 relative left-1/2 -translate-x-1/2 transition-all duration-500 hover:bg-black hover:text-white ">{button}</button>
            </Link>
        </div>
    );
};

export default MenuCategory;