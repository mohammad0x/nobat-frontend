'use client'
import React from "react";
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
export default function ButtonSubmit({value , ...props}){
    const { pending } = useFormStatus()
    return(
        <div>
            <button type='submit' disabled={pending} {...props}>
                { pending ? 'Loading...': value}
            </button>
        </div>
    )

}