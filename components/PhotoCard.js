import React from "react";
import Image from "next/image";

export default function PhotoCard({url}){
    return(
        <div>
            {/*{url}*/}
            <div>
                <Image src={url} alt='image' width={250} height={250} priority />
            </div>
        </div>
    )
}