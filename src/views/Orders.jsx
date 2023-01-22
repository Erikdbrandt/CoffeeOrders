import withAuth from "../hoc/withAuth"
import OrdersCoffeeButton from "../components/Orders/OrdersCoffeeButton"
import OrdersForm from "../components/Orders/OrdersForm"
import {useState} from "react"


const COFFEES = [
    {
        id: 1,
        name: "Americano",
        image: "img/americano.png"
    },
    {
        id: 2,
        name: "Cappucciono",
        image: "img/cappuccino.png"
    },
    {
        id: 3,
        name: "Latte",
        image: "img/latte.png"
    },
    {
        id: 4,
        name: "Espresso",
        image: "img/espresso.png"
    },
]

const Orders = () => {

    const [coffee,setCoffee] = useState(null)
    const handleCoffeeClicked = (coffeeId) => {
        setCoffee(COFFEES.find(coffee => coffee.id === coffeeId))
    }

    const availableCoffees = COFFEES.map(coffee => {
        return <OrdersCoffeeButton
            key={coffee.id}
            coffee={coffee}
            onSelect={handleCoffeeClicked}
        />
    })

    return (
        <>
            <h1>Orders</h1>
            <section id="coffee-options">
                {availableCoffees}

            </section>
            <section id="order-notes">
                <OrdersForm/>
            </section>
            <h4>Summary: </h4>
            {coffee && <p>Selected coffee: { coffee.name}</p> }
        </>

    )
}

export default withAuth(Orders)