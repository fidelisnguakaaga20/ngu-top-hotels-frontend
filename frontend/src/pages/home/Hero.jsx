import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import Img1 from "../../assets/hero-carousel/img1.jpg"
import Img2 from "../../assets/hero-carousel/img2.jpg"
import Img3 from "../../assets/hero-carousel/img3.jpg"
import Img4 from "../../assets/hero-carousel/img4.jpg"


import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

const hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center md-gap-14 gap-8'>
        <div className='md:w-1/2 w-full text-center'>
            <h1 className='md:text-5xl text-3xl font-bold md:leading-tight'>NGU-Top HOTELS with pools Near Me</h1>
            <p className='py-4'>A comfortable and serene place to relax, do vacation, lodge, visit, party and sleep over with friends and family.</p>
        </div>
 
        <div className='md:w-1/2 w-full mx-auto'>
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 1500,
                disAbleOnInteraction: false,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: { 
                    slidesPerView: 1,
                    spaceBetween: 40,
                },
                1024: { 
                    slidesPerView: 1,
                    spaceBetween: 50,
                },
            }}

            modules={[Pagination, Autoplay]} className="mySwiper">
        <SwiperSlide>
            <img src={Img1} alt="" className='w-fulll lg:h-[420px] sm:h-96 h-80'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Img2} alt="" className='w-fulll lg:h-[420px] sm:h-96 h-80'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Img3} alt="" className='w-fulll lg:h-[420px] sm:h-96 h-80'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Img4} alt="" className='w-fulll lg:h-[420px] sm:h-96 h-80'/>
        </SwiperSlide>
       
      </Swiper>

        </div>
    </div>
  )
}

export default hero