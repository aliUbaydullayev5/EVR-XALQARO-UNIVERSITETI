import Container from './style'
import RowSection from "./RowSection";
import testImg from "../../../assets/image/testImg.png";
import {useRouter} from "next/router";
import CloseIcon from '../../../assets/icon/rahmariyatCloseIcon.svg'

const OqituvchilarComponent = () => {

    const query = useRouter()


    return(
        <Container>
            <Container.Top>
                O’qituvchilar
                <div className={'closeIcon'} onClick={()=> query.push('/ourTeamPage')}>
                    <CloseIcon />
                </div>
            </Container.Top>
            <Container.Bottom>
                <Container.BottomInset>
                    <RowSection img={testImg} status={'Rektor'} name={'John Smith'} workday={'Seshanba, Payshanba, Shanba'} phone={'+998 99 123 45 67'} email={'RectorEVR@gmail.com'} />
                    <RowSection img={testImg} status={'Rektor'} name={'John Smith'} workday={'Seshanba, Payshanba, Shanba'} phone={'+998 99 123 45 67'} email={'RectorEVR@gmail.com'} />
                    <RowSection img={testImg} status={'Rektor'} name={'John Smith'} workday={'Seshanba, Payshanba, Shanba'} phone={'+998 99 123 45 67'} email={'RectorEVR@gmail.com'} />
                    <RowSection img={testImg} status={'Rektor'} name={'John Smith'} workday={'Seshanba, Payshanba, Shanba'} phone={'+998 99 123 45 67'} email={'RectorEVR@gmail.com'} />
                </Container.BottomInset>
            </Container.Bottom>
        </Container>
    )
}

export default OqituvchilarComponent