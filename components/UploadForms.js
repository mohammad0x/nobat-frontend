'use client'
import {useRef, useState} from "react";
import PhotoCard from "@/components/PhotoCard";
import {uploadPhoto} from "@/actions/uploadActions";
import ButtonSubmit from "@/components/ButtonSubmit";

export default function UploadForm(){
    const formRef = useRef();
    const [files , setFiles] = useState([]);

    async function handleInputFiles(e){
        const files = e.target.files;
        const newFiles = [...files].filter(file => {
            if(file.size < 1024*1024 && file.type.startsWith('image/')){
                return file;
            }
        })
        setFiles(prev => [...newFiles , ...prev] )
    }
    async function handleUpload(){
        if(!files.length) return alert('No images')
        if(!files.length > 3) return alert('No images > 3 ')

        const formData = new FormData()
        files.forEach(file =>{
            formData.append('files' , file)
        })
        const res =await uploadPhoto(formData)
    }
    return(
        // <div>
            <form action={handleUpload} ref={formRef} method='' className='w-full h-full text-center flex flex-col items-center'>
                <div>
                    <input type="file" className='w-64 md:w-96 h-10 md:h-12 mb-10 border-0 border-b border-b-gray-400 text-sm' accept='image/*' multiple onChange={handleInputFiles}/>
                </div>
                <div>
                    {
                        files.map((file , index)=>(
                            <PhotoCard key={index} url={URL.createObjectURL(file)} />
                        ))
                    }
                </div>
                <ButtonSubmit type="submit" value='Upload to'/>
                {/*<form action={handleUpload} ref={formRef}>*/}
                {/*    <div>*/}
                {/*        <ButtonSubmit value="Upload to "/>*/}
                {/*    </div>*/}
                {/*</form>*/}
            </form>
        // </div>
    )
}
// https://www.youtube.com/watch?v=JggXd2n4qH4