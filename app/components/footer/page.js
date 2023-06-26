export default function Footer() {
    return (
        <section className='fixed bottom-0 shadow-stone-600 w-full h-28 bg-gray-950 text-xl text-center flex justify-center items-center text-gray-400'>
            <li className='flex-col list-none w-1/4 h-full flex justify-center items-center hover:text-gray-200'>
                <a href="/" id='home'>خانه</a>
            </li>
            <li className='flex-col list-none w-1/4 h-full flex justify-center items-center hover:text-gray-200'>
                <a href="/nobat" id='nobat'>نوبت ها</a>
            </li>
            <li className='flex-col list-none w-1/4 h-full flex justify-center items-center hover:text-gray-200'>
                <a href="/search" id='search'>جستجو</a>
            </li>
            <li className='flex-col list-none w-1/4 h-full flex justify-center items-center hover:text-gray-200'>
                <a href="/profile" id='profile'>پروفایل</a>
            </li>
            {/*<script type="text/javascript">*/}
            {/*    constlicolor=document.getElementById(title).style.color='#CECECE28';*/}
            {/*</script>*/}
        </section>
    )
}

