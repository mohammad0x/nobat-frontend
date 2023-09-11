"use client";
import Back from "@/app/components/backBtn/page";

export default function History(req , res){
    const obj =  req.searchParams
    let y = getDate(obj)
    let reserve = y.reserve
    let service = y.service
    let createService = y.createService

    function getDate(obj){
        for(let profile in obj ){
            var jsObject =  JSON.parse(profile);
        }
        return jsObject
    }

    // const list = []
    // for (let cate of reserve){
    //     for (let ser of service){
    //         if (ser.id === cate.service_id) {
    //             for (let create of createService){
    //                 if (create.id === ser.user_id){
    //                     list.push([cate, ser, create])
    //                 }
    //             }
    //         }
    //     }
    // }
    let list = y.data
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
                <Back data='../profile'/>
                <header className='h-40 bg-gray-950 text-center flex justify-center items-center'>
                    <h1 className='text-white text-2xl'>تاریخچه</h1>
                </header>
                <section className='mt-6 flex flex-col items-center'>
                    {list.map(item => {
                        return (
                            <Customer data={item} />
                        )
                    })}
                </section>
            </body>
        </html>
    )
}

function Customer(data) {
    const reserve = data.data[0]
    const service = data.data[1]
    const create = data.data[2]

    return (
        <div className='w-72 border border-gray-400 rounded-lg px-3 py-3'>
            <img className='w-72 h-40' src={create.image.url} alt="Hairstyle-image"/>
            <h1 className='text-2xl mt-2'>{create.title}</h1>
            <div className='flex mt-2 items-center justify-between'>
                <h2 className='text-lg'>{service.title}</h2>
                <h3 className='mt-1'>{service.price} تومان</h3>
            </div>
            <h3 className='mt-1 text-sm'>{reserve.date} {reserve.time}</h3>
        </div>
    )
}