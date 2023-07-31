'use client'
import React from "react";
import Link from "next/link";
import HeaderHair from "@/app/hairStyle/header";
import About from "@/app/hairStyle/about";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Post() {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta content="ie=edge"/>
                <title> Document < /title>
            </head>
            <body dir='rtl'>
                <HeaderHair />
                <Collapse />
                <section className='bg-gray-950 flex flex-col items-center justify-center py-6'>
                    <Posts />
                </section>
                <About />
            </body>
        </html>
    )
}

function Posts(){
    return (
        <div className='w-72 h-72 relative rounded-lg mb-5 bg-gray-100'>
            <img src="/Landscape-Color.jpg" alt="post" className='w-full h-full bg-cover rounded-t-lg'/>
            <div className="flex items-center justify-around absolute right-2 bottom-3 text-sm">
                <form method='POST' className='w-20 h-12 rounded-xl border border-gray-800 flex items-center justify-center ml-2'>
                    <button>
                        <div>
                            Like
                        </div>
                    </button>
                </form>
                <form method='POST' className='w-20 h-12 rounded-xl border border-gray-800 flex items-center justify-center'>
                    <button>
                        <div>
                            DisLike
                        </div>
                    </button>
                </form>
            </div>
        </div>
    )
}

function Collapse() {
    return (
        <section className='flex h-28 bg-white'>
            <ul className='w-full h-full flex justify-around text-lg bg-gray-950 pt-4'>
                <li className='w-24 md:w-52 w-92 h-full bg-white rounded-lg'>
                    <Link href='service' className='w-full h-full flex justify-center items-center'>سرویس ها</Link>
                </li>
                <li className='w-24 md:w-52 w-92 h-full bg-white rounded-lg'>
                    <p className='w-full h-full flex justify-center items-center'>نمونه کارها</p>
                </li>
                <li className='w-24 md:w-52 w-92 h-full bg-gray-200 rounded-lg'>
                    <Link href='review' className='w-full h-full flex justify-center items-center'>نظرات</Link>
                </li>
            </ul>
        </section>
    )
}