import React from "react";
import Back from "@/app/components/backBtn/page";
import Link from "next/link";

export default function Email() {
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
                <section className='bg-gray-950 w-screen h-screen flex items-center justify-center'>
                    <div className='w-72 md:w-1/2 w-98 bg-white py-10 rounded text-center'>
                        <h1 className='text-xl md:text-2xl mb-8'>رمزعبور شما با موفقیت تغییر کرد</h1>
                        <Link href='../../login/' className='text-blue-600 hover:text-blue-800 duration-400'>وارد شوید</Link>
                    </div>
                </section>
            </body>
        </html>
    )
}