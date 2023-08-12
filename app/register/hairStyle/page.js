import Image from 'next/image'

export default function register_Hairstyle() {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
            <meta content="ie=edge"/>
            <title> Document < /title>
        </head>
        <body dir='rtl' className='footerBody'>
        <section className='w-screen h-screen px-5 bg-gray-950 flex items-center justify-center'>
            <div className=' w-auto md:w-auto bg-white rounded-lg py-4 md:py-7 px-6 flex flex-col-reverse md:flex-row md:items-center'>
                <div className='flex items-center flex-col md:mt-0 md:ms-6'>
                    <h1 className='text-3xl md:text-4xl italic'>Register hairStyle</h1>
                    <form method='POST' className='flex flex-col mt-5 items-center'>
                        <input type="text" name="username" id="username" className=' border-b w-64 md:w-72 lg:w-80 h-8 lg:h-10 rounded mb-4 border-0  ' placeholder='نام کابری'/>
                        <input type="email" name="email" id="email" className=' border-b w-64 md:w-72 lg:w-80 h-8 lg:h-10 rounded mb-4 border-0 ' placeholder='ایمیل'/>
                        <input type="password" name='password' className='border-b w-64 md:w-72 lg:w-80 h-8 lg:h-10 rounded mb-4 border-0 ' placeholder='رمزعبور'/>
                        <input type="password" name='password' className=' border-b w-64 md:w-72 lg:w-80 h-8 lg:h-10 rounded mb-4 border-0 ' placeholder='تکرار رمزعبور'/>
                        <input type="submit" value="ثبت نام" className='text-white w-36 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'/>
                    </form>
                    <p className='text-sm'>اکانت دارید؟ <Link href="../login" className='text-blue-700 hover:text-blue-900 duration-400'>وارد</Link> شوید</p>
                </div>
                <div className="md:h-96 border-l p-5"></div>
                <div className='w-full flex items-center justify-center flex-col md:ms-6'>
                    <img src="/imageOrg.png" alt="" className='w-44 h-44 md:w-80 md:h-80'/>
                </div>
            </div>
        </section>
        </body>
        </html>

    )
}