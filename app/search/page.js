"use client";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// end import swiper
import React from "react";
import HairStyle from '../components/hairStyle'
import Footer from "@/app/components/footer/page";
export default function Search(req , res){
    const obj =  req.searchParams
    let y = getDate(obj)
    let newService = y.CreateServiceNew
    let scoreService = y.CreateServiceScore

    function getDate(obj){
        for(let profile in obj ){
            var jsObject =  JSON.parse(profile);
        }
        return jsObject
    }

    console.log(newService)

    return (
    <html lang = "en" >
        <head>
            <meta charset = "UTF-8"/>
            <meta name = "viewport" content = "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
            <meta content = "ie=edge"/>
            <title > Document < /title>
        </head>
        <body dir='rtl'>
           <form method="POST" className='bg-gray-950 h-40 flex justify-center items-center text-gray-300'>
               <input type="search" name='search' className='search-border rounded-sm w-2/3  p-3 bg-gray-950 font-size placeholder:text-right placeholder:text-gray-300' placeholder='سرویس مورد نظر خود را جستجو کنید...'/>
           </form>
            <section className='px-4 md:px-8 py-3'>
                <h1 className='text-3xl font-bold'>بالاترین امتیاز</h1>
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
           <section className='px-8 py-3'>
                <h1 className='text-3xl font-bold'>تازه ها</h1>
                <Swiper className='mt-5 mb-12'>
                   {newService.map(item => {
                       return (
                            <SwiperSlide className='w-20rem'>
                                <HairStyle data={item} />
                            </SwiperSlide>
                       )
                   })}
                </Swiper>
            </section>
            <Footer title='search'/>
        </body>
    </html>
    )
}