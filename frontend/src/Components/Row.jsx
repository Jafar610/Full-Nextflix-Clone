import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { requests } from "../api/tmdb";
import { useEffect, useState } from "react";
import axios from "axios";

function Row() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(requests.popular);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div className="bg-[#121212] p-4 text-white">
        <div className="w-[300px] h-[400px] bg-cover bg-center relative rounded-md cursor-pointer m-3">
          <h2 className="text-xl font-bold mb-2">Movie Categories</h2>

          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <div className="flex justify-start items-center gap-4 mt-3">
              <SwiperSlide>
                <div>
                <img
                  src="https://i.pinimg.com/1200x/93/bc/eb/93bceb9dc583c4511b9742b182b763aa.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                <img
                  src="https://i.pinimg.com/1200x/93/bc/eb/93bceb9dc583c4511b9742b182b763aa.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                <img
                  src="https://i.pinimg.com/1200x/93/bc/eb/93bceb9dc583c4511b9742b182b763aa.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              </SwiperSlide>
              
              
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Row;
