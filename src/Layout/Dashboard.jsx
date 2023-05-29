import { NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaCalendarCheck, FaHouseUser, FaShoppingCart, FaWallet } from "react-icons/fa";
import { GrMail, GrMenu, GrShop } from "react-icons/gr";

const Dashboard = () => {
    return (
        <>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <h2>Bistro Boss Restaurant</h2>
                        <li>
                            <NavLink
                                to="/dashboard/userHome"
                                className={({ isActive }) =>
                                    isActive ? "text-white" : ""
                                }
                            >
                               <FaHouseUser></FaHouseUser> User Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/reservation"
                                className={({ isActive }) =>
                                    isActive ? "text-white" : ""
                                }
                            >
                               <FaCalendarAlt></FaCalendarAlt> Reservation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/paymentHistory"
                                className={({ isActive }) =>
                                    isActive ? "text-white" : ""
                                }
                            >
                              <FaWallet></FaWallet>  Payment history
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/myCart"
                                className={({ isActive }) =>
                                    isActive ? "text-white" : ""
                                }
                            >
                              <FaShoppingCart></FaShoppingCart>  My Cart
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/addReview"
                                className={({ isActive }) =>
                                    isActive ? "text-white" : ""
                                }
                            >
                                Add Review
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/myBooking"
                                className={({ isActive }) =>
                                    isActive ? "text-white" : ""
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
                                    isActive ? "text-white" : ""
                                }
                            >
                              <FaHouseUser></FaHouseUser> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/menu"
                                className={({ isActive }) =>
                                    isActive ? "text-white" : ""
                                }
                            >
                             <GrMenu></GrMenu>  Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/order/salad"
                                className={({ isActive }) =>
                                    isActive ? "text-white" : ""
                                }
                            >
                              <GrShop></GrShop> Order
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contactUs"
                                className={({ isActive }) =>
                                    isActive ? "text-white" : ""
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