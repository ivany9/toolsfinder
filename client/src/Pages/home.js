import React from "react";
import { useQuery } from "@apollo/client";

import ToolList from "../components/Profile";

import { CATEGORY, QUERY_TOOLS } from "../utils/queries";

const Home = ({ category }) => {
  const { loading, data, refetch } = useQuery(QUERY_TOOLS);
  const tools = data?.tools || [];
  const filteredToolsQuery = useQuery(CATEGORY, { variables: { category } });
  const filteredTools = filteredToolsQuery.data?.category || []

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ToolList tools={category.length ? filteredTools : tools} title="Tool Box" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
