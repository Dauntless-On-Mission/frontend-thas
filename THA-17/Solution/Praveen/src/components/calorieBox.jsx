import React from "react";
import "../Styles/calorieBox.css"


function CalorieBox (props) {
    // const {food, calorie} = props  // we call it destructuring
    return(
        <>
        <div className="box">
            <div id="food">{props.food}</div>
            <div id="desc">You have consumed <strong>{props.calorie}</strong> cals today</div>
        </div>
        </>
    )
}

export default CalorieBox;