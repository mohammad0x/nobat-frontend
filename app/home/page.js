import axios from "axios";
import React from 'react';

export async  function getServerSide(){
    const { data } = await axios.get('http://127.0.0.1:8000/api/')

    console.log(data)

    return (
        <div className='bg-amber-300 h-96 w-96'>{data}</div>
    )
}