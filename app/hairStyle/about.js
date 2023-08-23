export default function About(data) {
    let profile = data.data
    return (
        <section className='bg-gray-950'>
            <div className='Google-height relative bg-white flex items-center justify-center'>
                {/*  Google Api  */}
                <div className='absolute w-64 md:w-96 border rounded-lg p-4 bottom-3'>
                    <h1 className='text-2xl md:text-3xl mb-2'>ارایشگاه {profile.title}</h1>
                    <p className='text-lg'>{profile.city}: {profile.address}</p>
                </div>
            </div>
            <div className='border-t border-gray-300 pt-4 px-3 text-gray-300'>
                <h1 className='text-xl md:text-2xl lg:text-4xl mb-2'>About</h1>
                <p>{profile.slug}</p>
                <div className=' h-24 mt-5 border-y border-gray-300 py-4 px-3 text-gray-300 flex justify-between items-center'>
                    <div>
                        <p>{profile.phone}</p>
                    </div>
                    <input type="submit" className='w-32 h-14 rounded border' value='تماس'/>
                </div>
            </div>
        </section>
    )
}