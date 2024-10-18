import React from 'react';

const Banner = () => {
    return (
        <>
            <div className='w-full h-full md:max-h-[50vh] flex flex-col-reverse sm:flex-row mt-20 md:mb-36'>
                <div className="left w-full sm:w-[50%] py-10 sm:py-24 px-5 space-y-5">
                    <div>
                        <h1 className='text-xl md:text-3xl font-bold'>
                            Hello, Welcomes here to learn <br /> something <span className='text-pink-500'>new everything!!!</span>
                        </h1>
                    </div>
                    <div className='text-sm sm:text-base'>
                        <p>Discover your next favorite book at our online bookstore! With a vast selection of genres, exclusive discounts, and a user-friendly experience, we make reading accessible and enjoyable. Enjoy secure shopping and fast delivery right to your doorstep. Join our community of book lovers today and let the adventure begin!</p>
                    </div>

                    <div className='flex items-center border w-[80%] sm:w-[60%] gap-2 p-1 rounded-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>

                        <label htmlFor="" className='flex-grow'>
                            <input type="text" name='email' placeholder='Enter your email to login' className="w-full p-1 bg-transparent border-none outline-none rounded-md" />
                        </label>
                    </div>

                    <div className="secondery-btn mb-10">
                        <button className="btn btn-secondary">Secondary</button>
                    </div>
                </div>

                <div className="right w-full sm:w-[50%] flex justify-center items-center">
                    <img src="/banner-image.png" alt="banner-image" className='md:w-[80%] w-[40%] h-auto object-cover' />
                </div>

            </div>

        </>
    );
}

export default Banner;
