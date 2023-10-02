import '../../globals.css'
import Link from "next/link";

export default function Customer(data) {
    const reserve = data.data[0]
    const service = data.data[1]
    const create = data.data[2]
    return (
        <section className='w-80 lg:w-96 md:w-96 py-6 px-3 flex items-center flex-col mx-auto mb-3'>
            <div className='w-full  bg-white shadow-lg rounded-lg py-4 px-5 border'>
                <h1 className='text-2xl'>{create.title}</h1>
                <div className='flex mt-2 text-lg text-center justify-between'>
                    <h2>{service.title}</h2>
                    <p>{service.price} تومان</p>
                </div>
                <p className='mt-2'>{create.address}</p>
                <div className='flex mt-2 text-'>
                    <p>{reserve.time}</p>
                    <p className='ms-2'>{reserve.date}</p>
                </div>
                <Link href='#' type="button" className='lg:w-80 w-64 h-10 border flex items-center justify-center duration-300 text-gray-900 shadow-sm border-gray-300 mx-auto rounded-lg mt-3 hover:shadow-lg'>پیام به ارایشگر</Link>
                <div className='flex mt-3 justify-around items-center'>
                    <div className='w-24 h-24 bg-gray-400 text-sm rounded-full flex justify-center items-center text-center'>در انتظار تایید ارایشگر</div>
                    <div className='w-24 h-24 bg-green-700 text-lg rounded-full flex justify-center items-center text-center'>تایید شده</div>
                </div>
            </div>
        </section>
    )
}