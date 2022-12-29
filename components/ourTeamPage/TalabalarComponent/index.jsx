import Container from './style'
import CloseIcon from "../../../assets/icon/rahmariyatCloseIcon.svg";
import {useRouter} from "next/router";

const TalabalarComponent = () => {

    const data = [
        {id: 1, name: 'Gulomov Elbek'},
        {id: 2, name: 'Gulomov Elbek'},
        {id: 3, name: 'Gulomov Elbek'},
        {id: 4, name: 'Gulomov Elbek'},
        {id: 5, name: 'Gulomov Elbek'},
        {id: 6, name: 'Gulomov Elbek'},
        {id: 7, name: 'Gulomov Elbek'},
        {id: 8, name: 'Gulomov Elbek'},
        {id: 9, name: 'Gulomov Elbek'},
        {id: 10, name: 'Gulomov Elbek'},
        {id: 11, name: 'Gulomov Elbek'},
        {id: 12, name: 'Gulomov Elbek'},
        {id: 13, name: 'Gulomov Elbek'},
        {id: 14, name: 'Gulomov Elbek'},
        {id: 15, name: 'Gulomov Elbek'},
        {id: 16, name: 'Gulomov Elbek'},
        {id: 17, name: 'Gulomov Elbek'},
        {id: 18, name: 'Gulomov Elbek'},
        {id: 19, name: 'Gulomov Elbek'},
        {id: 20, name: 'Gulomov Elbek'},
        {id: 21, name: 'Gulomov Elbek'},
        {id: 22, name: 'Gulomov Elbek'},
        {id: 23, name: 'Gulomov Elbek'},
    ]

    const query = useRouter()

    return(
        <Container>
            <Container.Top>
                Guruhlar
                <div className={'closeIcon'} onClick={()=> query.push('/ourTeamPage')}>
                    <CloseIcon />
                </div>
            </Container.Top>
            <Container.Center>
                <div>
                    <Container.Select mwidth={'64px'}  width={'204px'}>
                        <option value="">Ta’lim shakli</option>
                        <option value="">Kechki</option>
                        <option value="">Kunduzgi</option>
                        <option value="">Sirtqi talim</option>
                    </Container.Select>
                </div>
                <div>
                    <Container.Select mwidth={'52px'} width={'183px'}>
                        <option value="">Ta’lim shakli</option>
                        <option value="">Kechki</option>
                        <option value="">Kunduzgi</option>
                        <option value="">Sirtqi talim</option>
                    </Container.Select>
                </div>
                <div>
                    <Container.Select mwidth={'44px'} width={'124px'}>
                        <option value="">Kurs</option>
                        <option value="">Kechki</option>
                        <option value="">Kunduzgi</option>
                        <option value="">Sirtqi talim</option>
                    </Container.Select>
                </div>
                <div>
                    <Container.Select mwidth={'65px'} width={'200px'}>
                        <option value="">Ta’lim yo’nalishi</option>
                        <option value="">Kechki</option>
                        <option value="">Kunduzgi</option>
                        <option value="">Sirtqi talim</option>
                    </Container.Select>
                </div>
                <div>
                    <Container.Input type="text" placeholder={'Qidiruv'}  />
                </div>
            </Container.Center>
            <Container.Bottom>
                <Container.BottomInset>
                    {
                        data.map(({id, name})=> (
                            <Container.Section key={id} onClick={()=> query.push('/ourTeamPage/talabalar/aboutTalaba')}>
                                {name}
                            </Container.Section>
                        ))
                    }
                </Container.BottomInset>
            </Container.Bottom>
        </Container>
    )
}

export default TalabalarComponent