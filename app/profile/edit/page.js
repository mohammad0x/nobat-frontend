import Back from "@/app/components/backBtn/page";
import React from "react";

export default function EditProfile(req, res) {
    const obj =  req.searchParams
    let y = getDate(obj)


    function getDate(obj){
        for(let profile in obj ){
            var jsObject =  JSON.parse(profile);
        }
        return jsObject
    }


    console.log(y)
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
                        <h1 className='text-2xl md:text-3xl mb-4'>ویرایش پروفایل</h1>
                        <form method='POST' className='w-full h-full text-center flex flex-col items-center'>
                            <input type="text" value={y.first_name} name='first_name' className='w-64 md:w-96 h-10 md:h-11 mb-2 border-0 border-b' placeholder='نام'/>

                            <input type="text" value={y.last_name} name='last_name' className='w-64 md:w-96 h-10 md:h-11 mb-2 border-0 border-b' placeholder='نام خانوادگی'/>

                            <input type="text" value={y.nationality_code} name='nationality_code' className='w-64 md:w-96 h-10 md:h-11 mb-2 border-0 border-b' placeholder='کدملی'/>

                            <input type="text" value={y.phone} name='phone' className='w-64 md:w-96 h-10 md:h-11 mb-2 border-0 border-b' placeholder='شماره همراه'/>

                            <input type="text" value={y.city} name='city' className='w-64 md:w-96 h-10 md:h-11 mb-2 border-0 border-b' placeholder='شهر'/>

                            <input type="text" value={y.address} name='address' className='w-64 md:w-96 h-10 md:h-11 mb-2 border-0 border-b' placeholder='ادرس'/>

                            <input type="file" value={y.photo.url} name='photo' className='w-64 md:w-96 lg:w-96 h-10 md:h-11 mb-6 border-0 border-b border-b-gray-400 text-sm'/>

                            <input type="submit" className='w-32 h-12 md:w-44 lg:h-14 mb-3 rounded-full border border-gray-700 hover:border-0 hover:bg-gray-700 hover:text-white duration-300' value='ویرایش'/>
                        </form>
                    </div>
                </section>
            </body>
        </html>
    )
}

// export default async function Handler(req , res){
//
//
//
//     return(
//         <div>
//             <p>al{y.id}</p>
//         </div>
//     )
// }