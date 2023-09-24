"use client"
import HairStyle from '../../components/hairStyle'
import Footer from "@/app/components/footer/page";
import React from "react";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// end import swiper

export default function Search(req , res){
    const object =  req.searchParams
    let data = getDate(object)

    function getDate(object){
        for(let obj in object){
            var jsObject =  JSON.parse(obj);
        }
        return jsObject
    }

    return (
        <html lang = "en" >
            <head>
                <meta charset = "UTF-8"/>
                <meta name = "viewport" content = "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta content = "ie=edge"/>
                <title > Document < /title>
            </head>
            <body dir='rtl'>
                <header className='bg-gray-950 h-40 flex justify-center items-center'>
                    <input type="search" className='search-border rounded-sm w-2/3  p-3 bg-gray-950 font-size placeholder:text-right placeholder:text-gray-300' placeholder='سرویس مورد نظر خود را جستجو کنید...'/>
                </header>
                <section className='px-8 py-6'>
                    <h1 className='text-3xl font-bold'>Service</h1>
                    <Swiper className='mt-5'>
                        {newService.map(item => {
                            return (
                                <SwiperSlide className='w-20rem'>
                                    <HairStyle data={item} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </section>
                <div className="w-full border-t pb-3 bt-3"></div>
                <section className='px-8 py-6'>
                    <h1 className='text-3xl font-bold'>پیشنهاد برای شما</h1>
                    <Swiper className='mt-5'>
                        {newService.map(item => {
                            return (
                                <SwiperSlide className='w-20rem'>
                                    <HairStyle data={item} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>                </section>
                <Footer/>
            </body>
        </html>
    )
}