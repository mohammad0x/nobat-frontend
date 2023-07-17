import React from "react";
import Back from "@/app/components/backBtn/page";

export default function Email() {
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
                <section className='bg-gray-950 w-screen h-screen flex items-center justify-center'>
                    <div className='w-72 md:w-1/2 w-98 bg-white py-6 rounded text-center'>
                        <h1 className='text-2xl md:text-3xl mb-8'>رمزعبور جدید</h1>
                        <form method='POST' className='w-full h-full text-center flex flex-col items-center'>
                            <input type="password" name='new_password' className='w-64 md:w-96 h-10 md:h-11 mb-5 border-0 border-b' placeholder='رمزعبور جدید'/>

                            <input type="password" name='new_password' className='w-64 md:w-96 h-10 md:h-11 mb-10 border-0 border-b' placeholder='تکرار رمزعبور'/>

                            <input type="submit" className='w-32 h-12 md:w-44 lg:h-14 rounded-full border border-gray-700 hover:border-0 hover:bg-gray-700 hover:text-white duration-300' value='تایید'/>
                        </form>
                    </div>
                </section>
            </body>
        </html>
    )
}