// export default async function handler(req, res) {
//     if (req.method === 'GET') {
//         res.status(200).json({message:'GET'})
//     } else if (req.method === 'POST') {
//         res.status(200).json({message:'POST'})
//     } else {
//         console.log( req.method === undefined)
//         console.log(req)
//     }
//     return (
//         <p>aaaaaaa</p>
//     )
// }


import React from "react";

export default async function handler(req, res) {
    const data  = req
    const obj = data.searchParams
    for (let y in obj){
        const jsObject = JSON.parse(y);
        console.log(jsObject.profile[1].id)



        }



    return (

        <div>
            {data.data}
        </div>
    )
}
