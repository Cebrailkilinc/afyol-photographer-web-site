import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import { Pagination, Navigation } from "swiper";
import backroundImage1 from "../assets/backroundImage1.jpg"
import backroundImage2 from "../assets/backroundImage2.jpg"
import backroundImage3 from "../assets/backroundImage3.jpg"

function Slider() {

    return (
        <div className='w-full mx-auto' >
            <h1 className='my-10 max-w-3xl mx-auto flex justify-center font-display4 text-6xl' >Fotoğraf Turu</h1>

            <Swiper
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 2,
                    },
                    928: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    }
                }}
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation   // Next and previous buttons
                autoplay={{ delay: 2000 }}
                pagination={{ clickable: false }} // bottom pointer controller
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide><img className=' mx-auto object-cover h-80 w-80 border' src={backroundImage1} /> </SwiperSlide>
                <SwiperSlide><img className=' mx-auto object-cover h-80 w-80 border' src={backroundImage2} /></SwiperSlide>
                <SwiperSlide><img className=' mx-auto object-cover h-80 w-80 border' src={backroundImage3} /></SwiperSlide>
                <SwiperSlide><img className=' mx-auto object-cover h-80 w-80 border' src={backroundImage1} /> </SwiperSlide>
                <SwiperSlide><img className=' mx-auto object-cover h-80 w-80 border' src={backroundImage2} /></SwiperSlide>
                <SwiperSlide><img className=' mx-auto object-cover h-80 w-80 border' src={backroundImage3} /></SwiperSlide>
                <SwiperSlide><img className=' mx-auto object-cover h-80 w-80 border' src={backroundImage1} /> </SwiperSlide>
                <SwiperSlide><img className=' mx-auto object-cover h-80 w-80 border' src={backroundImage2} /></SwiperSlide>
                <SwiperSlide><img className=' mx-auto object-cover h-80 w-80 border' src={backroundImage3} /></SwiperSlide>
                <SwiperSlide><img className=' mx-auto object-cover h-80 w-80 border' src={backroundImage1} /> </SwiperSlide>
                <SwiperSlide><img className=' mx-auto object-cover h-80 w-80 border' src={backroundImage2} /></SwiperSlide>
                <SwiperSlide><img className=' mx-auto object-cover h-80 w-80 border' src={backroundImage3} /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider;