import Footer from "@/app/components/footer/page";
import React from "react";
import Back from "@/app/components/backBtn/page";

export default function myService() {
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
                <Back />
                <header className='h-40 bg-gray-950 text-center flex justify-center items-center'>
                    <h1 className='text-white text-2xl'>سرویس ها</h1>
                </header>
                <section className='flex flex-col items-center py-4'>
                    <AddBtn />
                    <Services />
                </section>
            </body>
        </html>
    )
}

function Services() {
    return (
        <div className='w-72 md:w-96 h-28 md:h-32 shadow rounded-lg border border-gray-400 bg-white flex justify-center flex-col py-6 px-3'>
            <div className='flex justify-between mb-3 items-center'>
                <h1 className='text-2xl'>مدل المانی</h1>
                <h2 className='text-lg'>220000 تومان</h2>
            </div>
            <div className='flex justify-between items-center'>
                <p>با کیفیت و سرعت بالا</p>
                <div className='flex w-20 items-center justify-around'>
                    <a href="#" className='w-7 h-7 bg-green-800 rounded shadow hover:shadow-lg'></a>
                    <a href="#" className='w-7 h-7 bg-red-800 rounded shadow hover:shadow-lg'></a>
                </div>
            </div>
        </div>
    )
}

function AddBtn() {
    return (
        <a href='#' className='w-20 h-20 absolute bottom-2 right-7 bg-green-800 rounded-full'></a>
    )
}