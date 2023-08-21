import createService from "@/app/createService/page";

export default function hairStyleCard(data) {
    let createService = data.data
    let img = 'http://127.0.0.1:3000/' + createService.image
    return (
        <div className='border1 w-80 px-3'>
            <div className='relative w-72'>
                <img className='bg-cover rounded-2xl w-full h-44' src={img} alt='hairStyleImage'/>
                <div className='text-center w-36 bg-transparent-gray absolute h-20 top-0 rounded-bl-2xl rounded-tr-2xl'>
                    <h1 className='mt-3 text-xl font-bold'>{createService.score}</h1>
                    <h4 className='text-lg'>1200 نظر</h4>
                </div>
            </div>
            <h1 className='text-3xl mt-4 fontw pr-3'>{createService.title}</h1>
            <h5 className='text-lg pr-3'>{createService.slug}</h5>
        </div>
    )
}