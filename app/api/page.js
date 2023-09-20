'use client'
import {React, useState} from 'react';

import Image from 'next/image';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

// function handler(req, res) {
//     // const obj = req.searchParams
//     // let y = getDate(obj)
//     //
//     // function getDate(obj) {
//     //     for (let profile in obj) {
//     //         var jsObject = JSON.parse(profile);
//     //     }
//     //     return jsObject
//     // }
//     //
//     // const list = []
//     // for (let cate of y.list) {
//     //     list.push(cate)
//     // }
//
//     // console.log(list)
//     return (
//         <div>
//             <Swiper
//                 spaceBetween={50}
//                 slidesPerView={3}
//                 onSlideChange={() => console.log('slide change')}
//                 onSwiper={(swiper) => console.log(swiper)}
//             >
//                 <SwiperSlide>Slide 1</SwiperSlide>
//                 <SwiperSlide>Slide 2</SwiperSlide>
//                 <SwiperSlide>Slide 3</SwiperSlide>
//                 <SwiperSlide>Slide 4</SwiperSlide>
//                 ...
//             </Swiper>
//         </div>
//
//     )
// }

// export default function  Prof(context){
//     const obj =  context.searchParams
//     // let y = getDate(obj)
//     console.log(context)


// function getDate(obj){
//     for(let profile in obj ){
//         var jsObject =  JSON.parse(profile);
//     }
//     return jsObject
// }
// return(
//     <div>{y.profile[0].id}</div>
// )
// return(
//     <div>
//         <p>{y.id}aa</p>
//     </div>
// )
// }

const images = [
    'https://placehold.co/480x300?font=roboto&text=Slide+1',
    'https://placehold.co/480x300?font=roboto&text=Slide+1',
    'https://placehold.co/480x300?font=roboto&text=Slide+2',
    'https://placehold.co/480x300?font=roboto&text=Slide+2',
    'https://placehold.co/480x300?font=roboto&text=Slide+3',
    'https://placehold.co/480x300?font=roboto&text=Slide+3',
    'https://placehold.co/480x300?font=roboto&text=Slide+4',
    'https://placehold.co/480x300?font=roboto&text=Slide+4',
    'https://placehold.co/480x300?font=roboto&text=Slide+5',
    'https://placehold.co/480x300?font=roboto&text=Slide+5',
    'https://placehold.co/480x300?font=roboto&text=Slide+6',
    'https://placehold.co/480x300?font=roboto&text=Slide+6',
    'https://placehold.co/480x300?font=roboto&text=Slide+7',
    'https://placehold.co/480x300?font=roboto&text=Slide+7',
    'https://placehold.co/480x300?font=roboto&text=Slide+8',
    'https://placehold.co/480x300?font=roboto&text=Slide+8',
];


import useEmblaCarousel from 'embla-carousel-react';
import Swipe from 'react-easy-swipe';

const Carousel = () => {
    // const [carouselRef] = useEmblaCarousel();

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        const newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    };

    const handlePrevSlide = () => {
        const newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    };

    return (
        // <div className='flex w-screen bg-gray-950' ref={carouselRef}>
        //     <div className="carousel w-96 bg-red-700 m-3">
        //         1
        //     </div>
        //     <div className="carousel w-96 bg-red-700 m-3">
        //         2
        //     </div>
        //     <div className="carousel w-96 bg-red-700 m-3">
        //         3
        //     </div>
        //     <div className="carousel w-96 bg-red-700 m-3">
        //         4
        //     </div>
        //     <div className="carousel w-96 bg-red-700 m-3">
        //         5
        //     </div>
        //     <div className="carousel w-96 bg-red-700 m-3">
        //         6
        //     </div>
        //     <div className="carousel w-96 bg-red-700 m-3">
        //         7
        //     </div>
        //     <div className="carousel w-96 bg-red-700 m-3">
        //         8
        //     </div>
        //     <div className="carousel w-96 bg-red-700 m-3">
        //         9
        //     </div>
        //     <div className="carousel w-96 bg-red-700 m-3">
        //         10
        //     </div>
        // </div>
        <div className="relative">
            <AiOutlineLeft
                onClick={handlePrevSlide}
                className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
            />
            <div className="w-full h-[50vh] flex overflow-hidden relative m-auto">
                {images.map((src, index) => (
                    <div
                        className={`${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        } transition-opacity duration-500 ease-in-out w-96 h-96`}
                        key={index}
                    >
                        <img src={src} alt={`Slide ${index + 1}`} className='bg-cover w-96 h-96'/>
                    </div>
                ))}
            </div>
            <AiOutlineRight
                onClick={handleNextSlide}
                className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
            />
        </div>
    );
};

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to my website</h1>
            <Carousel />
        </div>
    );
};

export default HomePage;