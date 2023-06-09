import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import {  useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";



const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef();
    const { user, logInUser, googleSignIn } = useAuth()
    const location = useLocation()
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    // Handle Captcha Validation
    const handleValidateCaptcha = (e) => {
        e.preventDefault();
        const user_captcha_input = (captchaRef.current.value);
        if (validateCaptcha(user_captcha_input) === true) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    // Handle login
    const handleLogin = (e) => {
        if (user) {
            alert("All ready login as: " + user.email)
            navigate('/');
        }
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email, password)
            .then(() => {
                // const currentUser = result.user;
                navigate(from, { replace: true });
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    // google sign in
    const handleGoogleSignIn = () => {
        // console.log("Clicked");
        googleSignIn()
            .then(result => {
                // console.log(result.user);
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
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 md:w-5/12 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
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
                                <button disabled={disabled} type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p className="text-center text-yellow-600">New hare? <Link to="/signUp"><span className="hover:font-bold">Create A New Account</span></Link></p>
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
        </div>
    );
};

export default Login;