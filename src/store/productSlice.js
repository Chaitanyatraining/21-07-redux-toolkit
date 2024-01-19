import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: []
    },
    reducers: {
       setProducts(state, action){
        state.data = action.payload
       }
    }
})

export const {setProducts} = productSlice.actions
export default productSlice.reducer

export function fetchProducts(){
    return async function fetchProductsThunk(dispatch, getState){
        try{
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            dispatch(setProducts(data))
            
        } catch(err){
            console.log(err)
        }
    }
}