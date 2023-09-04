import Link from "next/link";
import {router} from "next/client";

export default function Back(data) {
    const link= data.data
    return (
        <Link href={link}>
            <div className='absolute w-20 h-20 rounded-full -top-1 right-2 text-white flex justify-center items-center hover:text-gray-400 duration-500'>
                <h1 className='text-2xl'>
                    [---
                </h1>
            </div>
        </Link>
    )
}