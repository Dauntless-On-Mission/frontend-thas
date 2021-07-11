import Card from './card'
import '../Styles/caloriePage.css'

let data = [
    {
        title: "Pizza",
        calories: "50"
    },
    {
        title: "Burger",
        calories: "65"
    },
    {
        title: "Coke",
        calories: "150"
    },
    {
        title: "Fried Rice",
        calories: "90"
    },
    {
        title: "Browne",
        calories: "180"
    },
    {
        title: "Lassania",
        calories: "200"
    },
    {
        title: "Pani Puri",
        calories: "20"
    }
];

function caloriePage() {
    return (
        <div className="container">
            <span>Calorie Card</span>
            <div className="box">
                {
                    data.map(element => (
                    <Card title={element.title} calories={element.calories} />
                ))
                }
            </div>
      </div>
    )
}

export default caloriePage;