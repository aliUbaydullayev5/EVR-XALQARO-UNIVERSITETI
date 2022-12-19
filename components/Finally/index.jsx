import Container, {BoxCon, BtnCon} from './style'
import {Button, Input} from "../generic";
import Orqaga from "../../assets/icons/orqaga.svg";
import {useRouter} from "next/router";

const FinallyComponent = () => {
    const query = useRouter()
    return(
        <Container>
            <BoxCon>
                <h1>
                    ID raqamingiz <br />
                    muvaffaqiyatli tiklandi.
                </h1>
                <p>ID raqamingizni eslab qoling.</p>
                <Input disabled={true} height={'61px'} width={'500px'} placeholder='№: 101004 ' />
                <p>Parolingizni eslab qoling.</p>
                <Input disabled={true} height={'61px'} width={'500px'} placeholder='AA2223344'  margin={'10px 0px 15px 0px'} />
                <Button width={'344px'} height={'48px'} >yuklab olish</Button>
            </BoxCon>
            <div></div>
            <div></div>
            <BtnCon>
                <Button onclick={() => query.push('/receptionPage')} className='btnEnd nocopy' height={"40px"} width={'267.47px'} size={'22px'}>Ortga qaytish</Button>
                <Orqaga className='Orqaga' />
            </BtnCon>
        </Container>
    )
}

export default FinallyComponent