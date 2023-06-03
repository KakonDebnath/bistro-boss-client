import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxios from "../../../../hooks/useAxios";
import Swal from "sweetalert2";



const AddItem = () => {
    const [AXIOS] = useAxios();
    const imgbbApiKey = import.meta.env.VITE_IMGBB_APIKEY;
    const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`
    const { register, handleSubmit, formState: { errors }, reset} = useForm();
    const onSubmit = async data => {
        data.price = parseFloat(data.price);
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(imgHostingUrl, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(res => {
                if (res.success) {
                    const imgUrl = res.data.display_url;
                    data.image = imgUrl;
                    // console.log(data);
                    // fetch("http://localhost:5000/addMenu", {
                    //     method: "POST",
                    //     headers: {
                    //         "content-type": "application/json",
                    //     },
                    //     body: JSON.stringify(data)
                    // })
                    // .then(res=>res.json())
                    // .then(result =>{
                    //     console.log(result);
                    //  if (result.data.insertedId) {
                    //     Swal.fire({
                    //         position: 'center',
                    //         icon: 'success',
                    //         title: 'Your work has been saved',
                    //         showConfirmButton: false,
                    //         timer: 1500
                    //     })
                    // }
                    // })
                    AXIOS.post("/addMenu", data)
                        .then(result => {
                            if (result.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Your work has been saved',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    };
    return (
        <>
            <Helmet>
                <title>Bistro : Add Item</title>
            </Helmet>
            <section className="py-12 bg-slate-100">
                <SectionTitle subHeading="what's new?" heading="Add an Item"></SectionTitle>
                <div className="m-4 md:m-10 p-5 md:p-16 bg-white rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="form-control w-full md:col-span-2">
                                <label className="label">
                                    <span className="label-text">Recipe Name*</span>
                                </label>
                                <input {...register("name", { required: true, maxLength: 120 })} type="text" placeholder="Type here" className="input input-bordered w-full" />
                                {errors.name && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Category *</span>
                                </label>
                                <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                                    <option disabled>Pick one</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drinks">Drink</option>
                                </select>
                                {errors.category && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price*</span>
                                </label>
                                <input {...register("price", { required: true })} type="number" placeholder="Type here" className="input input-bordered w-full" />
                                {errors.price && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control md:col-span-2">
                                <label className="label">
                                    <span className="label-text">Recipe Details*</span>
                                </label>
                                <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered textarea-lg w-full" placeholder="Details" rows="5"></textarea>
                                <label className="label">
                                </label>
                                {errors.details && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="md:col-span-2">
                                <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
                            </div>
                            <div>
                                <button className="transition-all duration-300 flex items-center gap-2 bg-gradient-to-r from-[#835D23] to-[#B58130] text-white py-3 px-5  hover:bg-gradient-to-r hover:from-[#B58130] hover:to-[#835D23]">Add Item <FaUtensils /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default AddItem;