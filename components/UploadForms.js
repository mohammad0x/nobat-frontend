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
        <div>
            <form action={handleUpload} ref={formRef}>
                <div>
                    <input type="file" accept='image/*' multiple onChange={handleInputFiles}/>
                </div>
                <div>
                    {
                        files.map((file , index)=>(
                            <PhotoCard key={index} url={URL.createObjectURL(file)} />
                        ))
                    }
                </div>
                <div>
                    <ButtonSubmit value="Upload to "/>
                </div>
            </form>
        </div>
    )
}
// https://www.youtube.com/watch?v=JggXd2n4qH4