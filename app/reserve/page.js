'use client'
import React from "react"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import DatePicker, {Calendar} from "react-multi-date-picker";

export default function Reserve() {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta content="ie=edge"/>
                <title> Document < /title>
            </head>
            <body dir='rtl'>
                <section className='flex justify-center items-center bg-gray-950 w-full h-screen'>
                    <div className='w-72 md:w-10/12 lg:w-1/2 border border-gray-400 rounded-lg flex flex-col sm:items-center md:justify-around py-8 md:py-7 px-4 md:px-7 bg-white'>
                        <h1 className='text-4xl'>رزرو</h1>
                        <form method="POST" className='flex sm:mt-8 w-full'>
                            {/*<input type="date" name='date' className='w-64 h-10 md:w-11/12 md:h-11 rounded mb-5 shadow focus:shadow-lg'/>*/}
                            <div className='flex w-1/2 items-center justify-center'>
                                <Calendar calendar={persian} locale={persian_fa} name='date' className='mb-5'/>
                            </div>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <input type="number" name='number' placeholder='تعداد' defaultValue='1' className='w-64 h-10 md:w-11/12 md:h-11 rounded mb-5 shadow focus::shadow-lg'/>
                                <input type="time" name='time' className='w-64 h-10 md:w-11/12 md:h-11 rounded mb-5 shadow focus::shadow-lg'/>
                                <input type="submit" value="رزرو" className='w-48 h-14 md:w-7/12 md:h-16 border border-gray-400 rounded mt-3 shadow hover:shadow-lg duration-500'/>
                            </div>
                        </form>
                    </div>
                </section>
            </body>
        </html>
    )
}