import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "axios"
import toast from 'react-hot-toast';

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        }
        await axios.post("http://localhost:5000/user/singup", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success('Signup successful! click on login');
                }
                localStorage.setItem("Users",JSON.stringify(res.data.createdUser))
            }).catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.message);
                }

            })
    };

    return (
        <>
            <div className='flex justify-center items-center h-screen w-screen'>
                <div id="my_modal_3" className=''>
                    <div className="modal-box w-screen relative">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <Link to="/"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            >
                                ✕
                            </Link>
                            <h3 className="font-bold text-2xl mb-10">Signup</h3>
                            <div className='space-y-4'>
                                <div className='space-y-1'>
                                    <span>Full Name</span>
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-[80%] p-2 rounded-md outline-none"
                                        {...register("fullname", { required: true })}
                                    />
                                    <br />
                                    {errors.fullname && <span className="text-red-500">Name is required</span>}
                                </div>
                                <div className='space-y-1'>
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
                                <div className='space-y-1'>
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
                                <div className='flex justify-between items-center md:p-10'>
                                    <button className='bg-pink-400 text-white px-3 py-1 rounded-md'>Signup</button>
                                    <span>
                                        Have an account?
                                        <Link to="/" className='text-blue-500 underline'>Login</Link>
                                    </span>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
