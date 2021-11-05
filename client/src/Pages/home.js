import React from "react";
import { useQuery } from "@apollo/client";
import { Redirect, useParams } from "react-router-dom";
import Auth from "../utils/auth";
import ToolList from "../components/Profile";

import { CATEGORY, QUERY_TOOLS,TOOLESSMY } from "../utils/queries";
import MyTools from "../components/myToolList/MyTools";

const Home = ({ category }) => {
  const auth_token = localStorage.getItem("id_token");
  const userId = auth_token ? Auth.getProfile().data._id : null;
  const { loading, data, refetch } = useQuery(QUERY_TOOLS);
  const tools = data?.tools || [];
  const filteredToolsQuery = useQuery(CATEGORY, { variables: { category } });
  const filteredTools = filteredToolsQuery.data?.category || []
  const toolsless=useQuery(TOOLESSMY,{variables:{userId} });
  const tools1=toolsless.data?.toolessmy || [];

  console.log(filteredTools, "tools1")
   
  
  

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          
        {Auth.loggedIn() ? (
           <>
           {loading ? (
             <div>Loading...</div>
           ) : (
                //  <div>hola</div>
              <ToolList tools={category.length ? filteredTools : tools1}  title="Tool Box" />
             
           )}
          </>
          ):(
          <>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ToolList tools={category.length ?  filteredTools : tools}  title="Tool Box" />
          )}
         </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
