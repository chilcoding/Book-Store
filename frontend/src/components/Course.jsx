import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import {Link} from "react-router-dom"
import axios from "axios"

function Course() {

    const [book,setBook] = useState([]);
    useEffect(()=>{
      const getBook =async () => {
        try {
          const bookRes = await axios.get("http://localhost:5000/book")
          console.log(bookRes.data)
          setBook(bookRes.data)
        } catch (error) {
          console.error(error)
        }
      }
      getBook();
    },[])


  return (
    <div className='h-auto w-full text-center'>
      <div className="top-container my-28">
        <h1 className='text-3xl font-semibold'>We're delighted to have you  <span className='text-pink-500'>here! :)</span></h1>
        <p className=' p-3 md:px-32 md:py-8 '>Discover expert-led courses designed to help you grow, whether you're starting fresh or advancing your career. Learn at your own pace with flexible, comprehensive content and hands-on projects. Gain practical skills, boost your confidence, and earn certifications that showcase your expertise in today's competitive world. Unlock your potential today!</p>
        <Link to="/">
          <button className='bg-pink-500 text-white px-3 py-2 rounded-md hover:scale-110 transition-all duration-500 ease-in-out'>Back</button>
        </Link>
      </div>


      <div className="cart-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
          book.map((items) => (
            <Cart key={items.id} items={items} />
          ))
        }
      </div>

    </div>
  )
}

export default Course