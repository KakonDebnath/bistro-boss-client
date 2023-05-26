import Cover from "../Shared/Cover/Cover";
import contactImg from "../../assets/contact/banner.jpg"
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import { FiPhoneCall, FiClock } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro: Contact Us</title>
            </Helmet>
            <Cover coverImg={contactImg} coverTitle="contact us" coverDetails="Would you like to try a dish?" bgStyle={{ background: "rgba(21, 21, 21,0.6)" }}></Cover>
            <section className="mt-20">
                <SectionTitle heading="our location" subHeading="visit us"></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="border rounded-b-xl">
                        <h4 className="bg-yellow-500 text-white flex justify-center py-5 text-2xl"><FiPhoneCall></FiPhoneCall></h4>
                        <div className="text-center bg-slate-200 m-5 mt-0 p-10 rounded-b-xl space-y-2">
                            <h2 className="font-bold text-2xl">Phone</h2>
                            <p className="text-lg">01700000000</p>
                        </div>
                    </div>
                    <div className="border rounded-b-xl">
                        <h4 className="bg-yellow-500 text-white flex justify-center py-5 text-2xl"><MdLocationPin></MdLocationPin></h4>
                        <div className="text-center bg-slate-200 m-5 mt-0 p-10 rounded-b-xl space-y-2">
                            <h2 className="font-bold text-2xl">Address</h2>
                            <p className="text-lg">Block B, 15/2, PanthaPath, Dhaka</p>
                        </div>
                    </div>
                    <div className="border rounded-b-xl">
                        <h4 className="bg-yellow-500 text-white flex justify-center py-5 text-2xl"><FiClock></FiClock></h4>
                        <div className="text-center bg-slate-200 m-5 mt-0 p-10 rounded-b-xl">
                            <h2 className="font-bold text-2xl">Working Hour</h2>
                            <p className="text-lg">10.00 am to 5.00 pm</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-20">
                <SectionTitle heading="contact-form" subHeading="send us a message"></SectionTitle>
                <div>
                    <form className="bg-slate-100 grid grid-cols-1 md:grid-cols-2 gap-5 p-10">
                        <div className="col-span-2 md:col-span-1">
                            <div>
                                <label className="" htmlFor="">Name*</label>
                            </div>
                            <div>
                                <input className="w-full border-2 border-black focus:border-yellow-500 focus:outline-none rounded-lg py-2 px-3 required" type="text" name="name" />
                            </div>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <div>
                                <label className="" htmlFor="">Email*</label>
                            </div>
                            <div>
                                <input className="w-full border-2 border-black focus:border-yellow-500 focus:outline-none rounded-lg py-2 px-3 required" type="email" name="email" />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div>
                                <label className="" htmlFor="">Phone*</label>
                            </div>
                            <div>
                                <input className="w-full border-2 border-black focus:border-yellow-500 focus:outline-none rounded-lg py-2 px-3 required" type="text" name="phone" />
                            </div>
                        </div>
                        <div className="col-span-2">
                                <textarea className="w-full border-2 border-black focus:border-yellow-500 focus:outline-none rounded-lg py-2 px-3 required" name="message" id="" cols="30" rows="10"></textarea>
                                
                            </div>
                        <div className="place-self-center col-span-2">
                            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-5 rounded-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-500 hover:shadow-2xl">Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;