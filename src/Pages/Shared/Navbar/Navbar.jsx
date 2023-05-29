import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import {FaCartArrowDown} from "react-icons/fa"
import useCart from "../../../hooks/useCart";


const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const [cart] = useCart();
    // console.log(cart); 
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to="/contactUs">Contact Us</Link></li>
        {
            user && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
        }

        <li>
            <Link to="/dashboard/myCart">
                <button className="flex items-center gap-1">
                    <FaCartArrowDown size={24}></FaCartArrowDown>
                    <div className="badge badge-warning">{cart?.length || 0}</div>
                </button>
            </Link>
        </li>
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-black text-white bg-opacity-30 max-w-screen-xl ">
                <div className="navbar-start text-black md:text-white">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-white">BISTRO BOSS</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <p className="mr-3">{user?.email}</p>
                                <Link to="/">
                                    <button onClick={() => { logOutUser() }} className="btn btn-warning">Sign Out</button>
                                </Link>
                            </> :
                            <>
                                <Link to="/login">
                                    <button className="btn btn-ghost">Login</button>
                                </Link>
                            </>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;