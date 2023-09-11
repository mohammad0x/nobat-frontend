export default function Reserve({params}) {
    console.log(params)
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
                <section className='flex justify-center items-center bg-gray-950 w-full h-screen'>
                    <div className='w-72 h-80 md:w-10/12 lg:w-1/2 md:h-96 border border-gray-400 rounded-lg flex sm:items-center md:justify-around flex-col md:flex-row py-8 md:py-14 px-4 md:px-7 bg-white'>
                        <h1 className='text-3xl md:text-4xl'>رزرو</h1>
                        <form method="POST" className='flex flex-col sm:mt-8 items-center md:w-6/12 lg:w-1/2'>
                            <input type="date" name='date' className='w-64 h-10 md:w-11/12 md:h-11 rounded mb-5 shadow focus:shadow-lg'/>
                            <input type="number" name='number' placeholder='تعداد' defaultValue='1' className='w-64 h-10 md:w-11/12 md:h-11 rounded mb-5 shadow focus::shadow-lg'/>
                            <input type="time" name='time' className='w-64 h-10 md:w-11/12 md:h-11 rounded mb-5 shadow focus::shadow-lg'/>
                            <input type="submit" value="رزرو" className='w-48 h-14 md:w-7/12 md:h-16 border border-gray-400 rounded mt-3 shadow hover:shadow-lg duration-500'/>
                        </form>
                    </div>
                </section>
            </body>
        </html>
    )
}