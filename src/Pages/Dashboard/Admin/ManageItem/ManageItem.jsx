import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import useMenu from "../../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxios from "../../../../hooks/useAxios";


const ManageItem = () => {
    const [AXIOS] = useAxios();
    const [menu, loading, refetch] = useMenu()
    // Handle deleting a menu
    const handleDelete = (id) => {
        console.log(id);
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
                AXIOS.delete(`/menu/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Menu Deleted Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            }
        })
    }
    // Handle Edit a menu item
    const handleEdit = (id) => {
        console.log(id);
    }

    return (
        <>
            <Helmet>
                <title>Bistro : Manage Item</title>
            </Helmet>
            <section className="py-12 bg-slate-100">
                <SectionTitle subHeading="hurry up ?" heading="MANAGE ALL ITEMS"></SectionTitle>
                <div className="m-10 p-16 bg-white rounded-lg">
                    <h2 className="uppercase font-bold">
                        total items:
                    </h2>
                    <div className="mt-10">
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full text-center">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Item Image</th>
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        <th>Category</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row */}
                                    {
                                        loading &&
                                        <tr>
                                            <td>
                                                Loading Please Wait ...............
                                            </td>
                                        </tr>
                                    }
                                    {
                                        menu?.map((item, index) => <tr key={item._id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{item?.name}</td>
                                            <td className="text-end">$ {item?.price}</td>
                                            <td>{item?.category}</td>
                                            <td>
                                                <div className="flex gap-4 items-center justify-center">
                                                    <button onClick={() => handleEdit(item._id)} className="text-sky-500 hover:text-sky-600"><FiEdit size={20} /></button>
                                                    <button onClick={() => handleDelete(item._id)} className="text-red-500 hover:text-red-600"><FaTrashAlt size={20} /></button>
                                                </div>
                                            </td>
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

export default ManageItem;