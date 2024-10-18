import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'

function Home() {
    const hrContainer = (
        <>
            <hr className='opacity-10' />
        </>
    )


    return (
        <>
            <div className='max-w-screen-2xl mx-auto md:px-20 sm:px-4' >
                <Navbar />
                <Banner />
                {hrContainer}
                <Freebook />
                {hrContainer}
                <Footer />
            </div>

        </>
    )
}

export default Home