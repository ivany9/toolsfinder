import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { RENT_TOOL } from "../../utils/mutations";

const ToolList = ({ tools, title }) => {
  const [rentToolMutation] = useMutation(RENT_TOOL);
  const username = Auth.getProfile().data.username;
  if (!tools.length) {
    return <h3>No Profiles Yet</h3>;
  }

  const rentTool = async (id) => {
    try {
      const { data } = await rentToolMutation({
        variables: { toolId: id, username },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
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
                  {profile.description}
                  <br />
                  {profile.category}
                  <br />
                  {profile.status ? "Status Rented" : "Status free"}
                  <br />
                  <p>
                    Day rent Price {profile.dayprice}
                    <br />
                    Hour rent Price {profile.hourprice}
                  </p>
                  <br />
                </h4>
                {Auth.loggedIn() && (
                  <button
                    disabled={profile.rent}
                    onClick={() => rentTool(profile._id)}
                  >
                    {profile.rent ? "Rented" : "Rent"}
                  </button>
                )}

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
