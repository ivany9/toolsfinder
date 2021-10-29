import React from 'react';
import { Link } from 'react-router-dom';

const myToolList = ({ tools, title }) => {
  if (!tools.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {tools &&
          tools.map((tool) => (
            <div key={tool._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {tool.name} ,{tool.description}<br />
                  {/* <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently has {profile.skills ? profile.skills.length : 0}{' '}
                    endorsed skill
                    {profile.skills && profile.skills.length === 1 ? '' : 's'}
                  </span> */}
                </h4>

                {/* <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/profiles/${profile._id}`}
                >
                  View and endorse their skills.
                </Link> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default myToolList;