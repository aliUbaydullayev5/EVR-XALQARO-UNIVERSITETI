import Component from './style'
import Close from '../../../assets/icon/close.svg'
import Person from '../../../assets/icon/Vector.svg'
import {Button} from "../../generic";
import {useRouter} from "next/router";

const PersonComponent = ({onclick}) => {

    const router = useRouter()

    return(
        <Component>

            <Close className={'closeIcon'} onClick={()=> onclick()} />
            <div className={'iconArea'}>
                <Person className={'icon'} />
                <p className={'title'}>Shaxsiy kabinet</p>
            </div>
            <div>
                <Button msize={'20px'} uppercase={true} mheight={'37px'} mweight={'162px'} height={'50px'} width={'202px'} size={'24px'} onclick={()=> router.push('/auth')} >Kirish</Button>
            </div>
        </Component>
    )
}

export default PersonComponent