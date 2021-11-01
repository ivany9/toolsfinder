import React from 'react'



const Autocomplete=()=>{



return(
<body>
  <input id="id_address" type="text" size="100" value="22 St Marks Rd, Randwick NSW, Australia" />
  <div id="postal_code"> postal code :</div>
  <div id="map_canvas"></div>

  <script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyCWAgKqkmjr25sVaYoFSYW3njuw1BkZ5A8"></script> 

  
    </body>
)
    

}

export default Autocomplete;