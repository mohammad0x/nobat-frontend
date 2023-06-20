import Customer from '../components/nobat/customer'
import HairStyleNobat from '../components/nobat/HairStyleNobat'
import Footer from "@/app/components/footer/page";
import React from "react";

export default function Nobat() {
    return (
        <html lang = "en">
        <head>
            <meta charset = "UTF-8"/>
            <meta name = "viewport" content = "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
            <meta content = "ie=edge"/>
            <title> Document < /title>
        </head>
        <body dir='rtl' className='mb-28'>
            <header className='h-1/5 bg-gray-950 flex justify-center items-center text-white text-5xl'>
                <h1>نوبت ها</h1>
            </header>
            <HairStyleNobat />
            <Customer />
            <Footer />
        </body>
</html>
    )
}

