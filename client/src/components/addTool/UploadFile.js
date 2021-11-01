import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { UPLOAD_FILE } from "../../utils/mutations";

const Upload = (props) => {
  const [fileState, SetFileState] = useState("");

//   const [uploadFile, { error }] = useMutation(UPLOAD_FILE, {
//     onCompleted: (data) => console.log(data),
//   });
  const [uploadFile, { error, data }] = useMutation(UPLOAD_FILE);

  const handleFileChange = async (e) => {
    e.preventDefault();
    try {
      const file = await e.target.files[0];
      if (!file) return;
      // await uploadFile({ variables: { file } })
      SetFileState(file.name);
      // props.ImageUpload({
      //     image:file.name
      // })
      console.log("archivo" + file.name);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    await uploadFile({ variables: { fileState } });
    props.ImageUpload({
      image: fileState,
    });
  };

  const handleEventChange = async e => {
      const [file] = await e.target.files
      console.log(file, "file")
      await uploadFile({ variables: { file: file.name } })
      console.log(data, error)
  }
  return (
    // <div>
    //     <label className="form-label" htmlFor="fileUpload">Upload a Photo</label>
    //     <input name = "image" type="file" className="form-control" id="fileUpload" onChange={handleFileChange}  />
    //     <button onClick={handleSubmit}>submit</button>
    // </div>
    // <Mutation mutation={UPLOAD_FILE}>
    //   {(uploadFile) => (
    //     <input
    //       type="file"
    //       required
    //       onChange={({
    //         target: {
    //           validity,
    //           files: [file],
    //         },
    //       }) => validity.valid && uploadFile({ variables: { file } })}
    //     />
    //   )}
    // </Mutation>
    <div>
        <input
          type="file"
          required
          onChange={handleEventChange}
        //   onChange={({
        //     target: {
        //       validity,
        //       files: [file],
        //     },
        //   }) => validity.valid && uploadFile({ variables: { file } })}
        />
    </div>
  );
};

export default Upload;
