'use client'
import React from 'react'
import HeaderHair from "@/app/hairStyle/header";
import Link from "next/link";
import About from "@/app/hairStyle/about";
import "@/app/reserve/[id]/js";

export default function HairStyle(req , res){
    const object =  req.searchParams
    let data = getDate(object)

    function getDate(object){
        for(let obj in object ){
            var jsObject =  JSON.parse(obj);
        }
        return jsObject
    }

    const profile = {}
    for (let obj of data.profile){
        profile.data = {
            'address':obj.address,
            'city':obj.city,
            'phone':obj.phone,
            'first_name':obj.first_name,
            'last_name':obj.last_name,
            'slug': data.slug,
        }
    }

    const create = {
        'title': data.title,
        'slug': data.slug,
        'image': data.image,
        'score': data.score,
        'comment': data.comment,
        'score':data.score,
    }
    const title = data.title

    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta content="ie=edge"/>
                <title> Document </title>
            </head>
            <body dir='rtl'>
                <HeaderHair data={create}/>
                <Collapse data={data.id}/>
                <div className='mb-80'>
                    <Review data={data.reviews}/>
                </div>
                <About data={profile.data}/>
            </body>
            <script>
            </script>
        </html>
    )
}

function Review(data){
    const w = data.data[1]
    let f5 = w[0] + '%' // 5-star percent
    let f4 = w[1] + '%' // 4-star percent
    let f3 = w[2] + '%' // 3-star percent
    let f2 = w[3] + '%' // 2-star percent
    let f1 = w[4] + '%' // 1-star percent
    let count = data.data[0] // star count
    const comment = data.data[2]
    const commentaction = '../../commentposts/' + 4
    return (
        <div className='flex flex-col items-center bg-gray-950 relative'>
            <div className="rating-card flex justify-center items-center w-full">
                <div className="text-center flex flex-col items-center m-b-5 py-6 w-5/6 text-gray-200">
                    <h1 className='text-4xl font-bold mb-3'>
                        {count[6]}
                        <small className='font-medium text-lg'>/5</small>
                    </h1>
                    <div className='text-gray-500 mb-5'>{count[5]} نظر</div>
                    <div className="rating-divided">
                        <div className="rating-progress flex flex-row-reverse items-center">
                            <span className="rating-grade flex"><img src="127.0.0.1:3000/star.png" className='w-5 h-5 ml-1' alt=""/> 5</span>
                            <div className="progress mx-2 w-36 md:w-96 h-4 bg-gray-200 rounded-xl">
                                <div
                                    style={{width : f5}}
                                    className="progress-bar bg-yellow-300 h-full rounded-xl" id='star-5' role="progressbar"></div>
                            </div>
                            <span className="rating-value">{count[0]}</span>
                        </div>
                        <div className="rating-progress flex flex-row-reverse items-center">
                            <span className="rating-grade flex"><img src="127.0.0.1:3000/star.png" className='w-5 h-5 ml-1' alt=""/> 4</span>
                            <div className="progress mx-2 w-36 md:w-96 h-4 bg-gray-200 rounded-xl">
                                <div style={{width : f4}} className="progress-bar bg-yellow-300 h-full rounded-xl" id='star-4' role="progressbar"></div>
                            </div>
                            <span className="rating-value">{count[1]}</span>
                        </div>
                        <div className="rating-progress flex flex-row-reverse items-center">
                            <span className="rating-grade flex"><img src="127.0.0.1:3000/star.png" className='w-5 h-5 ml-1' alt=""/> 3</span>
                            <div className="progress mx-2 w-36 md:w-96 h-4 bg-gray-200 rounded-xl">
                                <div style={{width : f3}} className="progress-bar bg-yellow-300 h-full rounded-xl" id='star-3' role="progressbar"></div>
                            </div>
                            <span className="rating-value">{count[2]}</span>
                        </div>
                        <div className="rating-progress flex flex-row-reverse items-center">
                            <span className="rating-grade flex"><img src="127.0.0.1:3000/star.png" className='w-5 h-5 ml-1' alt=""/> 2</span>
                            <div className="progress mx-2 w-36 md:w-96 h-4 bg-gray-200 rounded-xl">
                                <div style={{width : f2}} className="progress-bar bg-yellow-300 h-full rounded-xl" id='star-2' role="progressbar"></div>
                            </div>
                            <span className="rating-value">{count[3]}</span>
                        </div>
                        <div className="rating-progress flex flex-row-reverse items-center">
                            <span className="rating-grade flex"><img src="127.0.0.1:3000/star.png" className='w-5 h-5 ml-1.5' alt=""/> 1</span>
                            <div className="progress mx-2 w-36 md:w-96 h-4 bg-gray-200 rounded-xl">
                                <div style={{width : f1}} className="progress-bar bg-yellow-300 h-full rounded-xl" id='star-1' role="progressbar"></div>
                            </div>
                            <span className="rating-value">{count[4]}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-screen flex items-center justify-center flex-col'>
                {comment.map(item => {
                    return(
                        <Comments data={item}/>
                    )
                })}
            </div>
            <form method='POST' action={commentaction} id='commentForm' className='sticky w-full bottom-0 h-14 md:h-20 bg-gray-100 flex items-center px-3'>
                <input type="number" name='rate' max='5' min='1' className='w-1/5 md:w-28 h-7 md:h-10 rounded ml-2'/>
                <input type="text" name='desc' className='w-2/3 md:w-4/5 h-7 md:h-10 rounded' placeholder='نظر خود را وارد کنید ...'/>

                <input type="submit" value='ثبت نظر' className='w-32 h-7 md:h-10 ms-2 border border-gray-400 rounded'/>
                {/*  send icon  */}
            </form>
        </div>
    )
}


function Comments(data) {
    const user = data.data
    const replyUrl = '../../reply/' + 4 + '/' + 1
    const reply = user[4]
    console.log('comments')
    console.log(user)
    let star = user[1]
    let unStar = 5 - star
    let starli = new Array(star).fill(5)
    let unstarli = new Array(unStar).fill(5)
    return (
        <div className='w-11/12 md:w-1/2 p-2 rounded-lg shadow shadow-gray-400 flex flex-col justify-between bg-gray-50 mb-5'>
            <div className='p-3 pt-2 flex flex-col justify-between'>
                <div>
                    <div className='flex mb-4'>
                        {starli.map(item => {
                            return (
                                <Star/>
                            )
                        })}
                        {unstarli.map(item => {
                            return (
                                <Unstar/>
                            )
                        })}
                    </div>
                    <div className='flex items-center'>
                        <img src="/Landscape-Color.jpg" className='w-16 h-16 border rounded-full relative' alt="user-profile"/>
                        <h1 className='text-lg ms-2'>{user[2]}</h1>
                    </div>
                    <div className='text-right w-5/6 pr-4 mt-1'>
                        <p className='text-2sm mb-2 text-gray-700'>{user[3]}</p>
                        <p className='text-sm mb-2'>{user[0]}</p>
                    </div>
                </div>
                <form method='POST' action={replyUrl} id='5' className='w-full bottom-0 h-14 md:h-20 flex items-center px-3'>
                    <input type="text" name='desc' className='w-44 md:text-sm md:w-4/5 h-7 md:h-10 rounded' placeholder='نظر خود را وارد کنید ...'/>
                    <input type="submit" value='ثبت پاسخ' className='w-32 h-7 md:h-10 ms-2 border border-gray-400 rounded'/>
                    {/*  send icon  */}
                </form>
            </div>
            <div>
                {reply.map(item => {
                    return(
                        <Reply data={item}/>
                    )
                })}
            </div>
        </div>
    )
}

function Star(data) {
    return (
        <img src="http://127.0.0.1:3000/stargold.png" className='w-6 h-6' alt="star"/>
    )
}

function Unstar(data) {
    return (
        <img src="/stargold.png" className='w-6 h-6' alt="star"/>
    )
}

function Reply(data) {
    console.log(data.data)
    return (
        <div className='p-3 rounded-lg shadow shadow-gray-400 flex justify-between bg-gray-100 py-4 mt-2'>
            <img src="/Landscape-Color.jpg" className='w-16 h-16 rounded-full' alt="user-profile"/>
            <div className='text-right w-5/6 pr-2'>
                <h1 className='text-lg'>{data.data[2]} {data.data[3]}</h1>
                <p className='text-2sm mb-2 text-gray-700'>{data.data[1]}</p>
                <p className='text-sm mb-2'>{data.data[0]}</p>
            </div>
        </div>
    )
}

function Collapse(data) {
    let id = data.data
    const service = '../service/'+id
    const post = '../post/'+id
    return (
        <section className='flex h-28 bg-white'>
            <ul className='w-full h-full flex justify-around text-lg bg-gray-950 pt-4'>
                <li className='w-24 md:w-52 w-92 h-full bg-white rounded-lg'>
                    <Link href={service} className='w-full h-full flex justify-center items-center'>سرویس ها</Link>
                </li>
                <li className='w-24 md:w-52 w-92 h-full bg-white rounded-lg'>
                    <Link href={post} className='w-full h-full flex justify-center items-center'>نمونه کارها</Link>
                </li>
                <li className='w-24 md:w-52 w-92 h-full bg-gray-200 rounded-lg'>
                    <p className='w-full h-full flex justify-center items-center'>نظرات</p>
                </li>
            </ul>
        </section>
    )
}

// function Document(){
//     useEffect(() => {
//         document.getElementById('star-1').style.width = '86%';
//         document.getElementById('star-1').style.background = 'red';
//     })
// }

