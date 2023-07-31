import Link from "next/link";
import React from "react";

export default function Delete(){
    return(
        <div>
            alert("delete?")
        </div>
    )
}
async function handler(req, res) {
    const data  = req
    const obj = data.searchParams
    for (let y in obj){
        const jsObject = JSON.parse(y);
        console.log(jsObject.profile)



    }



    return (

        <div>
            {data.data}
        </div>
    )
}
