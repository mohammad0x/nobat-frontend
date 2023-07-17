import Footer from "@/app/components/footer/page";
import React from "react";

export default function HeaderHair() {
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
                <section className='w-screen p-3 bg-gray-950'>
                    <div className='w-full relative mb-4'>
                        <div className='w-36 md:w-52 h-20 md:h-28 bg-transparent-gray absolute right-0 rounded-tr-lg flex items-center justify-center flex-col text-white'>
                            <h1 className='text-2xl md:text-3xl mb-1 md:mb-2'>4/5</h1>
                            <h1 className='text-sm'>222 نظر</h1>
                        </div>
                        <img src="/Landscape-Color.jpg" alt="hairStyleBg" className='w-full h-80 rounded-lg'/>
                    </div>
                    <div className='flex justify-between md:px-6 md:py-3'>
                        <div>
                            <h1 className='mb-1 md:mb-2 text-3xl md:text-4xl text-gray-200'>ارایشگاه محمد</h1>
                            <h3 className='text-lg md:text-xl text-gray-200'>بهترین در شهر</h3>
                        </div>
                        <div className=''>
                            <button type="submit" className='w-32 md:w-52 h-16 text-gray-200 md:h-20 border-2 rounded shadow hover:shadow-lg'>
                                گفتگو
                            </button>
                        </div>
                    </div>
                </section>
            </body>
        </html>
    )
}