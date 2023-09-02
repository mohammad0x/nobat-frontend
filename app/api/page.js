
import React from "react";


export default async function handler(req , res) {
    const obj = req.searchParams
    let y = getDate(obj)

    function getDate(obj) {
        for (let profile in obj) {
            var jsObject = JSON.parse(profile);
        }
        return jsObject
    }

    const list = []
    for (let cate of y.list) {
        list.push(cate)
    }

    console.log(list)
    return (
        <div>
            <p>al</p>
        </div>
    )
}

// export default function  Prof(context){
//     const obj =  context.searchParams
//     // let y = getDate(obj)
//     console.log(context)


    // function getDate(obj){
    //     for(let profile in obj ){
    //         var jsObject =  JSON.parse(profile);
    //     }
    //     return jsObject
    // }
    // return(
    //     <div>{y.profile[0].id}</div>
    // )
    // return(
    //     <div>
    //         <p>{y.id}aa</p>
    //     </div>
    // )
// }
