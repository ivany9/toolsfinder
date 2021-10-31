import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation} from "@apollo/client";
import { ADD_TOOL} from "../../utils/mutations";
import { useParams } from "react-router-dom";
import FileBase from "react-file-base64";

import Auth from "../../utils/auth";


//UPLOAD_FILE



const AddTool = ({ userId }) => {
  //const { userId } = useParams();

  console.log("valor de userID" + userId);
  const [formState, setFormState] = useState({
    userId,
    name: "",
    category: "",
    description: "",
    dayprice: 0,
    hourprice: 0,
    image:'',
  });
  const [addTool, { error, data }] = useMutation(ADD_TOOL);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

 //////////////////////////////////////////////
 function refreshPage() {
  window.location.reload(false);
}
 ///////////////////////////////////////


  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
     
    try {
      const body = {
        ...formState,
        dayprice: Number(formState.dayprice),
        hourprice: Number(formState.hourprice),
      };
      console.log(body);
      console.log(typeof body.dayprice);
      const { data } = await addTool({
        variables: { ...body },
      });

      Auth.login(data.addTool.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">ADD TOOL</h4>
          <div className="card-body">
            {data ? (
                 
              <p>
                
                  
                Success! You have a new Tool{" "}
               
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Tool's name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Category"
                  name="category"
                  type="text"
                  value={formState.category}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  type="text"
                  placeholder="description"
                  name="description"
                  value={formState.description}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  className="form-input"
                  placeholder="dayprice"
                  name="dayprice"
                  value={formState.dayprice}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  className="form-input"
                  placeholder="hourprice"
                  name="hourprice"
                  value={formState.hourprice}
                  onChange={handleChange}
                />
                {/* <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setFormState({ ...formState, image: base64 })
                  }
                /> */}
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddTool;
