import React from "react";
import Footer from "@/app/components/footer/page";
import '../globals.css'

export default function Profile() {
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
                <ProfileView />
                <Footer />
            </body>
        </html>
    )
}

function ProfileView() {
    return (
        <section className='w-11/12 border border-gray-400 my-20 mx-auto py-6 px-4 rounded-2xl flex flex-col justify-center items-center'>
            <div className='relative flex items-center justify-center w-40'>
                <img className='w-32 h-32 bg-cover rounded-full' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAM1BMVEXk5ueutLepsLPb3t/n6erR1Nbh4+TV2Nqxt7q9wsTY29y2vL7DyMrKztC6v8LBxcjt7+++QDwtAAACsUlEQVRoge2a2bKkIAxAWSICit7//9pBvd1lzygkdqJVU5y3fjosIULSSjUajUaj0Wg0Go3GHsg8ZFbO9l1KqYtO3T4IlyavzYYeQlQ3DgBiyNI9Ro93DQCi/3T/juCmAYxH8pVO3A92OLVrM0vb46l79Q+y9v586hv+UXv2OzG7rcozk5ReDRi9GWXiH85P3Kc/iugjzp6RmD54rN0kfj906MmLnD5U3IlNH7/zGfbkB4Fg16Zn1jt04K3MzKtPWnv24MOmnDeWV0+I+wXTseqJW8+d+B3Nnr97rHrUp3aPZ9WX71hHsOoR15z/WU+18+rJe88beuTI5z141LSjedPOw0kXRuLsmW+7xJPH/dYhJv3AfN14+LKFeV3KrX2GcvT4n3mQ8NM3Ao9seHLylFeWEXlhw4S0CxW4kImf+8y/wB0+ueISavvFSkuo0+ckK5uQKnYrW1eFruA2g+jcV7+bzjZAoqZzMIBOHxbUJ+GFf/tV+ruib/TU39fPABXD0kv5VWuf7M3tHFC2T/Mc5jH1d7vV2kP72YBb22mwtdDGeRr8yjAtK3BHOy2bYwp+baF9RN7y00+pd3LtpLzbafCmkHaXlt7YS6wCgB2L6t0ZDD3zAMCmw1Rzugpz5BsAWOQ9Z8/Q8YQBxNMkX14CjgGAC5fk2wC+TMRQ6JiiBvDVZwjoJZ1/BvDFR3j+2n79CgKu0CwmcSUCGBb+xYUNoLwo637qy4PVvpwAkp/ZvsyfYie0DLF+fHOJVkjB+tGPfnLrAudHvrvxvWKiH/X4ZA+7N6jwd1J21PJjSyiXqC4/ELulJOrRT62cE6lNn94xo1D7+JDr9kRqLR5Ze63NwPeRP6EYfHIp50Vx9YXjXlfqvSA9eW1Kf2uQS7hvfSnxRiNOKfZctOIUFr/RaDQaovwBctMfXcGmjxoAAAAASUVORK5CYII=" alt="profile image"/>
                <a href="#" className='w-14 h-14 rounded-full bg-cyan-200 text-center flex justify-center items-center absolute -bottom-4 left-1'></a>
            </div>
            <h1 className='mt-5 text-2xl'>عرفان کاهانی</h1>
            <div className='mt-6 flex flex-col items-center'>
                <Service />
                <a href="#">
                    <div className='md:w-96 w-64 mx-2 my-2 h-11 rounded-xl flex items-center shadow justify-center border border-gray-400 hover:shadow-lg duration-500'>
                        تاریخچه
                    </div>
                </a>
                <div className='flex'>
                    <a href="#">
                        <div className='w-32 md:w-48 h-11 me-1 rounded-xl flex items-center shadow justify-center border border-gray-400 hover:shadow-lg duration-500'>
                            خروج از اکانت
                        </div>
                    </a>
                    <a href="#">
                        <div className='w-32 md:w-48  h-11 ms-1 rounded-xl flex items-center shadow justify-center border border-red-400 text-red-400 hover:shadow-lg hover:border-white hover:text-white hover:bg-red-400 duration-500'>
                            حذف اکانت
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

function Service() {
    return (
        <a href="#">
            <div className='md:w-96 w-64 mx-2 my-2 h-11 rounded-xl flex items-center shadow justify-center border border-gray-400 hover:shadow-lg duration-500'>
                سرویس ها
            </div>
        </a>
    )
}


