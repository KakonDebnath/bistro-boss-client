

const FoodCard = ({ items }) => {
    const { image, name, recipe, price } = items;
    return (
        <div key={items?._id} className="card bg-base-100 shadow-xl relative">
            <p className="absolute right-5 rounded-md px-5 py-1 bg-black text-white">${price}</p>
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body justify-center items-center">
                
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="border-b-[3px] border-yellow-500 text-yellow-500 rounded-b-lg mt- uppercase px-5 py-4 relative left-1/2 -translate-x-1/2 transition-all duration-500 hover:bg-black ">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;