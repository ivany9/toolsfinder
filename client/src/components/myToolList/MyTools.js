import React from 'react'

const MyTools = (props) => {
    const {userTools} = props
    console.log("lo que recibe my tools "+ {userTools});
    return (
        <section>
           <h4>My tools</h4>

           <div>
                {userTools?.mytools.map((item) => {
                    return (
                        <div>
                            <h6>{item.name}</h6>
                            <h6>{item.status ? "Status Rented" : "Status free"}</h6>
                            {/* {item.rent.map((sub)=>{
                            
                                 <div>  
                                <h6>Rented by{sub.username}</h6>
                                
                                 </div>
                               
                            })
                              } */}
                            
                            <button>Update</button>
                            <button>Delete</button>
                        </div>
                    )
                })}
           </div>
        </section>
    )
}

export default MyTools
