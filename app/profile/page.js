import React from "react";
import Footer from "@/app/components/footer/page";
import '../globals.css'
import Link from "next/link";
import Back from "@/app/components/backBtn/page";

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
            <body dir='rtl'>
                <ProfileTop />
                <ProfileBottom />
                <Footer />
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
        <section className='bg-white rounded-t-3xl absolute top-56 w-full h-fit px-3'>
            <div className='w-full h-24 flex justify-around items-center'>
                <a href='#' className='w-20 h-20 shadow border border-red-300 text-red-600 hover:bg-red-500 hover:text-white hover:border-white duration-500 rounded flex items-center justify-around'>
                    حذف اکانت
                </a>
                <a href='#' className='w-20 h-20 shadow border border-gray-300 text-gray-600 hover:shadow-lg duration-500 rounded flex items-center justify-around'>
                    مشخصات
                </a>
            </div>
            <HairStyleCard />
            <CustomerCard />
            <div className='w-full h-12 text-right border-t-8 border-gray-500'>
                <h3 className='text-lg text-red-500 border-b border-gray-200 py-3'>خروج</h3>
            </div>
        </section>
    )
}

function HairStyleCard() {
    return (
        <div className='w-full h-12 text-right marginB border-t-8 border-gray-500'>
            <div className='flex justify-between items-center py-3 border-b border-gray-200'>
                <h3 className='text-lg'>سرویس های من</h3>
                <a href="#">
                    <img className='w-8 h-7' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVR4nO3Z0QnDMBAE0alCMm4xKdfEcTXJj9TD3jGvg2UObBBIklTPAbxoMOIGfsCboiZwrRFf4KSg6YgQlkhhiRSWSGGJFNMvdojZocQAPmvEvX7NSxpdhuwx+7Seqqe1OSbV8MxCDcuEGpYJZZlUlknVqszR4Vmh1UOPJIk2/sdBW38dJ6R0AAAAAElFTkSuQmCC" alt=''/>
                </a>
            </div>
            <div className='flex justify-between items-center py-3 border-b border-gray-200'>
                <h3 className='text-lg'>مشاهده اکانت</h3>
                <a href="#">
                    <img className='w-8 h-7' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVR4nO3Z0QnDMBAE0alCMm4xKdfEcTXJj9TD3jGvg2UObBBIklTPAbxoMOIGfsCboiZwrRFf4KSg6YgQlkhhiRSWSGGJFNMvdojZocQAPmvEvX7NSxpdhuwx+7Seqqe1OSbV8MxCDcuEGpYJZZlUlknVqszR4Vmh1UOPJIk2/sdBW38dJ6R0AAAAAElFTkSuQmCC" alt=''/>
                </a>
            </div>
            <div className='flex justify-between items-center py-3 border-b border-gray-200'>
                <h3 className='text-lg'>حذف اکانت</h3>
                <a href="#">
                    <img className='w-8 h-7' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVR4nO3Z0QnDMBAE0alCMm4xKdfEcTXJj9TD3jGvg2UObBBIklTPAbxoMOIGfsCboiZwrRFf4KSg6YgQlkhhiRSWSGGJFNMvdojZocQAPmvEvX7NSxpdhuwx+7Seqqe1OSbV8MxCDcuEGpYJZZlUlknVqszR4Vmh1UOPJIk2/sdBW38dJ6R0AAAAAElFTkSuQmCC" alt=''/>
                </a>
            </div>
            <CreateService />
        </div>
    )
}

function CustomerCard() {
    return (
        <div className='w-full h-12 text-right mb-16 border-t-8 border-gray-500'>
            <div className='flex justify-between items-center py-3 border-b border-gray-200'>
                <h3 className='text-lg'>تاریخچه</h3>
                <a href="#">
                    <img className='w-8 h-7' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVR4nO3Z0QnDMBAE0alCMm4xKdfEcTXJj9TD3jGvg2UObBBIklTPAbxoMOIGfsCboiZwrRFf4KSg6YgQlkhhiRSWSGGJFNMvdojZocQAPmvEvX7NSxpdhuwx+7Seqqe1OSbV8MxCDcuEGpYJZZlUlknVqszR4Vmh1UOPJIk2/sdBW38dJ6R0AAAAAElFTkSuQmCC" alt=''/>
                </a>
            </div>
            <div className='flex justify-between items-center py-3 border-b border-gray-200'>
                <h3 className='text-lg'>گفتگوها</h3>
                <a href="#">
                    <img className='w-8 h-7' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVR4nO3Z0QnDMBAE0alCMm4xKdfEcTXJj9TD3jGvg2UObBBIklTPAbxoMOIGfsCboiZwrRFf4KSg6YgQlkhhiRSWSGGJFNMvdojZocQAPmvEvX7NSxpdhuwx+7Seqqe1OSbV8MxCDcuEGpYJZZlUlknVqszR4Vmh1UOPJIk2/sdBW38dJ6R0AAAAAElFTkSuQmCC" alt=''/>
                </a>
            </div>
        </div>
    )
}

function CreateService() {
    return (
        <div className='flex justify-between items-center py-3 border-b border-gray-200'>
            <h3 className='text-lg'>ساخت اکانت</h3>
            <a href="#">
                <img className='w-8 h-7' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVR4nO3Z0QnDMBAE0alCMm4xKdfEcTXJj9TD3jGvg2UObBBIklTPAbxoMOIGfsCboiZwrRFf4KSg6YgQlkhhiRSWSGGJFNMvdojZocQAPmvEvX7NSxpdhuwx+7Seqqe1OSbV8MxCDcuEGpYJZZlUlknVqszR4Vmh1UOPJIk2/sdBW38dJ6R0AAAAAElFTkSuQmCC" alt=''/>
            </a>
        </div>
    )
}