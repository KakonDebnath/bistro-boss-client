import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart()
    const navigate = useNavigate()
    const {image, name, recipe, price} = item;
    const handleAddToCart = (item) => {
        // console.log(item);
        if (user && user.email) {
            const cartItem = {menuItemId: item._id, name: item.name, image: item.image, price: item.price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your food successfully added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
                .catch(err => {
                    console.error(err)
                })
        }
        else{
            Swal.fire({
                title: 'Please Login first to order food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/login")
                }
              })
        }
    }
    
    return (
        <div key={item?._id} className="card bg-base-100 shadow-xl relative">
            <p className="absolute right-5 rounded-md px-5 py-1 bg-black text-white">${price}</p>
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body justify-center items-center">

                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="border-b-[3px] border-yellow-500 text-yellow-500 rounded-b-lg mt- uppercase px-5 py-4 relative left-1/2 -translate-x-1/2 transition-all duration-500 hover:bg-black ">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;