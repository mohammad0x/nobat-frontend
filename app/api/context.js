
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
function Profile({items}){
    console.log(items)
    return(
        <div>
            <p>hello</p>
            {/*<Handler />*/}
        </div>
    )
}

export default async function Handler(req, res) {
    const data  = req
    const obj = data.searchParams
    for (let profile in obj){
        var jsObject = await JSON.parse(profile);
        console.log(jsObject.profile)


    }
    // {jsObject.profile.map(item=>{
    //     <Profile  items={item}/>
    //     console.log(item.id)
    //
    // })}
    console.log(jsObject.profile[1].user_id)

    return (
        <div>
            <Profile items="hello" />

            {jsObject.profile.map(item=>{
                <Profile items={item} />
                console.log(item.id)

            })}
            hello
        </div>
    )
}
