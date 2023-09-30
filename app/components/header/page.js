import React from "react";
import axios from "axios";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";

export default function Header(data) {
    let list = data.data
    return (
        <header className='bg-gray-950 h-4/6 md:h-4/6 lg:h-3/5 text-center pt-14'>
            <h1 className='text-6xl  text-white font-sans'>Nobat</h1>
            <Link href="/search"><input type="search" className='search-border mt-14 rounded-sm w-2/3  p-3 bg-gray-950 font-size placeholder:text-right placeholder:text-gray-300' placeholder='سرویس مورد نظر خود را جستجو کنید...'/></Link>
            <Swiper className='mt-14 mx-4 flex items-center justify-center h-max'>
                {list.map(item =>{
                    const categoryLink = 'categoryService/'+ item.id
                    return (
                        <SwiperSlide className='w-6rem'>
                            <Link href={categoryLink} className='flex flex-col text-center w-26 items-center'>
                                <img src={item.image} className='rounded-full bg-gray-700 h-26 w-26' alt="category"/>
                                <h1 className='text-white mt-2 pb-6'>{item.title}</h1>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </header>
    )
}

async function getServiceSlide() {
    const {data} = await axios.get('http://127.0.0.1:8000/api/')
    console.log(data)
    return data
}