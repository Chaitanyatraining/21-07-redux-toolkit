import React, { useState } from 'react'
import Hoc from './Hoc'

const HoverComponent = (props) => {
  return (
    <>
        <h2>HoverComponent</h2> 
        <h4 onMouseEnter={props.handleIncrement}>HoverCounter: {props.count}</h4>   
    </>
  )
}

export default Hoc(HoverComponent)