import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { BiError } from "react-icons/bi";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";




const SignUp = () => {
    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef();
    const { createNewUser, updateUserProfile, googleSignIn, errorMsg, setErrorMsg } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setErrorMsg("")
        createNewUser(data.email, data.password)
            .then((result) => {
                console.log(result.user);
                if (result.user) {
                    updateUserProfile(data.name, data.photo)
                        .then(() => {
                            const savedUser = {
                                name: data.name, email: data.email
                            }
                            fetch('http://localhost:5000/users', {
                                method: 'POST',
                                headers: {
                                    "content-type": "application/json",
                                },
                                body: JSON.stringify(savedUser)
                            }).then(res => res.json())
                                .then(data => {
                                    console.log(data);
                                    if (data.insertedId) {
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'success',
                                            title: 'Registration Successfully',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        navigate(from, { replace: true });
                                    }
                                })
                        })
                }

            })
            .catch((err) => {
                console.log(err);
                if (err) {
                    console.log(err.message);
                    setErrorMsg(err.message);
                }
            })
    };

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    // Handle Sign up user
    // const handleSignUp = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const photo = form.photo.value;
    //     const password = form.password.value;

    //     // create a new user
    //     createNewUser(email, password)
    //         .then((result) => {
    //             console.log(result.user);
    //             if (result.user) {
    //                 updateUserProfile(name, photo)
    //                 navigate("/");
    //             }

    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })

    // }
    // Captcha validation
    const handleValidateCaptcha = (e) => {
        e.preventDefault();
        const user_captcha_input = (captchaRef.current.value);
        if (validateCaptcha(user_captcha_input) === true) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    }

    // google sign in
    const handleGoogleSignIn = () => {
        console.log("Clicked");
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const savedUser = {
                    name: result.user.displayName, email: result.user.email
                }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(savedUser)
                }).then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Registration Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left md:w-1/2">
                    <h1 className="text-5xl font-bold">Sign UP Now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>

                <div className="card flex-shrink-0 md:w-5/12 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        {
                            errorMsg && <div className="alert alert-warning shadow-lg">
                                <div>
                                    <BiError size={24}></BiError>
                                    <span>{errorMsg}</span>
                                </div>
                            </div>
                        }
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                                {errors.password && <span className="text-red-500">This field is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input {...register("photo")} placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <select {...register("gender")}>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select>
                            </div>

                            <div>
                                <LoadCanvasTemplate />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Captcha</span>
                                </label>
                                <input ref={captchaRef} type="text" name="captcha" placeholder="Type Captcha From Above" className="input input-bordered" />
                                <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-3">Validate</button>
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disabled} type="submit" className="btn btn-primary">Sign Up Now!</button>
                            </div>
                            <div>
                                <p className="text-center text-yellow-600">All ready registered? <Link to="/login"><span className="hover:font-bold">Log in hare</span></Link></p>
                            </div>
                        </form>
                        <div>
                            <p className="text-center">Or sign in with</p>
                        </div>
                        <div className="flex justify-around md:w-1/2 w-full mx-auto ">

                            <button onClick={handleGoogleSignIn} className="border-2 border-black p-2 rounded-full transition-all duration-300 cursor-pointer hover:bg-black hover:text-white"><FaGoogle></FaGoogle></button>
                            <button className="border-2 border-black p-2 rounded-full transition-all duration-300 cursor-pointer hover:bg-black hover:text-white"><FaGithub></FaGithub></button>
                            <button className="border-2 border-black p-2 rounded-full transition-all duration-300 cursor-pointer hover:bg-black hover:text-white"><FaFacebook></FaFacebook></button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Normal Form */}
            {/* <form onSubmit={handleSignUp}>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left md:w-1/2">
                        <h1 className="text-5xl font-bold">Sign UP Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 md:w-5/12 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div>
                                <LoadCanvasTemplate />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Captcha</span>
                                </label>
                                <input ref={captchaRef} type="text" name="captcha" placeholder="Type Captcha From Above" className="input input-bordered" />
                                <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-3">Validate</button>
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disabled} type="submit" className="btn btn-primary">Sign Up Now!</button>
                            </div>
                            <div>
                                <p className="text-center text-yellow-600">All ready registered? <Link to="/login"><span className="hover:font-bold">Log in hare</span></Link></p>
                            </div>
                            <div>
                                <p className="text-center">Or sign in with</p>
                            </div>
                            <div className="flex justify-around md:w-1/2 w-full mx-auto ">

                                <button className="border-2 border-black p-2 rounded-full transition-all duration-300 cursor-pointer hover:bg-black hover:text-white"><FaGoogle></FaGoogle></button>
                                <button className="border-2 border-black p-2 rounded-full transition-all duration-300 cursor-pointer hover:bg-black hover:text-white"><FaGithub></FaGithub></button>
                                <button className="border-2 border-black p-2 rounded-full transition-all duration-300 cursor-pointer hover:bg-black hover:text-white"><FaFacebook></FaFacebook></button>
                            </div>
                        </div>
                    </div>
                </div>
            </form> */}
        </div>
    );
};

export default SignUp;