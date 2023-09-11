"use client";
import React from "react";
import '../globals.css'
import Link from "next/link";
import hairStyleCard from "@/app/components/hairStyle";

export default function Profile(req, res) {
    console.log(req)
    const obj =  req.searchParams
    let y = getDate(obj)

    function getDate(obj){
        for(let profile in obj){
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
                <div className='w-screen h-screen bg-gray-950'>
                    <ProfileTop data={y} />
                    <ProfileBottom/>
                    <ProfileFooter />
                </div>
            </body>
        </html>
    )
}

function ProfileTop(data) {
    const image = 'http://127.0.0.1:3000' + data.data.photo
    return (
        <section className='bg-gray-950 flex flex-col items-center w-full'>
            <h1 className='text-white mt-10 text-2xl'>Profile</h1>
            <div className='w-72 h-40 flex mt-6 flex-col items-center'>
                <div className='relative'>
                    <img src={image} alt="profileImage" className='w-28 h-28 rounded-full'/>
                    <Link href='profile/edit' className='w-11 h-11 rounded-full bg-red-700 absolute -bottom-3.5 -left-0.5'></Link>
                </div>
            </div>
        </section>
    )
}

function ProfileBottom(data) {
    return (
        <section className='flex justify-center'>
            <div className='bg-white rounded-t-3xl md:rounded-3xl absolute top-60 mt-4 w-full md:w-2/5 pb-6 md:pb-2'>
                <div className='w-full h-20 flex justify-around items-center'>
                    <Link href="../delete_user" className='w-16 h-16 shadow border border-red-300 text-red-600 hover:bg-red-500 hover:text-white hover:border-white duration-500 rounded flex items-center justify-around'>
                        delete</Link>

                    <Link href="#" className='w-16 h-16 shadow border border-gray-300 text-gray-600 hover:shadow-lg duration-500 rounded flex items-center justify-around' >
                        temp</Link>
                    <Link href="#" className='w-16 h-16 shadow border border-gray-300 text-gray-600 hover:shadow-lg duration-500 rounded flex items-center justify-around'>
                        temp
                    </Link>
                </div>
                <CustomerCard />
                <div className='w-full h-11 text-right border-t-4 border-gray-400 px-3'>
                    <h3 className='text-lg text-red-500 border-gray-200 py-2'>خروج</h3>
                </div>
            </div>
        </section>
    )
}

function CustomerCard() {
    return (
        <div className='w-full h-11 text-right mb-15 border-t-4 border-gray-400 px-3'>
            <div className='flex justify-between items-center py-2 border-b border-gray-200'>
                <h3 className='text-lg'>تاریخچه</h3>
                <Link href="../history">
                    <img className='w-8 h-7' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVR4nO3Z0QnDMBAE0alCMm4xKdfEcTXJj9TD3jGvg2UObBBIklTPAbxoMOIGfsCboiZwrRFf4KSg6YgQlkhhiRSWSGGJFNMvdojZocQAPmvEvX7NSxpdhuwx+7Seqqe1OSbV8MxCDcuEGpYJZZlUlknVqszR4Vmh1UOPJIk2/sdBW38dJ6R0AAAAAElFTkSuQmCC" alt=''/>
                </Link>
            </div>
            <div className='flex justify-between items-center py-2 border-b border-gray-200'>
                <h3 className='text-lg'>گفتگوها</h3>
                <a href="#">
                    <img className='w-8 h-7' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVR4nO3Z0QnDMBAE0alCMm4xKdfEcTXJj9TD3jGvg2UObBBIklTPAbxoMOIGfsCboiZwrRFf4KSg6YgQlkhhiRSWSGGJFNMvdojZocQAPmvEvX7NSxpdhuwx+7Seqqe1OSbV8MxCDcuEGpYJZZlUlknVqszR4Vmh1UOPJIk2/sdBW38dJ6R0AAAAAElFTkSuQmCC" alt=''/>
                </a>
            </div>
        </div>
    )
}

function ProfileFooter() {
    return (
        <section className='absolute bottom-0 z-50 w-full h-18 bg-gray-950 text-xl text-center flex justify-center items-center text-gray-300'>
            <li className='flex-col list-none w-1/4 h-full flex justify-center items-center hover:text-gray-600 duration-100'>
                <a href="/" id='home'>خانه</a>
            </li>
            <li className='flex-col list-none w-1/4 h-full flex justify-center items-center hover:text-gray-600 duration-100'>
                <a href="/nobat" id='nobat'>نوبت ها</a>
            </li>
            <li className='flex-col list-none w-1/4 h-full flex justify-center items-center hover:text-gray-600 duration-100'>
                <a href="/search" id='search'>جستجو</a>
            </li>
            <li className='flex-col list-none w-1/4 h-full flex justify-center items-center hover:text-gray-600 duration-100'>
                <a href="/profile" id='profile'>پروفایل</a>
            </li>
        </section>
    )
}