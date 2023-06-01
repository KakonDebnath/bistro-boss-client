import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt, FaUserAlt, FaUserCog } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch("http://localhost:5000/users");
        return res.json();
    })

    // Update user roll
    const handleMakeAdmin = (user) =>{
        console.log(user);
        fetch(`http://localhost:5000/admin/users/${user?._id}`, {
            method: 'PATCH',
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire(
                        'Update Successfully!',
                        `${user?.name} is Now Admin.`,
                        'success'
                    )
                }
            })
    }


    // Handle delete users from database
    const handleDeleteUser = (user) => {
        // console.log(user);
        fetch(`http://localhost:5000/admin/users/${user?._id}`, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'User has been deleted.',
                        'success'
                    )
                }
            })
    }
    return (
        <>
            <Helmet>
                <title>Bistro : All Users</title>
            </Helmet>
            <section className="py-12 bg-slate-100">
                <SectionTitle subHeading="how many??" heading="Manage all users"></SectionTitle>
                <div className="m-10 p-16 bg-white rounded-lg">
                    <h2 className="uppercase font-bold">total user: {users?.length}</h2>
                    <div className="mt-10">
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full text-center">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Roll</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row */}
                                    {
                                        users?.map((user, index) => <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{user?.name}</td>
                                            <td>{user?.email}</td>
                                            <td>{user?.roll === "admin" ? <button onClick={()=>handleMakeAdmin(user)}className="text-error"><FaUserCog size={24}></FaUserCog></button> : <button onClick={()=>handleMakeAdmin(user)}className="text-warning"><FaUserAlt size={24}></FaUserAlt></button>}</td>
                                            <th>
                                                <button onClick={() => handleDeleteUser(user)} className="btn btn-error text-white"><FaTrashAlt></FaTrashAlt></button>
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

export default AllUsers;