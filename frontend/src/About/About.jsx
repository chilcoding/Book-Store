import React from 'react'
import Navbar from '../components/Navbar'

function About() {
  return (

    <div>
        <Navbar/>
        <div className='w-full h-full md:max-h-[50vh] flex flex-col-reverse sm:flex-row mt-32 md:mb-36'>
                <div className="left w-full sm:w-[50%] py-10 sm:py-24 px-5 space-y-5">
                    <div>
                        <h1 className='text-xl md:text-3xl font-bold'>
                            Hello, Welcomes here to learn <br /> something <span className='text-pink-500'>new everything!!!</span>
                        </h1>
                    </div>
                    <div className='text-sm sm:text-base'>
                        <p>Discover your next favorite book at our online bookstore! With a vast selection of genres, exclusive discounts, and a user-friendly experience, we make reading accessible and enjoyable. Enjoy secure shopping and fast delivery right to your doorstep. Join our community of book lovers today and let the adventure begin!</p>
                    </div>
                </div>

                <div className="right w-full sm:w-[50%] flex justify-center items-center">
                    <img src="/banner-image.png" alt="banner-image" className='md:w-[80%] w-[40%] h-auto object-cover' />
                </div>

            </div>

        </div>

  )
}

export default About