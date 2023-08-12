
import React from "react";


export default async function handler(req , res){
    const obj =  req.searchParams
    let y = getDate(obj)

    function getDate(obj){
        for(let profile in obj ){
            var jsObject =  JSON.parse(profile);
        }
        return jsObject
    }
    console.log(y)

    return(
        <div>
            <p>{y.id}aa</p>
        </div>
    )
}

