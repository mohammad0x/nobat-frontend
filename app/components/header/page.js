import React from "react";
import axios from "axios";

export default function Header() {
    return (
        <header className='bg-gray-950 h-3/5 text-center pt-14 pb-'>
            <h1 className='text-6xl text-white'>نوبت</h1>
            <a href="#"><input type="search" className='border border-amber-50 rounded-lg w-11/12 h-9 p-3 mt-16 bg-gray-950 placeholder:text-right placeholder:text-white' placeholder='سرویس مورد نظر خود را جستجو کنید'/></a>
            <div className='mt-14 px-12'>
                <div className='flex flex-col text-center'>
                    <img src="" className='rounded-full bg-gray-700 h-24 w-24' alt="category"/>
                    <h1 className='text-white'>مدل المانی</h1>
                </div>
            </div>
        </header>
    )
}

async function getServiceSlide() {
    const {data} = await axios.get('http://127.0.0.1:8000/api/')
    console.log(data)
    return data
}