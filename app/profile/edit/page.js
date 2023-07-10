import Back from "@/app/components/backBtn/page";
import React from "react";

export default function EditProfile() {
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
                    <div className='w-72 md:w-1/2 lg:h-96 bg-white text-center pt-6 rounded'>
                        <h1 className='text-2xl md:text-3xl'>ویرایش پروفایل</h1>
                        <form method='POST' className='w-full text-center'>
                            <input type="text" name='first_name' className='w-64 md:w-80 h-10 md:h-11 md:ml-1 mb-2 border-0 border-b' placeholder='نام'/>

                            <input type="text" name='last_name' className='w-64 md:w-80 h-10 md:h-11 md:me-1 mb-2 border-0 border-b' placeholder='نام خانوادگی'/>

                            <input type="text" name='nationalcode' className='w-64 md:w-80 h-10 md:h-11 md:me-1 md:ml-1 mb-2 border-0 border-b' placeholder='کدملی'/>

                            <input type="text" name='phone' className='w-64 md:w-80 h-10 md:h-11  mb-2 border-0 border-b' placeholder='شماره همراه'/>

                            <input type="text" name='city' className='w-64 md:w-80 h-10 md:h-11 mb-2 md:ml-1 border-0 border-b' placeholder='شهر'/>

                            <input type="text" name='address' className='w-64 md:w-80 h-10 md:h-11 mb-2 border-0 border-b' placeholder='ادرس'/>

                            <input type="file" name='first_name' className='w-64 md:w-80 h-10 md:h-11 mb-3 border-0 border-b border-b-gray-400 text-sm'/>

                            <input type="submit" className='w-32 h-12 mb-3 rounded-full border border-gray-700 hover:border-0 hover:bg-gray-700 hover:text-white duration-300' value='ویرایش'/>
                        </form>
                    </div>
                </section>
            </body>
        </html>
    )
}