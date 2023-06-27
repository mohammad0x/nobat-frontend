import React from "react";
import axios from "axios";
import Link from "next/link";

export default function Header() {
    return (
        <header className='bg-gray-950 h-4/6 md:h-4/6 lg:h-3/5 text-center pt-14'>
            <h1 className='text-6xl  text-white font-sans'>Nobat</h1>
            <Link href="/search"><input type="search" className='search-border mt-14 rounded-sm w-2/3  p-3 bg-gray-950 font-size placeholder:text-right placeholder:text-gray-300' placeholder='سرویس مورد نظر خود را جستجو کنید...'/>
            </Link>
            <div className='mt-14 px-12 flex'>
                <div className='flex flex-col text-center w-24 items-center mr-5'>
                    <img src="/imageOrg.png" className='rounded-full bg-gray-700 h-24 w-24' alt="category"/>
                    <h1 className='text-white mt-2 pb-6'>آرایشگر</h1>
                </div>
                <div className='flex flex-col text-center w-24 items-center mr-5'>
                    <img src="/imageOrg.png" className='rounded-full bg-gray-700 h-24 w-24' alt="category"/>
                    <h1 className='text-white mt-2 pb-6'>ماساژ</h1>
                </div>
                <div className='flex flex-col text-center w-24 items-center mr-5'>
                    <img src="/imageOrg.png" className='rounded-full bg-gray-700 h-24 w-24' alt="category"/>
                    <h1 className='text-white mt-2 pb-6'>تتو</h1>
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