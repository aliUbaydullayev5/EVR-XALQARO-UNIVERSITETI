import Container from "./style";
import CloseIcon from '../../../assets/icon/rahmariyatCloseIcon.svg'
import {useRouter} from "next/router";

const GuruhlarComponent = () => {

    const query = useRouter()

    const data = [
        {id: 0, title: 'EK-100'},
        {id: 1, title: 'EK-101'},
        {id: 2, title: 'EK-103'},
        {id: 3, title: 'NG-100'},
        {id: 4, title: 'NG-101'},
        {id: 5, title: 'NG-103'},
        {id: 6, title: 'MK-102'},
        {id: 7, title: 'LG-101'},
        {id: 8, title: 'BA-101'},
        {id: 9, title: 'MT-101'},
        {id: 10, title: 'BT-101'},
        {id: 11, title: 'FT-101'},
        {id: 12, title: 'JS-104'},
        {id: 13, title: 'JM-102'},
        {id: 14, title: 'TR-101'},
        {id: 15, title: 'AT-102'},
        {id: 16, title: 'PP-102'},
        {id: 17, title: 'MI-103'},
        {id: 18, title: 'YX-102'},
        {id: 19, title: 'PP-103'},
        {id: 20, title: 'EK-101'},
        {id: 21, title: 'EK-103'},
        {id: 22, title: 'NG-100'},
        {id: 23, title: 'NG-101'},
        {id: 24, title: 'NG-103'},
        {id: 25, title: 'MK-102'},
        {id: 26, title: 'LG-101'},
        {id: 27, title: 'BA-101'},
        {id: 28, title: 'MT-101'},
        {id: 29, title: 'BT-101'},
        {id: 30, title: 'FT-101'},
        {id: 31, title: 'JS-104'},
        {id: 32, title: 'JM-102'},
        {id: 33, title: 'TR-101'},
        {id: 34, title: 'AT-102'},
        {id: 35, title: 'PP-102'},
        {id: 36, title: 'MI-103'},
        {id: 37, title: 'YX-102'},
        {id: 38, title: 'PP-103'},
    ]



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
                    <Container.Select  mwidth={'62px'} width={'204px'}>
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
                    <Container.Select mwidth={'65px'}  width={'200px'}>
                        <option value="">Ta’lim yo’nalishi</option>
                        <option value="">Kechki</option>
                        <option value="">Kunduzgi</option>
                        <option value="">Sirtqi talim</option>
                    </Container.Select>
                </div>
                <div>
                    <Container.Input mwidth={'49px'} type="text" placeholder={'Qidiruv'}  />
                </div>
            </Container.Center>
            <Container.Bottom>
                <Container.BottomInset>
                    {
                        data.map(({id, title})=> (
                            <Container.Section key={id}>
                                {title}
                            </Container.Section>
                        ))
                    }
                </Container.BottomInset>
            </Container.Bottom>
        </Container>
    )
}

export default GuruhlarComponent