import withAuth from "../hoc/withAuth"
import OrdersCoffeeButton from "../components/Orders/OrdersCoffeeButton"
import OrdersForm from "../components/Orders/OrdersForm"




const Orders = () => {

    return (
        <>
            <h1>Orders</h1>
            <section id="coffee-options">
                <OrdersCoffeeButton name="Americano" image="img/americano.png" key="americano"> </OrdersCoffeeButton>
                <OrdersCoffeeButton name="Cappuccino" image="img/cappuccino.png" key="cappuccino"></OrdersCoffeeButton>
                <OrdersCoffeeButton name="Latte" image="img/latte.png" key="latte"></OrdersCoffeeButton>
                <OrdersCoffeeButton name="Espresso" image="img/espresso.png" key="espresso"></OrdersCoffeeButton>

            </section>
            <section id="order-notes">
                <OrdersForm/>
            </section>
        </>

    )
}

export default withAuth(Orders)