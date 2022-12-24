import Container from './style'
import {Button, Input} from "../../generic";

const UserComponent = ({userId}) => {

    const data = [
        {
            id: 1,
            name: 'Gulomov Elbek',
            status: 'Guruh sardori'
        },
        {
            id: 2,
            name: 'Gulomov Elbek',
            status: 'Guruh sardori'
        },
        {
            id: 3,
            name: 'Gulomov Elbek',
            status: 'Guruh sardori'
        },
        {
            id: 4,
            name: 'Gulomov Elbek',
            status: 'Guruh sardori'
        },
        {
            id: 5,
            name: 'Gulomov Elbek',
            status: 'Guruh sardori'
        },
        {
            id: 6,
            name: 'Gulomov Elbek',
            status: 'Guruh sardori'
        },
        {
            id: 7,
            name: 'Gulomov Elbek',
            status: 'Guruh sardori'
        },
        {
            id: 8,
            name: 'Gulomov Elbek',
            status: 'Guruh sardori'
        },
        {
            id: 9,
            name: 'Gulomov Elbek',
            status: 'Guruh sardori'
        },
        {
            id: 10,
            name: 'Gulomov Elbek',
            status: 'Guruh sardori'
        },
        {
            id: 11,
            name: 'Gulomov Elbek',
            status: 'Guruh sardori'
        },
        {
            id: 12,
            name: 'Gulomov Elbek',
            status: 'Guruh sardori'
        },
    ]

    return(
        <Container>
            <Container.Top>
                Ek-101
            </Container.Top>
            <Container.Bottom>

                <Container.Left>
                    <Container.PersonImage>

                    </Container.PersonImage>
                    <Container.Title>
                        Gulomov Elbek
                    </Container.Title>
                    <Container.Desc>
                        Guruh rahbari
                    </Container.Desc>
                    <Container.Row gap={'16px'}>
                        <Container.Row columns={'3fr 1fr'} gap={'24px'}>
                            <div>
                                <p>Telefon raqam</p>
                                <Input disabled={true} height={'26px'} padding={'0 20px 0 20px'} size={'16px'} weight={'600'} radius={'5px'} placeholder={'+998 99 759 04 80'} />
                            </div>
                            <div>
                                <p>Ilmiy darajasi</p>
                                <Input disabled={true} height={'26px'} padding={'0 20px 0 20px'} size={'16px'} weight={'600'} radius={'5px'} placeholder={'Magistr'} />
                            </div>
                        </Container.Row>
                        <Container.Row>
                            <div>
                                <p>Email</p>
                                <Input disabled={true} height={'26px'} padding={'0 20px 0 20px'} size={'16px'} weight={'600'} radius={'5px'} placeholder={'Gulomovelbek0@gmail.com'} />
                            </div>
                        </Container.Row>
                    </Container.Row>
                    <Button mmargin={'0'} mwidth={'113px'} mheight={'19px'} msize={'12px'} margin={'20px 0 0 0'} width={'148px'} height={'25px'} size={'14px'} >Xabar qoldirish</Button>
                </Container.Left>

                <Container.Right>
                    <Container.RightLineTitle>
                        <p>Kunduzgi | Bakalavr | 2-kurs | Iqtisod</p>
                    </Container.RightLineTitle>
                    <Container.BottomDescInset>
                        <div>
                            {data.map(({id, name, status})=> (
                                <Container.Section key={id}>
                                    <Container.SectionTitle>{name}</Container.SectionTitle>
                                    <Container.SectionDesc>{status}</Container.SectionDesc>
                                </Container.Section>
                            )) }
                        </div>
                    </Container.BottomDescInset>
                </Container.Right>

            </Container.Bottom>
        </Container>
    )
}


export default UserComponent