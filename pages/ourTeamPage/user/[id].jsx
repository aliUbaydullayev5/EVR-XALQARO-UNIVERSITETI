import {useRouter} from "next/router";
import Root from "../../../root";
import UserComponent from "../../../components/ourTeamPage/UserComponent";

const UserPage = () => {

    const router = useRouter()
    const {id} = router.query

    return(
        <Root>
            <UserComponent userId={id} />
        </Root>
    )
}

export default UserPage