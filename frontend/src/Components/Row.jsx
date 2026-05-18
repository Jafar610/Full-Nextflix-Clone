import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Row({title}) {
  return (
    <>
      <div className="flex justify-center items-center bg-[#121212] w-full text-white text-3xl font-bold">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>

          <Swiper
            className="py-4"
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={5}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="flex items-center justify-center w-48 h-72">
                <img
                  src="https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
                  alt="Movie 1"
                  className="w-full h-full object-cover rounded-lg flex-1"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex items-center justify-center w-48 h-72">
                <img
                  src="https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
                  alt="Movie 1"
                  className="w-full h-full object-cover rounded-lg flex-1"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex items-center justify-center w-48 h-72">
                <img
                  src="https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
                  alt="Movie 1"
                  className="w-full h-full object-cover rounded-lg flex-1"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex items-center justify-center w-48 h-72">
                <img
                  src="https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
                  alt="Movie 1"
                  className="w-full h-full object-cover rounded-lg flex-1"
                />
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex items-center justify-center w-48 h-72">
                <img
                  src="https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
                  alt="Movie 1"
                  className="w-full h-full object-cover rounded-lg flex-1"
                />
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex items-center justify-center w-48 h-72">
                <img
                  src="https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
                  alt="Movie 1"
                  className="w-full h-full object-cover rounded-lg flex-1"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Row;
