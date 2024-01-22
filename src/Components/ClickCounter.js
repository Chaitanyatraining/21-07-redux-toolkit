import React, { useState } from 'react'
import Hoc from './Hoc'
import { ChevronLeft } from 'react-feather'
import { useNavigate } from 'react-router-dom'

const ClickCounter = (props) => {
    const navigate = useNavigate()
  return (
    <>
    <ChevronLeft size={20} onClick={()=> navigate(-1)} />
        <h2>ClickCounter</h2>
        <p>ClickCounter: {props.count}</p>
        <button className='btn btn-primary'
        onClick={props.handleIncrement}
        >Increment</button>
    </>
  )
}

export default Hoc(ClickCounter)