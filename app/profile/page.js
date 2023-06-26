import React from "react";
import Footer from "@/app/components/footer/page";
import '../globals.css'
import Link from "next/link";

export default function Profile() {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta content="ie=edge"/>
                <title> Document < /title>
            </head>
            <body dir='rtl' className='Body bg-gray-950'>
                <ProfileTop />
                <ProfileBottom />
                {/*<Footer />*/}
            </body>
        </html>
    )
}

function ProfileTop() {
    return (
        <section className='bg-gray-950 flex flex-col justify-center items-center w-full h-64'>
            <h1 className='text-white mt-3 text-2xl'>Profile</h1>
            <div className='w-72 h-40 flex mt-6 flex-col items-center'>
                <div className='relative'>
                    <img src="/imageOrg.png" alt="profileImage" className='w-28 h-28 rounded-full'/>
                    <Link href='#' className='w-11 h-11 rounded-full bg-red-700 absolute -bottom-3.5 -left-0.5'></Link>
                </div>
            </div>
        </section>
    )
}

function ProfileBottom() {
    return (
        <section className='bg-white rounded-t-3xl absolute top-56 w-full h-64 py-6 px-3'>
            {/*<div className='w-full h-12'>*/}
            {/*    */}
            {/*</div>*/}
            <HairStyleCard />
            <CustomerCard />
            <hr className='w-full text-3xl h3'/>
            <div className='w-full h-12 text-right'>
                <h3 className='text-lg text-red-500 border-b border-gray-200 py-3'>خروج</h3>
                <h3 className='text-lg text-red-500 py-3'>حذف اکانت</h3>
            </div>
        </section>
    )
}

function HairStyleCard() {
    return (
        <div className='w-full h-12 text-right mb-10 border-t-8 border-gray-500'>
            <div className='flex justify-between items-center py-3 border-b border-gray-200'>
                <h3 className='text-lg'>خروج</h3>
                <a href="#">
                    <img className='w-8 h-7' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVR4nO3Z0QnDMBAE0alCMm4xKdfEcTXJj9TD3jGvg2UObBBIklTPAbxoMOIGfsCboiZwrRFf4KSg6YgQlkhhiRSWSGGJFNMvdojZocQAPmvEvX7NSxpdhuwx+7Seqqe1OSbV8MxCDcuEGpYJZZlUlknVqszR4Vmh1UOPJIk2/sdBW38dJ6R0AAAAAElFTkSuQmCC" alt=''/>
                </a>
            </div>
        </div>
    )
}

function CustomerCard() {
    return (
        <div>

        </div>
    )
}