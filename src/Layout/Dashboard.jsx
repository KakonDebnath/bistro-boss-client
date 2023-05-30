import { NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaCalendarCheck, FaHouseUser, FaShoppingCart, FaWallet } from "react-icons/fa";
import { GrMail, GrMenu, GrShop } from "react-icons/gr";
import useCart from "../hooks/useCart";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const [cart] = useCart()
    return (
        <>
            <Helmet>
                <title>Bistro : Dashboard</title>
            </Helmet>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 bg-[#D1A054] text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <h2 className="text-center text-3xl text-white mb-12">Bistro Boss Restaurant</h2>
                        <li>
                            <NavLink
                                to="/dashboard/userHome"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <FaHouseUser></FaHouseUser> User Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/reservation"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <FaCalendarAlt></FaCalendarAlt> Reservation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/paymentHistory"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <FaWallet></FaWallet>  Payment history
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/myCart"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <FaShoppingCart></FaShoppingCart>  My Cart
                                <span className="badge">+{cart?.length || 0}</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/addReview"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Add Review
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/myBooking"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <FaCalendarCheck></FaCalendarCheck> My Booking
                            </NavLink>
                        </li>
                        <div className="divider"></div>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <FaHouseUser></FaHouseUser> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/menu"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <GrMenu></GrMenu>  Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/order/salad"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <GrShop></GrShop> Order
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contactUs"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <GrMail></GrMail> Contact Us
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </div>

        </>
    );
};

export default Dashboard;