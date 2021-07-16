import './list.css'


function card(props) {
    return (
        <div className="cards">
            <h1>{props.title}</h1>
            <p>You have consumed {props.calories} cals today</p>
        </div>
    )
}

export default card;