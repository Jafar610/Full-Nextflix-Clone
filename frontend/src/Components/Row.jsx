import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function Row() {
  return (
    <>
       <div className="w-[300px] h-[400px] bg-cover bg-center relative rounded-md cursor-pointer m-3">
        <h2>Movie Categories</h2>
        <div className='flex justify-start items-center gap-4 mt-3'>
          <div>
            <img
              src="https://i.pinimg.com/1200x/93/bc/eb/93bceb9dc583c4511b9742b182b763aa.jpg"
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/1200x/93/bc/eb/93bceb9dc583c4511b9742b182b763aa.jpg"
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Row