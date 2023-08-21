import '../../globals.css'

export default function Customer(data) {
    console.log('data')
    console.log(data)
    const reserve = data.data[0]
    const service = data.data[1]
    const profile = data.data[2]
    return (
        <div className='w-full bg-white shadow-lg rounded-lg py-4 px-5 border'>
            <div className='flex text-xl text-center justify-between'>
                <h2 className='text-3xl'>{service.title}</h2>
                <p>{service.price} تومان</p>
            </div>
            <h1 className='text-lg mt-1'>{profile.first_name} {profile.last_name}</h1>
            <p className='mt-2'>شماره: {profile.phone}</p>
            <div className='flex mt-2 text-lg'>
                <p>{reserve.time}</p>
                <p className='ms-2'>{reserve.date}</p>
            </div>
            <a href='#' type="button" className='lg:w-80 w-64 h-10 border flex items-center justify-center text-gray-900 shadow-sm border-gray-300 mx-auto rounded-lg mt-3 hover:shadow-lg'>پیام به مراجعه کننده</a>
            <form method='POST' className='flex mt-3 justify-around items-center'>
                <input type="submit" name='busy' className='w-28 md:w-32 lg:w-36 h-10 border border-red-600 rounded-lg duration-500 text-red-600 hover:bg-red-600 hover:text-white hover:border-white shadow-lg hover:shadow-lg hover:shadow-red-200' value='False'/>
                <input type="submit" name='busy' className='w-28 md:w-32 lg:w-36 h-10 border border-green-600 rounded-lg duration-500 text-green-600 hover:bg-green-600 hover:text-white hover:border-white shadow-lg hover:shadow-lg hover:shadow-green-200' value='True'/>
            </form>
        </div>
    )
}