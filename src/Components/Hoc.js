import React, { useState } from 'react'
 {/* 
        A higher Order component(HOC) is an advanced tecnique in react 
        for reusing component logic. 

        - HOC is a pure function with zero side-effects and doesn't 
        modift the input component.

        - HOC is a function that takes a component and returns a new component.
    */}
const Hoc = (OriginalComponent) => {
    const NewComponent = () => {
        const [count, setCount] = useState(0)

        const handleIncrement = () => {
            setCount(count+1)
         }

        return <OriginalComponent 
        count={count} 
        handleIncrement={handleIncrement} 
        />
    }
    return NewComponent
}

export default Hoc