import HairStyleNobat from '@/app/components/nobat/HairStyleNobat'
import Footer from "@/app/components/footer/page";
import React from "react";
import '@/app/globals.css'

export default function Nobat(req, res) {
    const object =  req.searchParams
    let data = getDate(object)
    const reserve = data.reserve
    const service = data.service
    const profile = data.profile

    function getDate(object){
        for(let obj in object){
            var jsObject =  JSON.parse(obj);
        }
        return jsObject
    }

    const list = []
    for (let res of reserve){
        for (let ser of service){
            if (ser.id === res.service_id) {
                for (let pro of profile){
                    if (pro.user_id === res.user_id) {
                        list.push([res, ser, pro])
                    }
                }
            }
        }
    }

    return (
        <html lang = "en">
            <head>
                <meta charSet = "UTF-8"/>
                <meta name = "viewport" content = "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta content = "ie=edge"/>
                <title> Document < /title>
            </head>
            <body dir='rtl' className='footerBody'>
                <header className='h-36 bg-gray-950 flex justify-center items-center text-white text-5xl'>
                    <h1>نوبت ها</h1>
                </header>
                <section className='w-80 hrem lg:w-96 md:w-96 py-3 px-3 flex items-center flex-col mx-auto'>
                    {list.map(item => {
                        return (
                            <HairStyleNobat data={item}/>
                        )
                    })}
                </section>
                <Footer />
            </body>
        </html>
    )
}

