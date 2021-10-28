import React from 'react';
import { useMutation } from '@apollo/client';

import {REMOVE_TOOL,UPDATE_DAYPRICE,UPDATE_HOURPRICE,UPDATE_STATUS} from '../../utils/mutations';
import { QUERY_ME,QUERY_SINGLE_USER,QUERY_SINGLE_TOOL } from '../../utils/queries';

const ToolsList = ({ tools, isLoggedInUser = false }) => {
  const [removeTool, { error }] = useMutation(REMOVE_TOOL, {
    update(cache, { data: { removeTool } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeTool },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemoveTool = async (tool) => {
    try {
      const { data } = await removeTool({
        variables: { tool },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!skills.length) {
    return <h3>No Skills Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {tools &&
          tools.map((tool) => (
            <div key={tool} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <span>{tool}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveTool(tool)}
                    >
                      X
                    </button>
                  )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default ToolsList;
