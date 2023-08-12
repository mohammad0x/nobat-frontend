//
import React from "react";



export async function handler(req , res ){
    const data = req
    const obj =  data.searchParams

    return {
        props :  { profile : obj }
    }
    // let y = getDate(obj)
    //
    // function getDate(obj){
    //     for(let profile in obj ){
    //         var jsObject =  JSON.parse(profile);
    //     }
    //     return jsObject
    // }

    // return(
    //     <div>
    //         <p>al{y.profile[0].id}</p>
    //     </div>
    // )
}

export default function  Prof(context){
    const obj =  context.searchParams
    // let y = getDate(obj)
    console.log(context)


    // function getDate(obj){
    //     for(let profile in obj ){
    //         var jsObject =  JSON.parse(profile);
    //     }
    //     return jsObject
    // }
    // return(
    //     <div>{y.profile[0].id}</div>
    // )
}
