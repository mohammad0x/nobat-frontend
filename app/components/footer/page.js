import Link from "next/link";
export default function Footer() {
    return (
        <section className='fixed bottom-0 z-20 rounded-t-xl shadow-stone-600 w-full h-20 bg-gray-950 text-xl text-center flex justify-center items-center text-gray-400'>
            <Link href="/" className='flex-col list-none w-1/4 h-full flex justify-center items-center hover:text-gray-200'>
                <p id='home'>خانه</p>
            </Link>
            <Link href="/nobat" className='flex-col list-none w-1/4 h-full flex justify-center items-center hover:text-gray-200'>
                <p id='nobat'>نوبت ها</p>
            </Link>
            <Link href="/search" className='flex-col list-none w-1/4 h-full flex justify-center items-center hover:text-gray-200'>
                <p id='search'>جستجو</p>
            </Link>
            <Link href="/profile" className='flex-col list-none w-1/4 h-full flex justify-center items-center hover:text-gray-200'>
                <p id='profile'>پروفایل</p>
            </Link>
        </section>
    )
}

