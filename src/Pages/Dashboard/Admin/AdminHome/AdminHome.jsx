import useAuth from "../../../../hooks/useAuth";

const AdminHome = () => {
    const {user} = useAuth()
    return (
        <div className="w-full">
            <h2 className="capitalize m-5 text-3xl">Hi, {user?.displayName} Welcome Back!</h2>
        </div>
    );
};

export default AdminHome;