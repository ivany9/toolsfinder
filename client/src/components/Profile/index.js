import React from 'react';
import { Link } from 'react-router-dom';

const ToolList = ({ tools, title }) => {
  if (!tools.length) {
    return <h3>No Profiles Yet</h3>;
  }
  //refetch();
  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {tools &&
          tools.map((profile) => (
            <div key={profile._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {profile.name} <br />
                  {profile.description}<br/>
                  {profile.category}<br/>
                  {profile.status ? "Status Rented" : "Status free"}<br/>
                  <p>Day  rent Price {profile.dayprice}<br/>
                     Hour  rent Price {profile.hourprice}</p><br/>
                </h4>
{/* 
               <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/profiles/${profile._id}`}
                >
                  View and endorse their skills.
                </Link>  */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ToolList;
