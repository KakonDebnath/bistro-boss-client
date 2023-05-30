import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyCart = () => {
    const [cart, refetch] = useCart()
    // console.log(cart);
    const totalPrice = cart?.reduce((sum, item) => item.price + sum, 0);


    const handleDelete = (id) => {
        // console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <>
            <Helmet>
                <title>Bistro : My Cart</title>
            </Helmet>
            <section className="py-12 bg-slate-100">
                <SectionTitle subHeading="my cart" heading="WANNA ADD MORE?"></SectionTitle>
                <div className="m-10 p-16 bg-white rounded-lg">
                    <div className="flex justify-around items-center">
                        <h2 className="uppercase font-bold">total order: {cart?.length}</h2>
                        <h2 className="uppercase font-bold">total price $ {totalPrice.toFixed(2)}</h2>
                        <button className="btn btn-warning">pay</button>
                    </div>
                    <div className="mt-10">
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full text-center">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Food</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row */}
                                    {
                                        cart?.map((item, index) => <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={item?.image} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{item?.name}</td>
                                            <td className="text-end">$ {item?.price}</td>
                                            <th>
                                                <button onClick={() => handleDelete(item?._id)} className="btn btn-error text-white"><FaTrashAlt></FaTrashAlt></button>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyCart;