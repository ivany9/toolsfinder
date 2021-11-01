import React, { Component } from 'react'
import Select from 'react-select'

const Options=() =>{
  
  const selector=[
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MyComponent = () => (
  <Select selector={selector} />
)
}
export default Options;