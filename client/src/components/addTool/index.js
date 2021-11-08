import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_TOOL } from "../../utils/mutations";
import { useParams } from "react-router-dom";
import FileBase from "react-file-base64";
import Upload from "./UploadFile";
import Select from "../../components/picker/index";
//import Picker from '../../components/picker/picker'

import Auth from "../../utils/auth";
import {
  Col,
  Form,
  Row,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const AddTool = ({ userId, refetch }) => {
  //const { userId } = useParams();

  const [formState, setFormState] = useState({
    userId,
    name: "",
    category: "",
    description: "",
    dayprice: 0,
    hourprice: 0,
    image: "",
  });
  const [addTool, { error, data }] = useMutation(ADD_TOOL);

  // update state based on form input changes
  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormState({
      ...formState,
      [id]: value,
    });
  };

  //////////////////////////////////////////////
  const ImageUpload = (image) => {
    console.log(image);
    setFormState({
      ...formState,
      image: image.image ? image.image : formState.image,
    });
  };

  ///////////////////////////////////////

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const body = {
        ...formState,
        dayprice: Number(formState.dayprice),
        hourprice: Number(formState.hourprice),
      };
      console.log(body);
      console.log(typeof body.dayprice);
      const { data } = await addTool({
        variables: { ...body },
      });

      console.log("formulario que esta llenando" + formState);
      refetch();

      Auth.login(data.addTool.token);
    } catch (e) {
      console.error(e);
    }
  };








  return (
    <main className="mb-4">
      <div className="">
        <div className="">
          <h4 className="text-center99 text-center text-white 
           p-2">ADD TOOL</h4>
          {data ? (
            <p>Success! You have a new Tool </p>
          ) : (
            <Form onSubmit={handleFormSubmit} >
              <Row className="align-items-center justify-content-between">
                <Col xs="auto">
                  <Form.Control
                    className="mb-2"
                    id="name"
                    placeholder="Tool's Name"
                    onChange={handleChange}
                  />
                </Col>
                <Col xs="auto">
                  <InputGroup className="mb-2">
                    <FormControl
                      id="description"
                      placeholder="Description"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Col>
                <Col xs="auto">
                  <Form.Control
                    className="mb-2"
                    id="dayprice"
                    placeholder="Day Price"
                    onChange={handleChange}
                  />
                </Col>
                <Col xs="auto">
                  <Form.Control
                    className="mb-2"
                    id="hourprice"
                    placeholder="Hour Price"
                    onChange={handleChange}
                  />
                </Col>
                <Col xs="auto">
                <div className="selector d-flex  justify-content-end  gap-2">
                <Select setFormState={setFormState} formState={formState} />
                </div>
                </Col>
                <Col xs="auto">
                <div className=" addtol  d-flex  justify-content-end gap-5">
                <Button variant="warning" onClick={handleFormSubmit}>Add Tool</Button>
                </div>
                </Col>
              </Row>
               <br/>
                
            </Form>
          )}
          {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
          )}

        </div>
      </div>
    </main>
  );
};

export default AddTool;
