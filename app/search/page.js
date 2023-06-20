import React from "react";
import HairStyle from '../components/hairStyle'
import Footer from "@/app/components/footer/page";
export default function Search() {
    return (
    <html lang = "en" >
        <head>
            <meta charset = "UTF-8"/>
            <meta name = "viewport" content = "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
            <meta content = "ie=edge"/>
            <title > Document < /title>
        </head>
        <body dir='rtl'>
           <header className='bg-gray-950 h-1/5 text-center'>
               <input type="search" className='search-border rounded-lg w-11/12 h-9 p-3 mt-16 bg-gray-950 font-size placeholder:text-right placeholder:text-gray-300' placeholder='سرویس مورد نظر خود را جستجو کنید...'/>
           </header>
            <section className='px-8 py-6'>
                <h1 className='text-3xl font-bold'>بالاترین امتیاز</h1>
                <HairStyle />
            </section>
            <section className='px-8 py-6'>
                <h1 className='text-3xl font-bold'>تازه ها</h1>
                <HairStyle />
            </section>
            <Footer title='search'/>
        </body>
    </html>
    )
}