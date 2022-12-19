import Root from "../../../root";
import GenericAuthComponent from "../../../components/auth/GenericAuthComponent";

const Rahbariyat = () => {
    return(
        <Root>
            <GenericAuthComponent title={'Rahbariyat'} pushPath={'/personalAccount/rahbariyat'} royxat={false} />
        </Root>
    )
}

export default Rahbariyat