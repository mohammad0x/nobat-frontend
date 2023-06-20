import '../../globals.css'

export default function Customer() {
    return (
        <section className='w-80 lg:w-96 md:w-96 py-6 px-3 flex items-center flex-col mx-auto'>
            <div className='w-full  bg-white shadow-lg rounded-lg py-4 px-5 border'>
                <h1 className='text-2xl'>ارایشگاه محمد</h1>
                <div className='flex mt-2 text-lg text-center justify-between'>
                    <h2 className='text-xl'>مدل المانی</h2>
                    <p>20000 تومان</p>
                </div>
                <p className='mt-2'>بلوار اموزگار نرسیده به بلوار ولیعصر از سمت بلوار جانبازان</p>
                <div className='flex mt-2 text-lg'>
                    <p>20:00</p>
                    <p className='ms-2'>1402/3/31</p>
                </div>
                <a href='#' type="button" className='lg:w-80 w-64 h-10 border flex items-center justify-center text-gray-900 shadow-sm border-gray-300 mx-auto rounded-lg mt-3 hover:shadow-lg'>پیام به ارایشگر</a>
                <div className='flex mt-3 justify-around items-center'>
                    <div className='w-24 h-24 bg-gray-400 text-sm rounded-full flex justify-center items-center text-center'>در انتظار تایید ارایشگر</div>
                    <div className='w-24 h-24 bg-green-700 text-lg rounded-full flex justify-center items-center text-center'>تایید شده</div>
                </div>
            </div>
        </section>
    )
}