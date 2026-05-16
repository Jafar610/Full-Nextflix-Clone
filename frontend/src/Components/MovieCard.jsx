import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import {autoplay} from "swiper";
function MovieCard() {
  return (
    <>
      <div className="w-[200px] h-[300px] bg-cover bg-center relative rounded-md cursor-pointer">
        <h2>Movie Categories</h2>
        <div className='flex justify-start items-center gap-2'>
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
  );
}

export default MovieCard;
