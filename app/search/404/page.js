"use client";
import React from "react";
import Footer from "@/app/components/footer/page";
export default function Search(){
    return (
        <html lang = "en" >
            <head>
                <meta charset = "UTF-8"/>
                <meta name = "viewport" content = "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta content = "ie=edge"/>
                <title > Document < /title>
            </head>
            <body dir='rtl'>
                <main class="h-screen w-full flex flex-col justify-center items-center bg-gray-950">
                    <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
                    <p className='text-lg text-gray-100 mt-2 mb-5'>صفحه مورد نظر یافت نشد</p>
                    <a href="../.." class="mt-5 flex items-center justify-center w-44 h-14 border border-gray-300 rounded text-gray-100 hover:text-gray-950 hover:border-gray-950 hover:bg-gray-100 duration-500">برگشت به خانه</a>
                </main>
                <Footer title='search'/>
            </body>
        </html>
    )
}