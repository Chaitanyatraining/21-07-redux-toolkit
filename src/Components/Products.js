import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../store/productSlice'

const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector((state)=> state.product.data)
    
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <>
            <div className='container'>
                <h2>Products</h2>
                <div className='row'>
                    {
                        products && products.map((product) => (
                            <div className='col-md-4'>
                                <Link to={`/product/${product.id}`}>
                                    <div className='card mb-3'>
                                        <div className='p-3'>
                                            <img src={product.image} style={{ height: '300px', width: '300px' }} />
                                            <h3>{product.category}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Products