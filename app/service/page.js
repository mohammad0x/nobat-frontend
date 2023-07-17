import React from "react";
import Back from "@/app/components/backBtn/page";

export default function NewService() {
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
                    <div className='w-72 md:w-1/2 w-98 bg-white pt-6 rounded text-center'>
                        <h1 className='text-2xl md:text-3xl mb-4'>سرویس جدید</h1>
                        <form method='POST' className='w-full h-full text-center flex flex-col items-center'>
                            <input type="text" name='title' className='w-64 md:w-96 h-10 md:h-11 mb-2 border-0 border-b' placeholder='title'/>

                            <input type="number" name='price' className='w-64 md:w-96 h-10 md:h-11 mb-2 border-0 border-b' placeholder='قیمت'/>

                            <input type="text" name='desc' className='w-64 md:w-96 h-10 md:h-11 mb-2 border-0 border-b' placeholder='توضیحات'/>

                            <input type="text" name='phone' className='w-64 md:w-96 h-10 md:h-11 mb-2 border-0 border-b' placeholder='شماره همراه'/>

                            <div className='flex justify-around w-1/2 mt-3 mb-3'>
                                <label htmlFor="True">فعال</label>
                                <input type="radio" id="True" name="status" value="True" className='w-6 h-6 border-1'/>
                                <label htmlFor="False">غیرفعال</label>
                                <input type="radio" id="status" name="status" value="False" className='w-6 h-6 border-1'/>
                            </div>

                            <input type="submit" className='w-32 h-12 md:w-44 lg:h-14 mb-3 rounded-full border border-gray-700 hover:border-0 hover:bg-gray-700 hover:text-white duration-300' value='افزودن'/>
                        </form>
                    </div>
                </section>
            </body>
        </html>
    )
}