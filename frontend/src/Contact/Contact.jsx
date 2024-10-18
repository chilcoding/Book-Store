import React from 'react';
import Navbar from '../components/Navbar';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function Contact() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        toast.success("Thank you for contact with us 😊 ")
        reset();
    };

    return (
        <>
            <Navbar />
            <div className='contact-container flex justify-center items-center h-screen'>
                <div className='md:w-[25vw] md:h-[35vw]  shadow-xl shadow-black rounded-md p-5 space-y-4 bg-black-100'>
                    <h1 className='text-3xl'>Contact Us</h1>
                    <form onSubmit={handleSubmit(onSubmit)} method="post">
                        <div className='input-container space-y-4'>
                            <div className="space-y-2">
                                <span>Name</span> <br />
                                <input type="text" name='name' placeholder='Enter your full name' className='p-2 w-[100%] bg-white rounded-md' {...register("name", { required: true })} />
                                <br />{errors.name && <span className="text-red-500">Name is required</span>}
                            </div>

                            <div className="space-y-2">
                                <span>Email</span> <br />
                                <input type="email" name='email' placeholder='Email address' className='p-2 w-[100%] bg-white rounded-md' {...register("email", { required: true })} />
                                <br />{errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="space-y-2">
                                <span>Message</span> <br />
                                <textarea name="msg" id='msg' placeholder='Message' className='p-2 w-[100%] bg-white rounded-md' {...register("msg", { required: true })} />
                                <br />{errors.msg && <span className="text-red-500">Message is required</span>}
                            </div>
                            <div>
                                <button className="btn btn-active btn-secondary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
