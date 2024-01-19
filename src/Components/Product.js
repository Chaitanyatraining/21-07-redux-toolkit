import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { add } from '../store/cartSlice'

const Product = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    const dispatch = useDispatch()

    console.log(id)

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json()
        console.log(data)
        setProduct(data)
    }

  return (
    <div className='container'>
        <h2 className='my-3'>Product Detail Page</h2>
        {
          Object.keys(product).length > 0 ? (
            <div className='row'>
              <div className='col-md-6 border p-3'>
                <img className='img-fluid' src={product.image} alt={product.title} />
              </div>
              <div className='col-md-6'>
                <h4>{product.title}</h4>
                <h6>{product.category}</h6>
                <p>{product.description}</p>
                <span className='bg-info p-1'>Price: {product.price}</span>
                <div className='mt-3'>
                  <button className='btn btn-warning' 
                  onClick={()=> dispatch(add(product))}
                  >Add To Cart</button>
                </div>
              </div>
            </div>
          ) : null
        }
    </div>
  )
}

export default Product