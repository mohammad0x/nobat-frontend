"use client";
import React from "react";
import Back from "@/app/components/backBtn/page";
import Link from "next/link";

export default function myService(req , res){
    const object =  req.searchParams
    let data = getDate(object)

    function getDate(object){
        for(let obj in object){
            var jsObject =  JSON.parse(obj);
        }
        return jsObject
    }

    const list = []
    for (let obj of data.my_service){
        list.push(obj)
    }

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
                    {list.map(item => {
                        return (
                            <Services data={item}/>
                        )
                    })}
                </section>
            </body>
        </html>
    )
}

function Services(data) {
    const service = data.data
    let editServiceUrl = '/edit_service/' + service.id
    let deleteServiceUrl = '/delete_service/' + service.id
    return (
        <div className='w-72 md:w-96 h-28 md:h-32 shadow rounded-lg border border-gray-400 bg-white flex justify-center flex-col py-6 px-3 mb-4'>
            <div className='flex justify-between mb-3 items-center'>
                <h1 className='text-2xl'>{service.title}</h1>
                <h2 className='text-lg'>{service.price} تومان</h2>
            </div>
            <div className='flex justify-between items-center'>
                <p>{service.desc}</p>
                <div className='flex w-20 items-center justify-around'>
                    <Link href={editServiceUrl} className='w-7 h-7 bg-green-800 rounded shadow hover:shadow-lg'></Link>
                    <Link href={deleteServiceUrl} className='w-7 h-7 bg-red-800 rounded shadow hover:shadow-lg'></Link>
                </div>
            </div>
        </div>
    )
}

function AddBtn() {
    return (
        <a href='../service' className='w-20 h-20 absolute bottom-2 right-7 bg-green-800 rounded-full'></a>
    )
}