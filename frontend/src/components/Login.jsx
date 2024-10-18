import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from "react-hot-toast"

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async(data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        await axios.post("http://localhost:5000/user/login", userInfo)
            .then((res) => {
                if (res.data) {
                    toast.success('Login Successfully!');
                    
                }
                window.location.reload()
                localStorage.setItem("Users",JSON.stringify(res.data.user))
            }).catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.message);
                }

            })
            const dialog = document.getElementById("my_modal_3");
            dialog.close();
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-backdrop backdrop-blur-sm"></div>

                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <button 
                            type="button" 
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                            ✕
                        </button>
                        <h3 className="font-bold text-2xl mb-10">Login</h3>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <span>Email</span>
                                <br />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-[80%] p-2 rounded-md outline-none"
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="space-y-1">
                                <span>Password</span>
                                <br />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-[80%] p-2 rounded-md outline-none"
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && <span className="text-red-500">Password is required</span>}
                            </div>
                            <div className="flex justify-between items-center md:p-10">
                                <button className="bg-pink-400 text-white px-3 py-1 rounded-md">
                                    Login
                                </button>
                                <span>
                                    Not Registered?{' '}
                                    <Link to="/signup" className="text-blue-500 underline">
                                        Signup
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}
 
export default Login;
