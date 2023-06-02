import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="flex flex-col justify-center items-center h-screen">
            <h2 className="mb-10">Loading Please Wait ...............</h2>
            <img src="https://i.ibb.co/JpHyCW3/Spinner.gif" />
        </div>
    }

    if(user && isAdmin){
        return children;
    }else {
        return <Navigate to="/" state={{ from: location }} replace={true}></Navigate>
    }
};

export default AdminRoute;