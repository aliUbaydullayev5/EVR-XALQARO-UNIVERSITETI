import Root from "../../../root";
import GenericAuthComponent from "../../../components/auth/GenericAuthComponent";

const Oqituvchi = () => {
    return(
        <Root>
            <GenericAuthComponent title={'O‘qituvchi'} pushPath={'/personalAccount/oqituvchi'} />
        </Root>
    )
}

export default Oqituvchi