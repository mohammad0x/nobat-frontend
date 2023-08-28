import React from "react";

export default function HeaderHair(data) {
    const create = data.data
    let image = "127.0.0.1:3000" + create.image
    return (
        <section className='w p-3 bg-gray-950'>
            <div className='w-full relative mb-4'>
                <div className='w-36 md:w-52 h-20 md:h-28 bg-transparent-gray absolute right-2 top-2 rounded-lg flex items-center justify-center flex-col text-white'>
                    <h1 className='text-2xl md:text-3xl mb-1 md:mb-2'>{create.score}</h1>
                    <h1 className='text-sm'>{create.comment} نظر</h1>
                </div>
                <img src={image} alt="hairStyleBg" className='w-full h-80 rounded-lg'/>
            </div>
            <div className='flex justify-between md:px-6 md:py-3'>
                <div>
                    <h1 className='mb-1 md:mb-2 text-3xl md:text-4xl text-gray-200'>{create.title}</h1>
                    <h3 className='text-lg md:text-xl text-gray-200'>{create.slug}</h3>
                </div>
                <div className=''>
                    <button type="submit" className='w-32 md:w-52 h-16 text-gray-200 md:h-20 border-2 rounded shadow hover:shadow-lg'>
                        گفتگو
                    </button>
                </div>
            </div>
        </section>
    )
}