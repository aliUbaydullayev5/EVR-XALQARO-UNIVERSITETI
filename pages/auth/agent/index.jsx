import Root from "../../../root";
import GenericAuthComponent from "../../../components/auth/GenericAuthComponent";

const Agent = () => {
    return(
        <Root>
            <GenericAuthComponent title={'Agent'} pushPath={'/personalAccount/agent'} royxat={false} />
        </Root>
    )
}

export default Agent