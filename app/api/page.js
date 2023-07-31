
import React from "react";


export default async function handler(req , res){
    const data = req
    const obj =  data.searchParams
    let y = getDate(obj)

    function getDate(obj){
        for(let profile in obj ){
            var jsObject =  JSON.parse(profile);
        }
        return jsObject
    }


    return(
        <div>
            <p>al{y.profile[0].id}</p>
        </div>
    )
}

