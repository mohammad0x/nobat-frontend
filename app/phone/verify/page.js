'use client'
import React from "react";
import Back from "@/app/components/backBtn/page";

export default function Verify() {
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
                <section className='bg-gray-950 w-screen h-screen flex items-center justify-center'>
                    <div className='w-72 md:w-7/12 w-98 py-6 rounded text-center bg-white md:bg-white'>
                        <h1 className='text-2xl md:text-3xl mb-10'>تایید کد</h1>
                        <form method='POST' className='w-full h-full text-center flex flex-col items-center'>
                            <input type="number" name='verify_code' placeholder='کد تایید' className='w-64 md:w-96 lg:w-96 h-10 md:h-12 mb-10 border-0 border-b border-b-gray-400'/>

                            <input type="submit" className='w-32 h-12 md:w-44 lg:h-14 rounded-full border border-gray-700 hover:border-0 hover:bg-gray-700 hover:text-white duration-300' value='تایید کد'/>
                        </form>
                    </div>
                </section>
            </body>
        </html>
    )
}