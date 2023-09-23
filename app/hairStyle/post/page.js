'use client'
import React from "react";
import Link from "next/link";
import HeaderHair from "@/app/hairStyle/header";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// end import swiper
import About from "@/app/hairStyle/about";
import "@/app/globals.css";
export default function Post(req , res){
    const obj =  req.searchParams
    let y = getDate(obj)
    function getDate(obj){
        for(let profile in obj ){
            var jsObject =  JSON.parse(profile);
        }
        return jsObject
    }

    const profile = {}
    for (let cate of y.profile){
        profile.data = {
            'address':cate.address,
            'city':cate.city,
            'phone':cate.phone,
            'first_name':cate.first_name,
            'last_name':cate.last_name,
            'slug': y.slug
        }
    }

    const create = {
        'title': y.title,
        'slug': y.slug,
        'image': y.image,
        'score': y.score,
        'comment': y.comment,
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
                <HeaderHair data={create}/>
                <Collapse data={y.id}/>
                <Swiper pagination={{dynamicBullets: true,}} modules={[Pagination]} className="bg-gray-950 flex items-center justify-center mb-80">
                    {y.post.map(item => {
                        return(
                            <SwiperSlide className='w-screen swiper-slide items-center justify-center py-6 px-10 flex'>
                                <Posts data={item}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <About data={profile}/>
            </body>
        </html>
    )
}

function Posts(data){
    const id = data.data[2]
    const image = data.data[3]
    const like_url = '../../hairstylistpage-like/'+ id
    const dislike_url = '../../hairstylistpage-dislike/'+ id
    return (
        <div className='w-72 h-72 relative rounded-lg mb-5 bg-gray-100'>
            <img src={image} alt="post" className='w-full h-full bg-cover rounded-t-lg'/>
            <div className="flex items-center justify-around absolute right-2 bottom-3 text-sm">
                <form method='POST' action={like_url} className='w-20 h-12 rounded-xl border border-gray-800 flex items-center justify-center ml-2'>
                    <input type="hidden" value={id} name='like-post'/>
                    <button name='like-post'>
                        <div>
                            {data.data[0]}Like
                        </div>
                    </button>
                </form>
                <form method='POST' action={dislike_url} className='w-20 h-12 rounded-xl border border-gray-800 flex items-center justify-center'>
                    <input type="hidden" value={id} name='dislike-post'/>
                    <button name='dislike-post'>
                        <div>
                            {data.data[1]}DisLike
                        </div>
                    </button>
                </form>
            </div>
        </div>
    )
}

function Collapse(data) {
    let id = data.data
    const service = '../service/'+id
    const review = '../review/'+id
    return (
        <section className='flex h-28 bg-white'>
            <ul className='w-full h-full flex justify-around text-lg bg-gray-950 pt-4'>
                <li className='w-24 md:w-52 w-92 h-full bg-white rounded-lg'>
                    <Link href={service} className='w-full h-full flex justify-center items-center'>سرویس ها</Link>
                </li>
                <li className='w-24 md:w-52 w-92 h-full bg-white rounded-lg'>
                    <p className='w-full h-full flex justify-center items-center'>نمونه کارها</p>
                </li>
                <li className='w-24 md:w-52 w-92 h-full bg-gray-200 rounded-lg'>
                    <Link href={review} className='w-full h-full flex justify-center items-center'>نظرات</Link>
                </li>
            </ul>
        </section>
    )
}