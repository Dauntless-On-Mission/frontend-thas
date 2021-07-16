import Card from './list'
import './chart.css'

let data = [
    {
        title: "Pizza",
        calories: "56"
    },
    {
        title: "Burger",
        calories: "69"
    },
    {
        title: "Coke",
        calories: "500"
    },
    {
        title: "Fried Rice",
        calories: "180"
    },
    {
        title: "Browne",
        calories: "90"
    },
    {
        title: "Lassania",
        calories: "200"
    },
    {
        title: "Pani Puri",
        calories: "10"
    }
];

function caloriePage() {
    return (
        <div className="container">
            <span>Calorie Read Only</span>
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