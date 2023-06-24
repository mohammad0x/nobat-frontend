export default function History() {
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
                <header className='h-40 bg-gray-950 text-center flex justify-center items-center'>
                    <h1 className='text-white text-2xl'>تاریخچه</h1>
                </header>
                <section className='h-screen w-screen mt-6 flex flex-col items-center'>
                    <Customer />
                </section>
            </body>
        </html>
    )
}

function Customer() {
    return (
        <div className='w-72 h-40 border border-gray-400 rounded-lg px-4 py-6'>
            <h1 className='text-2xl'>ارایشگاه محمد</h1>
            <div className='flex mt-2 items-center justify-between'>
                <h2 className='text-xl'>مدل المانی</h2>
                <h3 className='text-lg'>22000 تومان</h3>
            </div>
            <h3 className='mt-3'>1402/4/15 22:00</h3>
        </div>
    )
}