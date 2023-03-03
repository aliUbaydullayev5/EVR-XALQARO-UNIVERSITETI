import React, {useEffect, useState} from 'react'
import Root from "../../root"
import GenericAuthComponent from "../../components/auth/GenericAuthComponent"
import {useRouter} from "next/router";


const Talaba = () => {
    const router = useRouter()
    const [state, setState] = useState()

    useEffect(()=> {

        let authTalabaBool = localStorage?.getItem('talaba-token')
        let authAgentBool = localStorage?.getItem('agent-token')

        // talaba
        if(authTalabaBool?.length > 3){
            setState(false)
            router.push('/receptionPage/account')
        }else setState(true)

        // agent
        if(authAgentBool?.length > 3){
            setState(false)
            router.push('/receptionPage/account')
        }else setState(true)

    }, [])

    return(
        <Root>
            {
                state && <GenericAuthComponent tokenName={'talaba-token'}/>
            }
        </Root>
    )
}

export default Talaba