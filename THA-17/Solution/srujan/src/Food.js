import React from 'react'
import './App.css';

const Food = ({food,calories,src}) => {
    return (
        <div className = "foods">
            <h2> {food}</h2>
            <h3> You have consumed {calories} calories</h3>
        </div>
    )
}

export default Food
