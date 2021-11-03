import React, {useState} from "react";
import { useMutation} from "@apollo/client";
import { REMOVE_RENT } from "../../utils/mutations";

const Myrent= (props) => {
  const { myrentools,  refetch } = props;
  console.log(refetch, "mytools")
  const [removeRentMutation] = useMutation(REMOVE_RENT)

  
  const removeRent = async (id) => {
    const { data } = await removeRentMutation({
      variables: { toolId: id },
    });
    refetch()
  }

  console.log("objeto en myrents" +  {myrentools});
   
  
  return (
  
    <section>
    <h4>My tools</h4>

    <div>
      <div className="tools-container">
        {myrentools?.rent.map((item) => {
          return (
            <>
              <div className="tools">
                <h6>{item.name}</h6>
                <h6>{item._id}</h6>
                </div>
                </>
                )}
        )
            } 

            
          );
       
      </div>
    </div>
  </section>
  
  
    )






}
export default Myrent;
