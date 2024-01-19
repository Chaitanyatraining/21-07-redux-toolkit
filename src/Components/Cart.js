import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
    const cartData = useSelector(state => state.cart)
    const dispatch = useDispatch()
    console.log(cartData)
  return (
    <div className='container'>
        <h2>Cart Page</h2>
        {
            cartData.length > 0 ? (
                cartData.map((item) => (
                    <div className='row border mb-2 p-2'>
                        <div className='col-md-3'>
                            <img className='img-fluid' src={item.image} alt={item.title} />
                        </div>
                        <div className='col-md-6'>
                            <h4>{item.category}</h4>
                            <p>{item.description}</p>
                        </div>
                        <div className='col-md-3'>
                            <h5 className=''>Price: {item.price}</h5>
                            <button className='btn btn-danger'
                            onClick={()=> dispatch(remove(item.id))}
                            >Remove</button>
                        </div>
                    </div>
                ))
            ) : <p>Add items to cart</p>
        }
    </div>
  )
}

export default Cart