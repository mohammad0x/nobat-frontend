import React from "react";
import HeaderHair from "@/app/hairStyle/header";
import Link from "next/link";
import About from "@/app/hairStyle/about";

export default function HairStyle() {
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
                <HeaderHair />
                <Collapse />
                <Review />
                <About />
            </body>
        </html>
    )
}

function Comments() {
    return (
        <div className='w-11/12 md:w-1/2 p-3 rounded-lg shadow shadow-gray-400 flex flex-col justify-between bg-gray-50 mb-5'>
            <div className='p-3 flex justify-between'>
                <img src="/Landscape-Color.jpg" className='w-16 h-16 rounded-full' alt="user-profile"/>
                <div className='text-right w-5/6 pr-2'>
                    <div className='flex mb-1'>
                        <img src="/stargold.png" className='w-6 h-6' alt="star"/>
                        <img src="/stargold.png" className='w-6 h-6' alt="star"/>
                        <img src="/stargold.png" className='w-6 h-6' alt="star"/>
                        <img src="/stargold.png" className='w-6 h-6' alt="star"/>
                        <img src="/stargold.png" className='w-6 h-6' alt="star"/>
                    </div>
                    <h1 className='text-lg'>عرفان کاهانی</h1>
                    <p className='text-2sm mb-2 text-gray-700'>1402/4/27</p>
                    <p className='text-sm mb-2'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>
                    <button type="submit" className='text-sm'>Reply</button>
                </div>
            </div>
            <div className='py-2'>
                <Reply />
                <Reply />
                <Reply />
                <Reply />
            </div>
        </div>
    )
}

function Reply() {
    return (
        <div className='p-3 rounded-lg shadow shadow-gray-400 flex justify-between bg-gray-100 py-4 mt-4'>
            <img src="/Landscape-Color.jpg" className='w-16 h-16 rounded-full' alt="user-profile"/>
            <div className='text-right w-5/6 pr-2'>
                <h1 className='text-lg'>عرفان کاهانی</h1>
                <p className='text-2sm mb-2 text-gray-700'>1402/4/27</p>
                <p className='text-sm mb-2'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>
            </div>
        </div>
    )
}

function Collapse() {
    return (
        <section className='flex h-28 bg-white'>
            <ul className='w-full h-full flex justify-around text-lg bg-gray-950 pt-4'>
                <li className='w-24 md:w-52 w-92 h-full bg-white rounded-lg'>
                    <Link href='service' className='w-full h-full flex justify-center items-center'>سرویس ها</Link>
                </li>
                <li className='w-24 md:w-52 w-92 h-full bg-white rounded-lg'>
                    <Link href='post' className='w-full h-full flex justify-center items-center'>نمونه کارها</Link>
                </li>
                <li className='w-24 md:w-52 w-92 h-full bg-gray-200 rounded-lg'>
                    <p className='w-full h-full flex justify-center items-center'>نظرات</p>
                </li>
            </ul>
        </section>
    )
}

// function Document(){
//     useEffect(() => {
//         document.getElementById('star-1').style.width = '86%';
//         document.getElementById('star-1').style.background = 'red';
//     })
// }

function Review(){
    // Document()
    return (
        <div className='flex flex-col items-center bg-gray-950 relative'>
            <div className="rating-card flex justify-center items-center w-full">
                <div className="text-center flex flex-col items-center m-b-5 py-6 w-5/6 text-gray-200">
                    <h1 className='text-4xl font-bold mb-3'>
                        4.3
                        <small className='font-medium text-lg'>/5</small>
                    </h1>
                    <div className='text-gray-500 mb-5'>2165 نظر</div>
                    <div className="rating-divided">
                        <div className="rating-progress flex flex-row-reverse items-center">
                            <span className="rating-grade flex"><img src="/star.png" className='w-5 h-5 ml-1' alt=""/> 5</span>
                            <div className="progress mx-2 w-36 md:w-96 h-4 bg-gray-200 rounded-xl">
                                <div className="progress-bar" id='star-5' role="progressbar"></div>
                            </div>
                            <span className="rating-value">1,985</span>
                        </div>
                        <div className="rating-progress flex flex-row-reverse items-center">
                            <span className="rating-grade flex"><img src="/star.png" className='w-5 h-5 ml-1' alt=""/> 4</span>
                            <div className="progress mx-2 w-36 md:w-96 h-4 bg-gray-200 rounded-xl">
                                <div className="progress-bar" id='star-4' role="progressbar"></div>
                            </div>
                            <span className="rating-value">356</span>
                        </div>
                        <div className="rating-progress flex flex-row-reverse items-center">
                            <span className="rating-grade flex"><img src="/star.png" className='w-5 h-5 ml-1' alt=""/> 3</span>
                            <div className="progress mx-2 w-36 md:w-96 h-4 bg-gray-200 rounded-xl">
                                <div className="progress-bar" id='star-3' role="progressbar"></div>
                            </div>
                            <span className="rating-value">130</span>
                        </div>
                        <div className="rating-progress flex flex-row-reverse items-center">
                            <span className="rating-grade flex"><img src="/star.png" className='w-5 h-5 ml-1' alt=""/> 2</span>
                            <div className="progress mx-2 w-36 md:w-96 h-4 bg-gray-200 rounded-xl">
                                <div className="progress-bar" id='star-2' role="progressbar"></div>
                            </div>
                            <span className="rating-value">90</span>
                        </div>
                        <div className="rating-progress flex flex-row-reverse items-center">
                            <span className="rating-grade flex"><img src="/star.png" className='w-5 h-5 ml-1.5' alt=""/> 1</span>
                            <div className="progress mx-2 w-36 md:w-96 h-4 bg-gray-200 rounded-xl">
                                <div className="progress-bar " id='star-1' role="progressbar"></div>
                            </div>
                            <span className="rating-value">33</span>
                        </div>
                    </div>
                </div>
            </div>
            <Comments />
            <section className='sticky w-full bottom-0 h-14 md:h-20 bg-gray-100 flex items-center px-3'>
                <input type="number" max='5' min='1' className='w-1/5 md:w-28 h-7 md:h-10 rounded ml-2'/>
                <input type="text" className='w-2/3 md:w-4/5 h-7 md:h-10 rounded' placeholder='نظر خود را وارد کنید ...'/>
                {/*  send icon  */}
            </section>
        </div>
    )
}