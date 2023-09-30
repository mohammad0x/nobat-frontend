'use client'
import React from "react";
import HeaderHair from "@/app/hairStyle/header";
import Link from "next/link";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// end import swiper
import About from "@/app/hairStyle/about";
import "@/app/globals.css";

// import required modules
export default function Service(req , res){
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
            'slug': data.slug
        }
    }
    const create = {
        'title': data.title,
        'slug': data.slug,
        'image': data.image,
        'score': data.score,
        'comment': data.comment,
    }
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
                <Swiper pagination={{dynamicBullets: true,}} modules={[Pagination]} className="bg-gray-950 flex items-center justify-center mb-80">
                    {data.service.map(item => {
                        return(
                            <SwiperSlide className='w-screen swiper-slide items-center justify-center py-6 px-10 flex'>
                                <ServiceCard data={item}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <About data={profile.data}/>
            </body>
        </html>
    )
}

function Collapse(data) {
    let id = data.data
    const post = '../post/'+id
    const review = '../review/'+id
    return (
        <section className='flex h-28 bg-white'>
            <ul className='w-full h-full flex justify-around text-lg bg-gray-950 pt-4'>
                <li className='w-24 md:w-52 w-92 h-full bg-white rounded-lg'>
                    <p className='w-full h-full flex justify-center items-center'>سرویس ها</p>
                </li>
                <li className='w-24 md:w-52 w-92 h-full bg-white rounded-lg'>
                    <Link href={post} className='w-full h-full flex justify-center items-center'>نمونه کارها</Link>
                </li>
                <li className='w-24 md:w-52 w-92 h-full bg-gray-200 rounded-lg'>
                    <Link href={review} className='w-full h-full flex justify-center items-center'>نظرات</Link>
                </li>
            </ul>
        </section>
    )
}

function ServiceCard(data){
    const service = data.data
    const url = '../../reserve/' + service.id
    return (
        <div className='w-72 md:w-96 bg-white flex flex-col items-center md:mb-4 border border-gray-400 rounded-lg px-4 py-4 md:py-6 shadow hover:shadow-lg duration-500'>
            <img className='rounded-lg w-64 md:w-80 mx-auto mb-4'
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRYVFRISEhgSGBISEhISEhIRERISGBgZGRgYGhgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJCsxNDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALkBEAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBQIEBgEAB//EADgQAAIBAgUCAwYFAgYDAAAAAAECAAMRBAUSITFBUQZhcRMiMoGRoUKxwdHwFHIVM1Ji4fEjNKL/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAhEQADAAICAgMBAQAAAAAAAAAAAQIRIQMxEkETIjIEUf/aAAwDAQACEQMRAD8AT4gbyzhjtK2KhMK0yFZZcQUOYJxGADzjKtdHWjAkWJWMfCxXRsRfqOohA6qiCxJfoJzCZcBqt7jX2I9Jy1TeUztUqcNIsZpm/s9gQD3MzlfxfWTb3T57xmmRs+tqj6nBIU9AOm0zWZZHWD25HlEnx6DXl6HOD8UO4OoXPlA43xYRsBxCYbJyqJpGl2IF7cjrMzneXulVl3PW9rcxpmXRqqlJocH4xZjpdNjteCx1UM913FogwOBcn4YxxThHRQtiR73pLSkno56ba2P8IfdEReJa1lIjrAn3ZmfE7b2jExZgrdZZpVV1gLFaNaGwb++Jq6Gns3+F+EQzSthG9wSyZLj6DydlLHcTOV9NzNDmHEyOKY3Mdzkfjvx9EqjLBrUF5U1m86TvMpwGrbGiNcQNadw7bTlaMSKpjXKmioxjlhk7/JSP0PdU8xg7zxM4zoOOdjEGNPvfOO3O0R434pfh7J8vQdDtJrxJYWlqEJVp6RKUi3BeVgFD4dpXvD4Y7xUPzfke4sTmGMJilgKTWnQjy2MVMiwkUeEjAGmUuGGlhfTwZ32lqjr6ERbQrMhusB7VtbOTcneQqN5R0zyZlJjtKhBJ6Hm3QwyunNwfWJ8JmPvaT1l0V6Vz7wuOZCpwy81lF/L0u5drAAWQfrEPiZ01BxYncEeUX5vmbox0O2ngDpEdLFFiS7G/n2jqX2arXQ8w1QbWt6Slj6d6hYm5Nr26eUrJXAb9o0wuF1bmU45wQ5ayHwYssyniR7vabR1CqZgc7e9SUIFBpLCt74kHnaHxD1mfQUb3B1PcEuo9xEKVdKAxhl+JDLJR0PydhMatxMljqdiZsMRxM5j6VzxHFkQFd50iW2o+Uh7Exgk8OYWoYNVtOs0wADS7lzbyi8tYA7xLWh5ex7qkoJTtCTkZ0kHMS47mOHibHcyvF2S5ehplPSNKuD1CKcoPE1GH4l2skZpz0Z2tl5EGtErNHWQXi7HqApiuUU+Wq0xm9O8qvhzGKGSKCUICclhJpXMYtQBgf6UTZNgqtioPWWuR06S+MGIfD4UA+szegytiNMSL34hsNRDAnXa8oZzhmpuSPhP2nMBiFKkM1pOllZRWaw9nczfTsKinyIiGuzEkkg+ku5jh0L/5l4rqi2wN40oNVkZ5WNbqJt6a6QBEXhrABU1ncnjyjwmFEWV8wqWQz55jXu5PnNrndWyGYRzdowDrjaRpfEPWTfiDTkTBNOxvS+UlkbwSt/4/lBZLU94+sjHsryejS1N5RrUbxzg8sq1RdEJA6kgD5Xj7B+GKfsx7UMXbmzWC+Q7zVyTPYs8dV0fO6lASs9MT6afB+HC2Z6hJJswIFh02ivH+CFC+5XOroKie6T2uOIFzS2F8VI+fV07SqVMc4zL6lJtNSmyHpcGx9D1lOvT2liZRVL8S3hqRB4nMCBq3jOqgHEVodL2EXiSEEjbSd5yNbOlPRxoox43jVjFWO5lOPsnydF7KDxNRhztMplJ4mqw52nQznJNzF+aj3YwLi8oZofdMDChlRaWBKVBpbUxgEp4Tgdb7yyjp3EGAArTqA3EL/Up3ELSdWNgQe9pnhLY0pvoo5phAwva8yWZYAAXHumb+um3pEOa4YESSos4yfOn1X5kqFPcXjbE5fvsIFsIUO8p5CeDNlklO9Kw6SwgDEqGFxyOsVZJjtCG54mfxubsa7Oh022FuDBL9AuV2NPE4KqZjjzHOYZk9ZbP06iUqKDour847aQiRXbiBWPqRXrTBvxuf1h0o0SN00nuVBk3yJeiq4m/ZHAqWS3lHvhbw+ajFm91FPvN1J7CLqVLRutrf/P8AxGuCz56QCGndB/pJU78nzkXen4lfDaybujjURkpINh7oA426y3ia4UKSbbiYXKM2QVy7syrpOkMOGPp5RvW8RUHqJdwVXUe4JttIeL9lnj0OcVj1NlDC5KgfMxf4jzL2aEg7jj1iTMfEtL2tMgHSjgmwt5ftFPivORWIVRYDffrHmG2JTwhonjJHUUqlJaiFQH1i9j5dpmc1wJRrqG0OSabHgr2v3EpV0tpbuI/w1b2tBKZ30MSt+56Tpn66IV9tiHD4Qg3vD1dp6riNBKkEEbWlSrXJlCWy6h2k7HsYHAG7AHqZvcsyZGXcCQ8G2Wd4RhrGVcZgnO4UnyHM3+aZIiC4W3WUst0M1iQNiN/KNM+LFq/JGOy5CpswIPYi01OG4nc6wqLYra4P2kcIdpTOSRDEKRKWOvpjHFOB1i/GMCpmfQV2XaBl6nKtBIapXVBdiBMAP/hZfg2kamTaAWZ7Ad5WbxfTQWUFz5TMZz4hrVzYtoX/AEqfzMosAPZnj/fKoxsOt+ZqfAz66bkm7XO5nz9TNZ4GxgR2Qm2riS5eivF2bV0iPMdriad6BIFokznCG17cSCaOnxYjwmF1G9pVzCiC1rTTYSgAnrM5nGOp0ibkFugEdd6F1jYpzBNCEA2v0lfN0wyaEoLrKorVa5LFnqMLlQOAold2eqS7Hbchb2sIAUTz3NvL/uVWjnrbO06ZPB46GXqOFW2sErYbg7jn+WkcNhSfiGpeun418wI0RCigrpqLcWYci46jsb27fCfVKrOhpWNlFFa+yHk32OxvLz0h9Ldb7wyV1ALI3NtSHew7Anceh484F8QjcCx/S20jSZeWjlNrEjp0HItCK5G3K7eg9JTqtudwthx9vrvBtVBIVdtXuKSeQN7/AGaZTkzvAwYDfkW47j0MF7Ek32ueo2F+9vOSovs5JvYkL6Lz+RlajmK8E8bfXgfb7zKX6FqkCxNItdCNLgXB6HtIO9yNQN1FmHnGmJqqdLgjqRsLi9vt+89Too+oGxf8DDa6m5AI78j5SqbXYvYqr1dVhawEs5VjghKngkH0Mr4qgVJlQbGN2J0a/MsAlZda21gX/uH7zPPQtGOU5gRYE8cSeOpAsWHXeTaa6Glr2LcJs6+on1HJKqlRv0E+Xth2vcAx1lWbvTNm4jTWHsW4bWUbfxBUshPlPl5zMo1x0JmizjPNaFRMXUS5lW0xEmhr/irVCAbAeUcJW0peZnB0bG8a4muNFr9JsAF+ZZmSxCwFLFu228Bh0u5v3jWlhwN7CAxolrBVLHpMjm+YGq/PujgRvn7siBDsW/KZdm3jIBItacXvBjeSc7QmCJxJJVZSGUlSNwRBrOGYxvfDvjYABMR02Djj5zTpnOGrXAqJ9RPi5Wc1MOJGuFPotPNSWHs33ifxEtIGnRYMerDcLMGzs73YlidyTIhDy0nhhcj/AHH7R1PihHTpj7BYcaLXALg7n8hOPhXUk6lI+EggFSJNHS+xtp2+Yt+v5T1fELZt7m4t9dz+Ul9slfrgt4Y6FO+qwvoYlag76XB3Hr9ouxmKuwIDKeCdlJ2tcjg/l5DqOrj+ANrLa/faUmxtxY7njzjTOBapMss/c7jbUOR6zy4jk9QWHFug/cwCbgkniw+k5o255O/0H7QtICbCvX3DHy9CeZFKh1FviKjSNuAfL+cSviKgFh6GDXEkIwU2LcnsPKZTozrZbOYHgHZQQd+bi3z5MoqCx24NtztI006D5nr6CXFpk8bDbeMkkLthaeK97SSAttBvx2v9BGNBHBR7MAzFA9rqD+EfNrfWK3w9rkdOI4yqtejZz+NSLdantKdr+Vgd4tLWhp09l7MaOpQ1rFgGI8yJnKiWM2uYUdI0noPtMnjUsYJehqWwdB7GP8E+vaZxI1y2vpIjCGnp4MW6HylLHZW5Fwth5y9gcwQEBtvM8Rji86ogWLAnyirjXlnJev6Pp44MlTw2x1CxlVsAuqPsVXRgSLb8RMGYtsY7aRCZqukU8QukbSoQzcAmaZct1i5nqGXhRbg33gVeXQXLjVIyqU7G9oywb3Fo0qZaCTOU8ssduYyQlVkX+M8UHxLBeKfufPrMxU5lnE1izMx5Ylj6k3lHXzGEQRn6CSbpIUR1kz0mCEWeJnhOGYx0TqreRWTqvYbTGK+Je50iW1pabH/aG+f8MoJubxrT3QHy0n6xWGQSX037/qZ2x2N+f5+ksJSso69Pmv8AzB4kW/nlFyOUHJuR6icCEG8Ko3v5X+06nbyP0P8A3CKBaow29DOiqfP5feEdP+Z72dvU3ExiKKt+54vz8532QBPlJBbcTwmCeQWNj6xlQcWlJE3vLCGZjIsObg9YYsqKo2JLKx7ixBP5Str0+99pGgw1K9S+kuBxsQNyPuNoAtm2x+KWqiuFK6hex5A6TK5igvHWMqEAcEMLoR8LL3ETYreIlgLeRaBLGGJLACVqh3tLmWuqNrYjyENZxo0JOkn0W3w1Vutpz/DH7yy2coIJ89WRzys9Bz/KvYbD4BzsWMcYLJlG5Jmb/wAdsbiSbxM/S30jKafZOubij8m6TDoot+sqY0oO0xT+Iqh/EZWqZw7ckmNPG56Ev+iaW1k1DYsAxx4ZZHq+8RYb2nzc41zDYTNK1NtSGxlsnA1/grZuZWHaHcEAE8G9oBmsbxgBgekIOkro28NeYwWRE4DPapjE72leobybNBtMY6kY4F9iDv1tFymESoVII6QNZCmN6jfz1lKvUP7ybvcXHBAlfVFSGbOKt/5/O8kqbj7zoa89Rf3rxgFl6Vh6yu8Z4bDtVdUTlu/AHUnyEs42lhqR06nqHgtsFv8ATiTdYeCq421kRTl5ZdVLe6LDsZxaO9iCI2SbTJ0UvDaLQmGpWvJ1IGyiWhfXeFakSiEvqA1HRYgITa49YRaAJjTMsKi4ZWTcobt33hyJgFlVZXU0XJ08ow+Kmx6r+0W47C1UcozXtuGHwsp4IgcPV0nUekbo5dQWHe3pJU3Oy0yq17EvsH853+lbzjdknCsT5mP8KFYwhklwUYgSSiD5aD8Mi3+ihFwMusIRRA+SjLjkof0YnhhRLZnIfNm8EDTCidNAdoZDOHmL5MPijP4ge4h/uH3EpPL9Rb0lPZ2H2EXOJ3HASpGGDyoGh0O0xguqeLQayDNMYKWkGMionTzMYIk6xnlkTMYtYWp+E9ePXtJOhlOXKb6hvyPuIrQUB3ligsiyzqIbwhNZktEKCwNmdHUeRNj+kzuOFl35BK+e3Md4MEICORuPKU8xpBxqta/xqNrN3HrJYw8nSqzPiKsK+onuN/URuhVgCZRq4RFCsoYMOd7iHoDYQsRZXYZ17QBBlgCDbaYzBO1pYp1tSOh4YEfaVKhnaTWvCKEy/CgDURfewv0l4wCVdiFtpvxfe4E8HM5uRZo6uL8hWU9pFlkWryLVLxEijwTRSeIZMM05hGsZfaoIGmdXHwy19ir/AERMKuB85I4mQbGecGy6/n4yS5eOphFy9JTfHecr1MxI6wrJnxcSHAwaDtJpSpjtM+2Yt5yH9ce8fxom1wna2TaKah3ADu17fEthM3VpEEjsSJ9H8R0ChRSpZmY2AGzWHMx2b4Fk0OR7tQFlI+49Z0ReVs8O48WJkpSZEKINpVEzzbCAXeEqnacQQgCIJFBvCNxPKLTGPGQk2kVExjtpJH0kEdJwCDqGYw9o0tahhwd5dwWA1mwH/U74Ho+2FWmT8IVl+ZIP6TYYHLfZg3sSfyiN4KSs7KH9KEUKOko1cMI9xFOLqySZWUJcThrDY28uZRw223aO66XET1lsYUagpaVatSQqVpWapeNgR0FL3kgdiO8CJJKliDzYg2hBkY0sOV2Iseo7QpWe9trAcbX/AElzDUe847f2eT0OCHaSQvZJwiPKmEBWJ6lOxgQ98TlkqM5VrwZe0qVHjI61hSGeuYNqsrlpEtGUiOwrVIB27zxMG4jyjn5LbTDV3AG08jiBqL7vyE4lu8s1o8ybfmtn0TMM4QuhIBKkEX5ESeJSrUNFr2Y1KZAvpB5U+W8Bi8SjXvYlfrO4XMERWfY7WKNuCPKc/i53g6U5pYbMkBOVEl7EsjVGKLpU7hex62g8WnuzpTOKlh4Fr8wiwa8wwjAJMZ4GQJkhMY85nVEhJiYx0mVnNzDVGtPYPDM7aVHPJ7DvMY0PgnGeyqs2ksCmk25tcTdjOqLfj0+Tgj78TG5fSFHcIL25N9z3/WGqOOfr1H3gcphVtaNolHWLqyEeTBvyvBvk7kEg/OxtMhTrgDZd/wDUp0tOHO63ArVTbo7Xt9YPBDfLQ6xmXOt/hP1H5iZ7G4Wp0W/oVP5GWW8TVhswpuPmp/OUcRnmo3anbzU3/SbxRvkbFtamw5BHqCIEm0ZNmtMj8Y8ioP6z2BKOSdA2+QJ/tgekZPLKNOm77KpPn0+suUcsbl2AHYbn6xmTIu85q5aelo6Z4pW3s8CAAALAcS7hn2i12haGJ08yTWT0P5KUto0OGXUsR5mhVjOpnGkwWLxoeNjRe0qbwxfUaAJhapgbx0JTOGenjPQk2ctIuNpKdUC4vxChKWmVMQDplale8a4/TpAFuOkoLa06M6PKw1Q9xWWv7RyrLUDG/NjKFKqEcq44uGUxjT+L6RLjf81vWJO+xr+vR3bWbCwvsJPHtZPWCXmezL4RKIiLkhjApCGEx0TxnJ2Yx6TSQkxxMYEVLMFAuSZrcswq01A/Ed2PczPZP/mTTdRCBhqj/O/eUa1TSd+JZqcypjPhhMQYkbruO37QTsH3XkciEw/A/nWHxH+YsVmQsqb7cEdDzKriN82+NP7f2iqryZgldmhMNV0NcEj8oKcWYw+WnV2dbOrblQRcfIywdxexHcEEEQWV/DLdT8XpJ8kp7KcVtPBWMg67Sc4eJynqfz7bND4SyCjXRncayDa1ztz29PvFebZctGq6KbqLFb8gHpNN4A+Cp6j8og8Q/wDsVPWVr8ojw0/ncmfqneDk6nMhFR112enpyemFPTwkZ0QgOOLwJp2hzOGFMnUrJ//Z"
                alt=""/>
            <div className='w-full px-1 flex justify-between items-center'>
                <h1 className='text-2xl'>{service.title}</h1>
                <p>{service.price} تومان</p>
            </div>
            <div className='w-full px-1'>
                <h4 className='mt-2'>{service.desc}</h4>
            </div>
            <a href={url} className='w-64 h-12 border border-green-600 rounded-lg text-green-600 hover:text-white hover:bg-green-600 hover:border-white mt-4 shadow hover:shadow-lg hover:shadow-green-100 duration-500 flex justify-center items-center'>رزرو</a>
        </div>
    )
}