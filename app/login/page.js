export default function Login() {
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
                    <div className='w-auto md:w-auto bg-white rounded-lg py-5 md:py-7 px-6 md:flex md:items-center'>
                        <div className='flex items-center flex-col mt-6 md:mt-0 md:ms-6'>
                            <h1 className='text-4xl italic'>Login</h1>
                            <form action="" method="post" className='flex flex-col mt-5 items-center'>
                                <input type="email" name="email" id="email" className='w-64 border-b border-0 md:w-72 lg:w-80 h-8 lg:h-10 rounded mb-4 ' placeholder='ایمیل'/>
                                <input type="password" name='password' className='w-64 border-b border-0 md:w-72 lg:w-80 h-8 lg:h-10 rounded mb-4 ' placeholder='رمزعبور'/>
                                <input type="submit" value="ورود" className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-5'/>
                            </form>

                            <p className='text-sm mt-3'>اکانت ندارید؟ <a className='text-blue-500 hover:text-blue-800 duration-200' href="../register">ثبت نام</a> کنید</p>
                        </div>
                        <div className="md:h-96 border-l p-5 sm:block">

                        </div>
                                <div className='flex items-center flex-col mt-6 md:mt-0 md:ms-6'>
                                    <img src="http://127.0.0.1:3000/imageOrg.png" alt=""/>

                                </div>

                    </div>
                </section>
            </body>
        </html>
    )
}