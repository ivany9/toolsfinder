import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { RENT_TOOL } from "../../utils/mutations";
import { Card, Container, Row, Col, ListGroup, Button } from "react-bootstrap";

const ToolList = ({ tools, title }) => {
  const auth_token = localStorage.getItem("id_token");
  const [rentToolMutation] = useMutation(RENT_TOOL);
  const username = auth_token ? Auth.getProfile().data.username : null;
  if (!tools.length) {
    return <h3>No Profiles Yet</h3>;
  }

  const rentTool = async (id) => {
    try {
      // if(auth_token) {
      const { data } = await rentToolMutation({
        variables: { toolId: id, username },
      });
      console.log(data);
      // } else {
      //   alert("You need to be logged in to do that")
      // }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Container>
        <h1>{title}</h1>
        <Row>
          {tools &&
            tools.map((profile) => (
              <Col sm={8} xs={12} md={6}>
                <div key={profile._id} className="mb-3">
                  <Card>
                    <Card.Img />
                    <Card.Body>
                      <Card.Title className="text-center textTransform-uppercase">
                        {profile.name}
                      </Card.Title>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <div className="d-flex justify-content-between">
                            <strong>Categories</strong>
                            <span>{profile.category}</span>
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <div className="d-flex justify-content-between">
                            <strong>Location</strong>
                            <span>{profile.postcode}</span>
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <div className="d-flex justify-content-between">
                            <strong>From</strong>
                            <span>
                              {profile.hourprice}/h or {profile.dayprice}/day
                            </span>
                          </div>
                        </ListGroup.Item>
                      </ListGroup>
                      <Card.Title className="text-center mt-2">Description</Card.Title>
                      <Card.Text>{profile.description}</Card.Text>
                      <div className="d-grid gap-2">
                        {Auth.loggedIn() && (
                          <Button
                            disabled={profile.rent}
                            onClick={() => rentTool(profile._id)}
                            variant={profile.rent ? "secondary" : "success"}
                          >
                            {profile.rent ? "Rented" : "Rent"}
                          </Button>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
      {/* <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4"></div> */}
    </div>
  );
};

export default ToolList;
