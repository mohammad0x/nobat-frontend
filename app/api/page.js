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
    // console.log(obj)
    for (let y in obj){
        // console.log( y)
        const jsObject = JSON.parse(y);
        console.log(jsObject.profile[1].id)


        //     const modifiedString = y.split('[').join('');
    //     const modifiedStrings = modifiedString.split(']').join('');
    //     const modifiedStringss = modifiedStrings.split('{"profile":').join('');
    //     let r = []
    //     r.push(modifiedStringss)
    //     console.log(r[1]);
    //     for(let i of r){
    //         console.log(typeof i)
        }

        // const jsObject = JSON.parse(modifiedStrings);

        // console.log(jsObject);


        // console.log(jsonObject);
        // console.log(modifiedStrings)



    // }

    return (

        <div>
            {data.data}
        </div>
    )
}
