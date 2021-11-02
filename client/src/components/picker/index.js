import React, { Component } from 'react'
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Dropdown,SplitButton,DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

const Select=({setFormState, formState})=>{


return(

    [DropdownButton].map((DropdownType, idx) => (
      <DropdownType
        as={ButtonGroup}
        id="dropdown-button-drop"
        size="sm"
        variant="danger"
        title="Category"
        onSelect={(e) => setFormState({...formState, category: e})}
      >
        <Dropdown.Item eventKey="OutDoor">OutDoor</Dropdown.Item>
        <Dropdown.Item eventKey="Garage">Garage</Dropdown.Item>
        <Dropdown.Item eventKey="Electric">Electric</Dropdown.Item>
        <Dropdown.Item eventKey="Carpentry">Carpentry</Dropdown.Item>
        <Dropdown.Item eventKey="Cars">Cars</Dropdown.Item>
        <Dropdown.Item eventKey="Water preassure">Water preassure</Dropdown.Item>
        <Dropdown.Item eventKey="Bicycle">Bicycle</Dropdown.Item>
      </DropdownType>
    )
    )
)
  

    }



export default Select;