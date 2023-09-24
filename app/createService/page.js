import React from "react";
import Back from "@/app/components/backBtn/page";

export default function createService(req, res) {
    const object =  req.searchParams
    let data = getDate(object)

    function getDate(object){
        for(let obj in object ){
            var jsObject =  JSON.parse(obj);
        }
        return jsObject
    }

    const list = []
    for (let obj of data.category){
        list.push([obj.id, obj.title])
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
                <Back data='../profile'/>
                <section className='bg-gray-950 w-screen h-screen flex items-center justify-center'>
                    <div className='w-72 md:w-7/12 w-98 bg-white pt-6 rounded text-center'>
                        <h1 className='text-2xl md:text-3xl mb-4'>ساخت اکانت</h1>
                        <form method='POST' className='w-full h-full text-center flex flex-col items-center'>
                            <select name="category" id="category" className='w-64 md:w-96 h-10 md:h-11 mb-2 border-0 border-b'>
                                {list.map(item => {
                                    return (
                                        <option value={item.id}>{item.title}</option>
                                    )
                                })}
                            </select>

                            <input type="text" name='title' className='w-64 md:w-96 h-10 md:h-12 mb-2 border-0 border-b' placeholder='title'/>

                            <input type="text" name='slug' className='w-64 md:w-96 h-10 md:h-12 mb-2 border-0 border-b' placeholder='slug'/>

                            <input type="file" name='image' className='w-64 md:w-96 lg:w-96 h-10 md:h-12 mb-6 border-0 border-b border-b-gray-400 text-sm'/>

                            <input type="submit" className='w-32 h-12 md:w-44 lg:h-14 mb-3 rounded-full border border-gray-700 hover:border-0 hover:bg-gray-700 hover:text-white duration-300' value='ساخت'/>
                        </form>
                    </div>
                </section>
            </body>
        </html>
    )
}