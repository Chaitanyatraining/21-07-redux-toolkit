import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Components/Products'
import Product from '../Components/Product'
import Cart from '../Components/Cart'
import ClickCounter from '../Components/ClickCounter'
import HoverComponent from '../Components/HoverComponent'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/clickCounter' element={<ClickCounter />} />
        <Route path='/hoverComp' element={<HoverComponent />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </>
  )
}

export default Routing