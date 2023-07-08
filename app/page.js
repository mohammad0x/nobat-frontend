import './globals.css';
import axios from "axios";
import React from "react";
import Header from "@/app/components/header/page";
import HairStyle from "@/app/components/hairStyle";
import Suggestion from "@/app/components/homeCard/suggestion";
import Footer from "@/app/components/footer/page";
import Back from "@/app/components/backBtn/page";

// export default async function getServiceSlide() {
//
//     const {data} = await axios.get('http://127.0.0.1:8000/login')
//     console.log(data.valueOf())
//     return (
//         <div>d</div>
//     )
// }

export default async function Home(){
  return(
      <html>
          <head>
              <meta charSet="UTF-8"/>
              <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
              <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
              <title>نوبت</title>
          </head>
          <body dir='rtl' className='footerBody'>
              <Header />
              <section className='py-6 px-3 h-4/6 md:h-4/6 lg:h-3/5 sm:px-8'>
                  <div className='relative'>
                      <h1 className='text-3xl font-bold'>پیشنهاد برای شما</h1>
                      {/*<div className='absolute position'><img src="" alt="arrow"/></div>*/}
                  </div>
                  <HairStyle />
              </section>

              <div className="w-full border-t pb-3 bt-3"></div>
              <section className='py-6 px-3 sm:px-8 mb-10 pt-3 h-4/6 md:h-4/6 '>
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

