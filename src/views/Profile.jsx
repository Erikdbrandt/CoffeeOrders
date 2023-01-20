import withAuth from "../hoc/withAuth"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileActions from "../components/Profile/ProfileActions"
import ProfileOrderHistory from "../components/Profile/ProfileOrderHistory"
import {useUser} from "../context/UserContext"

const Profile = () => {


    const {user} = useUser()



    return (
        <>
        <h1>Profile</h1>
            <ProfileHeader username={user.username} />
            <ProfileActions/>
            <ProfileOrderHistory orders={user.orders}/>
        </>

)
}

export default withAuth(Profile)