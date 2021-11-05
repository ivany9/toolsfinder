import React from "react";
import { useQuery } from "@apollo/client";
import { Redirect, useParams } from "react-router-dom";

import ToolList from "../components/Profile";

import { CATEGORY, QUERY_TOOLS } from "../utils/queries";
import MyTools from "../components/myToolList/MyTools";

const Home = ({ category }) => {
  const { loading, data, refetch } = useQuery(QUERY_TOOLS);
  const tools = data?.tools || [];
  const filteredToolsQuery = useQuery(CATEGORY, { variables: { category } });
  const filteredTools = filteredToolsQuery.data?.category || []
  //decalaramos una varible para filtar toso menos los mios y pasamos el id como prop
  //refetch();// ojo con esta

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ToolList tools={category.length ?  filteredTools : tools}  title="Tool Box" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
