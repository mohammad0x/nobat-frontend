import './globals.css';
import axios from "axios";
import React from "react";
import Header from "@/app/components/header/page";

export default async function Home() {
  return(
      <html>
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
          <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
          <title>نوبت</title>
        </head>
        <body>
          <Header />
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