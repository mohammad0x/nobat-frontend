import Link from "next/link";
export default function Footer() {
    return (
        <section className='fixed bottom-0 rounded-t-xl shadow-stone-600 w-full h-20 bg-gray-950 text-xl text-center flex justify-center items-center text-gray-400'>
            <li className='flex-col list-none w-1/4 h-full flex justify-center items-center hover:text-gray-200'>
                <Link href="/" id='home'>خانه</Link>
            </li>
            <li className='flex-col list-none w-1/4 h-full flex justify-center items-center hover:text-gray-200'>
                <Link href="/nobat/" id='nobat'>نوبت ها</Link>
            </li>
            <li className='flex-col list-none w-1/4 h-full flex justify-center items-center hover:text-gray-200'>
                <Link href="/search/" id='search'>جستجو</Link>
            </li>
            <li className='flex-col list-none w-1/4 h-full flex justify-center items-center hover:text-gray-200'>
                <Link href="/profile/" id='profile'>پروفایل</Link>
            </li>
        </section>
    )
}

