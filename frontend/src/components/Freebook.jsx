import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cart from './Cart';
import axios from "axios"


const Freebook = () => {

  const [book,setBook] = useState([]);
    useEffect(()=>{
      const getBook =async () => {
        try {
          const bookRes = await axios.get("http://localhost:5000/book")
          const bookData = bookRes.data.filter((data) => data.category === "Free")
          setBook(bookData)
        } catch (error) {
          console.error(error)
        }
      }
      getBook();
    },[])

  // const filterData = freeList.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <div className='px-6 py-6'>
        <h1 className='text-2xl text-pink-600 font-semibold'>Free Offer Courses</h1>
        <p className='text-sm md:text-lg'>Get your free books today and explore a world of captivating stories without spending a dime!</p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {book.map((items) => (
            <div key={items.id}> 
              <Cart items={items} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Freebook;
