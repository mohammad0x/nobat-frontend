import './globals.css';
import axios from "axios";
import React from "react";
import Header from "@/app/components/header/page";
import HairStyle from "@/app/components/hairStyle";
import Suggestion from "@/app/components/homeCard/suggestion";
import Footer from "@/app/components/footer/page";

export default async function Home(){
  return(
      <html>
          <head>
              <meta charSet="UTF-8"/>
              <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
              <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
              <title>نوبت</title>
          </head>
          <body dir='rtl'>
          <Header />
          <section className='py-6 px-3 sm:px-8'>
              <div className='relative'>
                  <h1 className='text-3xl font-bold'>پیشنهاد برای شما</h1>
                  {/*<div className='absolute position'><img src="" alt="arrow"/></div>*/}
              </div>
              <HairStyle />
          </section>
          <section className='w-5/6 h-48 flex flex-col mx-auto px-4 py-3 bg-gray-200 rounded-2xl'>
              <div className='relative'>
                  <h1 className='text-xl md:text-2xl font-bold'>سرویس های پیشنهادی</h1>
                  <div className='w-20 h-20 bg-white box-shadow rounded-full absolute position'></div>
              </div>
              <Suggestion />
          </section>
          <section className='py-6 px-3 sm:px-8 mt-5'>
              <div className='relative'>
                  <h1 className='text-3xl font-bold'>سرویس دهنده ها</h1>
                  {/*<div className='absolute position'><img src="" alt="arrow"/></div>*/}
              </div>
              <HairStyle />
          </section>
          <Footer title = 'home' />
          </body>
      </html>
  )
}

async function getServiceSlide() {
  const {data} = await axios.get('http://127.0.0.1:8000/api/')
  console.log(data)
  return (
      <div>h</div>
  )
}