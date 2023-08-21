'use client'
import React from "react";
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
export default function ButtonSubmit({value , ...props}){
    const { pending } = useFormStatus()
    return(
        <button type='submit' disabled={pending} {...props} className='w-32 h-12 md:w-44 lg:h-14 rounded-full border border-gray-700 hover:border-0 hover:bg-gray-700 hover:text-white duration-300'>
            { pending ? 'Loading...': value}
        </button>
    )
}