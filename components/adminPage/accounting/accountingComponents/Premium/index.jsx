import Container from './style'
import {MdOutlineWorkspacePremium} from "react-icons/md"

const Premium = ({subTitle}) => {
    return(
        <Container>
            <div className={'title nocopy'}>
                <MdOutlineWorkspacePremium size={'38px'} color={'#fff'} />&nbsp;&nbsp;Moliya&nbsp;<span className={'subTitle'}> &gt; {subTitle}</span>
            </div>
            <div className={'filter'}>
            </div>
            <div className={'dataArea'}>

            </div>
        </Container>
    )
}

export default Premium