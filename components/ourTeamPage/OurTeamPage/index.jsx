import Container from './style'
import {Button} from "../../generic";
import {useRouter} from "next/router";

const OurTeamPageComponent = () => {

    const router = useRouter()

    return(
        <Container>
            <Container.Block>
                <Container.Top>
                    <Container.Text>Bizning jamoa</Container.Text>
                </Container.Top>
                <Container.Bottom>
                    <Button uppercase={true} msize={'16px'} mwidth={'214px'} mheight={'37px'} width={'426px'} height={'56px'} onclick={()=> router.push('/ourTeamPage/rahbariyat')}>Rahbariyat</Button>
                    <Button uppercase={true} msize={'16px'} mwidth={'214px'} mheight={'37px'} width={'426px'} height={'56px'} onclick={()=> router.push('/ourTeamPage/oqituvchilar')}>O‘qituvchilar</Button>
                    <Button uppercase={true} msize={'16px'} mwidth={'214px'} mheight={'37px'} width={'426px'} height={'56px'} onclick={()=> router.push('/ourTeamPage/guruhlar')} >Guruhlar</Button>
                    <Button uppercase={true} msize={'16px'} mwidth={'214px'} mheight={'37px'} width={'426px'} height={'56px'} onclick={()=> router.push('/ourTeamPage/talabalar')} >Talabalar</Button>
                </Container.Bottom>
            </Container.Block>
        </Container>
    )
}

export default OurTeamPageComponent