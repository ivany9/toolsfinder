import React, {useState} from "react";
import { useMutation} from "@apollo/client";
import { REMOVE_RENT, REMOVE_TOOL } from "../../utils/mutations";

const MyTools = (props) => {
  const { userTools,  refetch } = props;
  console.log("lo que recibe my tools en my tools " + { userTools });
  console.log(refetch, "mytools")
  const [removeRentMutation] = useMutation(REMOVE_RENT)
  const [deleteToolMutation] = useMutation(REMOVE_TOOL)
  
  const removeRent = async (id) => {
    const { data } = await removeRentMutation({
      variables: { toolId: id },
    });
    refetch()
  }

  const removeTool = async (id) => {
    const {data} = await deleteToolMutation({
      variables: {toolId: id}
    })

    refetch()
  }
  return (
    <section>
      <h4>My tools</h4>

      <div>
        <div className="tools-container">
          {userTools?.mytools.map((item) => {
            return (
              <>
                <div className="tools">
                  <h6>{item.name}</h6>
                  <h6>{item._id}</h6>
                  <h6>{item.status ? "Status Rented" : "Status free"}</h6>
                  <button>Update</button>
                  <button onClick={() => removeTool(item._id)}>Delete</button>
                </div>
                <div className="rented-tools">
                  {item.rent && (
                    <div style={{background: "green"}}>
                      <h6>Rented by {item.rent.username}</h6>
                      <p>{item.rent.phone}</p>
                      <p>Status Rented</p>
                      <button onClick={() => removeRent(item._id)}>Status</button>
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyTools;
