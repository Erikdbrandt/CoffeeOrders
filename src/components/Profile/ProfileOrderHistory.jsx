import ProfileOrderHistoryItem from "./ProfileOrderHistoryItem"

const ProfileOrderHistory = ({orders}) => {

    const orderList = orders.map(
        (order, index) => <ProfileOrderHistoryItem key={index + '-' + order} order={order}/>)

    return (
        <section>
            <h4>Your order history</h4>

            {orderList.length === 0 && <p>You have no orders yet.</p> }

            <ul>

                {orderList}
            </ul>
        </section>
    )
}

export default ProfileOrderHistory