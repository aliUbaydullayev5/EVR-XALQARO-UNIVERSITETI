import Root from "../../../root";
import GenericAuthComponent from "../../../components/auth/GenericAuthComponent";

const Talaba = () => {
    return(
        <Root>
            <GenericAuthComponent title={'Talaba'} pushPath={'/personalAccount/talaba'} royxat={false} />
        </Root>
    )
}

export default Talaba