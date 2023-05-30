import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className="flex flex-col justify-center items-center h-screen">
            <h2 className="mb-10">Loading Please Wait ...............</h2>
            <img src="https://i.ibb.co/JpHyCW3/Spinner.gif" />
        </div>
    }
    if (user) {
        return children;
    } else {
        return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
    }
};

export default PrivateRoute;