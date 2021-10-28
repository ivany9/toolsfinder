import React from 'react';
import { useQuery } from '@apollo/client';

import ToolList from '../components/Profile';

import { QUERY_TOOLS, } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_TOOLS);
  const tools = data?.tools || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ToolList
              tools={tools}
              title="Tools for you!!!!"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
