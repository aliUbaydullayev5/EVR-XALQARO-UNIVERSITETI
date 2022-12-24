import Container from './style'
import Image from "next/image.js";
import {Button} from "../../../generic";
import {useRouter} from "next/router";

const RowSection = ({img, status, name, workday, phone, email, id}) => {

    const query = useRouter()

    const otherToFunc = () => {
        query.push(`/ourTeamPage/user/${id}`)
    }

    return(
        <Container>
            <Container.LeftImg>
                <Image src={img} alt={'Odamni rasimi'} className={'img'} />
            </Container.LeftImg>
            <Container.RightBlock>
                <Container.Status>{status}</Container.Status>
                <hr />
                <Container.Name>{name}</Container.Name>
                <div>
                    <Container.Text>Qabul kunlari:</Container.Text>
                    <Container.Text grey={true}>&nbsp;&nbsp; {workday}</Container.Text>
                </div>
                <div>
                    <Container.Text>Telefon raqam:</Container.Text>
                    <Container.Text grey={true}>&nbsp;&nbsp; {phone}</Container.Text>
                </div>
                <Container.EmailSection>
                    <div>
                        <Container.Text>Email:</Container.Text>
                        <Container.Text grey={true}>&nbsp;&nbsp; {email}</Container.Text>
                    </div>
                    <div>
                        <Button mheight={'13px'} mwidth={'84px'} msize={'8px'} size={'16px'} width={'142px'} height={'20px'} >Xabar qoldirish</Button>
                    </div>
                    <div>
                        <Button mheight={'13px'} mwidth={'48px'} msize={'8px'} size={'16px'} width={'142px'} height={'20px'} onclick={()=> otherToFunc()} >Batafsil</Button>
                    </div>
                </Container.EmailSection>
            </Container.RightBlock>
        </Container>
    )
}

export default RowSection
