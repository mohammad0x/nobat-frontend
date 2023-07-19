import Link from "next/link";

export default function Delete(){
    return(
        <div>
            alert("delete?")
        </div>
    )
}
async function handler(req, res) {
    const {data}  = req
    console.log(req)

    return (
        <p>hello{data}</p>
    )
}
