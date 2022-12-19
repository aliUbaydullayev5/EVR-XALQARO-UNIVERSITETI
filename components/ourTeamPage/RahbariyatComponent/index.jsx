import Container from './style'
import RowSection from "./RowSection";
import CloseIcon from '../../../assets/icon/rahmariyatCloseIcon.svg'
import {useRouter} from "next/router";
import data from "../../Mock/rahbariyat/data";

const RahbariyatComponent = () => {

    const query = useRouter()

    return(
        <Container>
            <Container.Top>
                Rahbariyat
                <div className={'closeIcon'} onClick={()=> query.push('/ourTeamPage')}>
                    <CloseIcon />
                </div>
            </Container.Top>
            <Container.Bottom>
                <Container.BottomInset>
                    {data.map(({id, status, name, workDay, phoneNumber, email, img})=> (
                        <RowSection img={img} status={status} name={name} workday={workDay} phone={phoneNumber} email={email} id={id} key={id} />
                    ))}
                </Container.BottomInset>
            </Container.Bottom>
        </Container>
    )
}

export default RahbariyatComponent