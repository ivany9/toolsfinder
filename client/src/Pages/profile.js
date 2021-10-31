import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import AddTool from '../components/addTool';

import { QUERY_SINGLE_USER, QUERY_ME,QUERY_MYTOOLS } from '../utils/queries';

import Auth from '../utils/auth';
import MyTools from '../components/myToolList/MyTools';

const Profile = () => {
  const { userId } = useParams();
  
  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    userId ? QUERY_SINGLE_USER : QUERY_ME,
    {
      variables: { userId:  userId },
    }
    );
    // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
    const profile = data?.me || data?.user || {};
     console.log("estes es resultado"+profile._id); 

    const userTools = useQuery(QUERY_MYTOOLS, {
      variables: {userId: profile._id}
    })
    
   




    //////////////////////////////////////////////////////////////////////////////////

  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id ===  userId) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.username) {
    return (
      <h4>
        Please login
        
      </h4>
    );
  }
    
    // console.log(profile._id);
 
  return(
         
               
   <main>
   <div className="flex-row justify-center">
      <div className="col-12 col-md-10 my-3">
            
    

            <h2>My Tool Box</h2>
              {/* <myTooList /> */}
              <AddTool  userId={profile._id}/>
             <MyTools userTools={userTools.data?.mytools} />
             
            </div>

    </div>
 </main>
  )
};
      















  

export default Profile;
