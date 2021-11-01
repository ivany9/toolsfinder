import React, { Component } from 'react'
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Dropdown,SplitButton,DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

const Select=()=>{


return(

    [DropdownButton].map((DropdownType, idx) => (
      <DropdownType
        as={ButtonGroup}
        id="dropdown-button-drop"
        size="sm"
        variant="danger"
        title="Category"
      >
        <Dropdown.Item eventKey="1">OutDoor</Dropdown.Item>
        <Dropdown.Item eventKey="2">Garage</Dropdown.Item>
        <Dropdown.Item eventKey="3">Electric</Dropdown.Item>
        <Dropdown.Item eventKey="4">Carpentry</Dropdown.Item>
        <Dropdown.Item eventKey="5">Cars</Dropdown.Item>
        <Dropdown.Item eventKey="6">Water preassure</Dropdown.Item>
        <Dropdown.Item eventKey="7">Bicycle</Dropdown.Item>
      </DropdownType>
    )
    )
)
  

    }



export default Select;