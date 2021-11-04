import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_RENT, REMOVE_TOOL } from "../../utils/mutations";
import { Card, Container, Row, Col, ListGroup, Button } from "react-bootstrap";

const MyTools = (props) => {
  const { userTools, refetch } = props;
  console.log("lo que recibe my tools en my tools " + { userTools });
  console.log(refetch, "mytools");
  const [removeRentMutation] = useMutation(REMOVE_RENT);
  const [deleteToolMutation] = useMutation(REMOVE_TOOL);

  const removeRent = async (id) => {
    const { data } = await removeRentMutation({
      variables: { toolId: id },
    });
    refetch();
  };

  const removeTool = async (id) => {
    const { data } = await deleteToolMutation({
      variables: { toolId: id },
    });

    refetch();
  };
  return (
    <section className="w-100">
      <h4>My tools</h4>

      <div>
        <div className="tools-container">
          {userTools?.mytools.map((item) => {
            return (
              <>
                <Col sm={8} xs={12} md={6}>
                  <div key={item._id} className="mb-3">
                    <Card>
                      <Card.Img />
                      <Card.Body>
                        <Card.Title className="text-center textTransform-uppercase">
                          {item.name}
                        </Card.Title>
                        <ListGroup variant="flush">
                          <ListGroup.Item>
                            <div className="d-flex justify-content-between">
                              <strong>Categories</strong>
                              <span>{item.category}</span>
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <div className="d-flex justify-content-between">
                              <strong>Location</strong>
                              <span>{item.createdby}</span>
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <div className="d-flex justify-content-between">
                              <strong>From</strong>
                              <span>
                                {item.hourprice}/h or {item.dayprice}/day
                              </span>
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <div className="d-flex justify-content-between">
                              <strong>Status</strong>
                              <span>{item.rent ? "Rented" : "Free"}</span>
                            </div>
                          </ListGroup.Item>
                          {item.rent && (
                            <>
                              <ListGroup.Item>
                                <div className="d-flex justify-content-between">
                                  <strong>Rented By</strong>
                                  <span>{item.rent.username}</span>
                                </div>
                              </ListGroup.Item>
                              <ListGroup.Item>
                                <div className="d-flex justify-content-between">
                                  <strong>Phone</strong>
                                  <span>{item.rent.phone}</span>
                                </div>
                              </ListGroup.Item>
                            </>
                          )}
                        </ListGroup>
                        <Card.Title className="text-center mt-2">
                          Description
                        </Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        {/* {item.rent && (
                      )} */}
                        <div className="d-grid gap-2">
                          <Button
                            onClick={() => removeTool(item._id)}
                            variant="danger"
                          >
                            Delete
                          </Button>
                          {item.rent && (
                            <Button
                              onClick={() => removeRent(item._id)}
                              variant="outline-danger"
                            >
                              Remove Rent
                            </Button>
                          )}
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                {/* <div className="tools">
                  <h6>{item.name}</h6>
                  <h6>{item._id}</h6>
                  <h6>{item.status ? "Status Rented" : "Status free"}</h6>
                  <button>Update</button>
                  <button onClick={() => removeTool(item._id)}>Delete</button>
                </div> */}
                {/* <div className="rented-tools">
                  {item.rent && (
                    <div style={{ background: "green" }}>
                      <h6>Rented by {item.rent.username}</h6>
                      <p>{item.rent.phone}</p>
                      <p>Status Rented</p>
                      <button onClick={() => removeRent(item._id)}>
                        Status
                      </button>
                    </div>
                  )}
                </div> */}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyTools;
