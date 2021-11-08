import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import AddTool from "../components/addTool";
import  Background from '../images/m.png';

import {
  QUERY_SINGLE_USER,
  QUERY_ME,
  QUERY_MYTOOLS,
  MYRENT_TOOLS,
} from "../utils/queries";

import Auth from "../utils/auth";
import MyTools from "../components/myToolList/MyTools";
import Myrent from "../components/myrents/index";
import { Container, Row, Col } from "react-bootstrap";

const Profile = () => {
  const { userId } = useParams();

  const [myTools, setMyTools] = useState([]);
  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data, refetch } = useQuery(
    userId ? QUERY_SINGLE_USER : QUERY_ME,
    {
      variables: { userId: userId },
    }
  );
  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profile = data?.me || data?.user || {};

  // console.log("estes es resultado" + profile._id);

  const userTools = useQuery(QUERY_MYTOOLS, {
    variables: { userId: profile._id },
  });

  const myrentools = useQuery(MYRENT_TOOLS, {
    variables: { userId: profile._id },
  });
  // console.log(myrentools, "from profile");

  //////////////////////////////////////////////////////////////////////////////////

  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.username) {
    return <h4>Please login </h4>;
  }

  const Styles={
   
    
    cardstyle:{

     backgroundColor:"#0a090a96",
     },

    }


  






  return (
    <main>
        <div className="profile" style={Styles.cardstyle}>
          {/* <myTooList /> */}
          <Container>
          <AddTool userId={profile._id} refetch={userTools.refetch} />
            <Row>
              <Col xm={12} md={6} lg={6}>
                <MyTools
                  userTools={userTools.data?.mytools}
                  refetch={userTools.refetch}
                />
              </Col>
              <Col xm={12} md={6} lg={6}>
                <Myrent
                  myrentools={myrentools.data?.myrentt}
                  refetch={myrentools.refetch}
                />
              </Col>
            </Row>
          </Container>
        </div>
    </main>
  );
};

export default Profile;
