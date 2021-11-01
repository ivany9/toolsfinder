import React, { useState } from "react";
import { useMutation} from "@apollo/client";
import {UPLOAD_FILE } from "../../utils/mutations";







const Upload=(props)=>{
    
    const [fileState,SetFileState] = useState('')


    const [uploadFile, { error }] = useMutation(UPLOAD_FILE, {
        onCompleted: data => console.log(data)
    
    });

    const handleFileChange = async (e) => {
        e.preventDefault()
        try {
            const file = await e.target.files[0]
            if (!file) return
            await uploadFile({ variables: { file } })
            SetFileState(file.name)
            props.ImageUpload({
                image:file.name
            })
            console.log("archivo"+file.name)
        }
        catch(err){
            console.error(err)
        }
    }
    return (
        <div>
            <label className="form-label" htmlFor="fileUpload">Upload a Photo</label>
            <input name = "image" type="file" className="form-control" id="fileUpload" onChange={handleFileChange}  />
        </div>
    )
}






export default Upload;