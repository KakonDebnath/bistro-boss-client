import MenuItem from "../../../Shared/Menuitem/MenuItem";

const MenuCategory = ({button, items}) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-8">
                {
                    items?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className="border-b-[3px] border-black rounded-b-lg mt-12 mb-20 uppercase px-5 py-4 relative left-1/2 -translate-x-1/2 transition-all duration-500 hover:bg-black hover:text-white ">{button}</button>
        </div>
    );
};

export default MenuCategory;