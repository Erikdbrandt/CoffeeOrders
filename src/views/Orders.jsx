import withAuth from "../hoc/withAuth"
import OrdersCoffeeButton from "../components/Orders/OrdersCoffeeButton"
import OrdersForm from "../components/Orders/OrdersForm"
import {useState} from "react"
import {useUser} from "../context/UserContext"
import {orderAdd} from "../api/order"
import {storageSave} from "../utils/storage"
import {STORAGE_KEY_USER} from "../const/storageKeys"


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

    const [coffee, setCoffee] = useState(null)
    const {user,setUser} = useUser()

    const handleCoffeeClicked = (coffeeId) => {
        setCoffee(COFFEES.find(coffee => coffee.id === coffeeId))
    }

    const handleOrderClicked = async (notes) => {
        console.log(notes)
        if (!coffee) {
            alert('Please select a coffee first')
            return
        }
        const order = (coffee.name + ' ' + notes).trim()


        const [error, updatedUser] = await orderAdd(user, order)

        if(error !== null){
            return
        }

        //keep UI state and server state in sync
        storageSave(STORAGE_KEY_USER,updatedUser)
        //update context state
        setUser(updatedUser)

        console.log('Error', error)
        console.log('updatedUser', updatedUser)

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
                <OrdersForm onOrder={handleOrderClicked}/>
            </section>
            <h4>Summary: </h4>
            {coffee && <p>Selected coffee: {coffee.name}</p>}
        </>

    )
}

export default withAuth(Orders)