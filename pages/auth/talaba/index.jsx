import React, {useEffect, useState} from 'react'
import Root from "../../../root"
import GenericAuthComponent from "../../../components/auth/GenericAuthComponent"
import {useRouter} from "next/router";


const Talaba = () => {
    const router = useRouter()
    const [state, setState] = useState(localStorage?.getItem('talaba-token'))

    useEffect(()=> {
        setState(localStorage?.getItem('talaba-token'))
    }, [])
    const pushFunc = () => router.push('/personalAccount/talaba')

    return(
        <Root>
            {
                state
                    ?
                    pushFunc()
                    :
                    <GenericAuthComponent title={'Talaba'} pushPath={'/personalAccount/talaba'} royxat={false} tokenName={'talaba-token'}/>
            }
        </Root>
    )
}

export default Talaba