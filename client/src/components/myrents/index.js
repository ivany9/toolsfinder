import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_RENT } from "../../utils/mutations";
import { Card, Container, Row, Col, ListGroup, Button } from "react-bootstrap";

const Myrent = (props) => {
  const { myrentools, refetch } = props;
  const [removeRentMutation] = useMutation(REMOVE_RENT);

  const removeRent = async (id) => {
    const { data } = await removeRentMutation({
      variables: { toolId: id },
    });
    refetch();
  };

  // console.log("objeto en myrents", myrentools);
  //  refetch();
  return (
    <section className="w-75">
      <h4>My rents</h4>

      <div>
        <div className="tools-container w-75">
          {myrentools?.map((item) => {
            return (
              <>
                <Card className="mb-3">
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
                          <strong>Description</strong>
                          <span>{item.description}</span>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <div className="d-flex justify-content-between">
                          <strong>Contact</strong>
                          <span>{item.createdby.username}</span>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <div className="d-flex justify-content-between">
                          <strong>Phone Number</strong>
                          <span>{item.createdby.phone}</span>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <div className="d-flex justify-content-between">
                          <strong>email</strong>
                          <span>{item.createdby.email}</span>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </>
            );
          })}
          
        </div>
      </div>
    </section>
  );
};
export default Myrent;
