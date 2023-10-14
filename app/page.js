"use client";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// end import swiper
import './globals.css';
import Header from "@/app/components/header/page";
import HairStyle from "@/app/components/hairStyle";
import Footer from "@/app/components/footer/page";


export default function Home(req, res) {
    const object = req.searchParams
    let data = getDate(object)

    function getDate(object) {
        for (let obj in object) {
            var jsObject = JSON.parse(obj);
        }
        return jsObject
    }

    const category = []
    for (let cate of data.category) {
        category.push(cate)
    }

    const create = []
    for (let cate of data.Create_Service) {
        create.push(cate)
    }

    return (
        <html>
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <title>نوبت</title>
            </head>
            <body dir='rtl'>
                <Header data={category}/>
                <section className='py-6 px-3 h-4/6 md:h-4/6 lg:h-3/5 sm:px-8'>
                    <div className='relative'>
                        <h1 className='text-3xl font-bold'>پیشنهاد برای شما</h1>
                    </div>
                    <Swiper className='mt-5 mb-5'>
                        {create.map(item => {
                            return (
                                <SwiperSlide className='w-20rem'>
                                     <HairStyle data={item}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </section>
                <div className="w-full border-t pb-3 bt-3"></div>
                <section className='py-6 px-3 sm:px-8 mb-10 pt-3 h-4/6 md:h-4/6 carousel-warp'>
                    <div className='relative'>
                        <h1 className='text-3xl font-bold'>سرویس دهنده ها</h1>
                    </div>
                    <Swiper className='mt-5 mb-5'>
                        {create.map(item => {
                            return (
                                <SwiperSlide className='w-20rem'>
                                    <HairStyle data={item}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </section>
                <Footer/>
            </body>
        </html>
    )
}