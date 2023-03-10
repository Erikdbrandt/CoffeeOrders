import {Link} from "react-router-dom"
import {storageDelete, storageSave} from "../../utils/storage"
import {STORAGE_KEY_USER} from "../../const/storageKeys"
import {useUser} from "../../context/UserContext"
import {orderClearHistory} from "../../api/order"

const ProfileActions = () => {

    const {user, setUser} = useUser()


    const handleLogoutClick = () => {
        if (window.confirm('Are you sure?')) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }
    const handleClearHistoryClick = async () => {
        if (!window.confirm('Are you sure? \nThis can not be undone!')) {
            return
        }

        const [clearError] = await orderClearHistory(user.id)

        if(clearError !== null ){
            return
        }

        const updateUser = {
            ...user,
            orders: []
        }

        storageSave(STORAGE_KEY_USER, updateUser)
        setUser(updateUser)
    }

    return (
        <ul>
            <li><Link to="/orders">Orders</Link></li>
            <li>
                <button onClick={handleClearHistoryClick}>Clear history</button>
            </li>
            <li>
                <button onClick={handleLogoutClick}>Logout</button>
            </li>
        </ul>

    )
}

export default ProfileActions