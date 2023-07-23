export default function About() {
    return (
        <section className='bg-gray-950'>
            <div className='w-screen h-96 relative bg-white'>
                {/*  Google Api  */}
                <div className='absolute w-72 md:w-96 border rounded-lg p-4 bottom-3 right-1/2'>
                    <h1 className='text-2xl md:text-3xl mb-2'>ارایشگاه عرفان</h1>
                    <p className='text-lg'>نیشابور: خیابان امام خمینی نرسیده به چهارراه انقلاب</p>
                </div>
            </div>
            <div className='w-screen border-y border-gray-300 py-4 px-3 text-gray-200'>
                <h1 className='text-xl md:text-2xl lg:text-4xl mb-2'>About</h1>
                <p>بهترین در شهربهترین در شهربهترین در شهربهترین در شهربهترین در شهربهترین در شهربهترین در شهر</p>
                <div className='w-screen h-24 mt-5 border-y border-gray-300 py-4 px-3 text-gray-300 flex justify-between items-center'>
                    <div>
                        <p>09123456789</p>
                    </div>
                    <input type="submit" className='w-32 h-14 rounded border' value='تماس'/>
                </div>

            </div>
        </section>
    )
}