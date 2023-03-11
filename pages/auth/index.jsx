import React, {useEffect, useState} from 'react'
import Root from "../../root"
import GenericAuthComponent from "../../components/auth/GenericAuthComponent"
import {useRouter} from "next/router"


const Talaba = () => {
    const router = useRouter()
    const [state, setState] = useState()


    useEffect(()=> {

        let token = localStorage?.getItem('access-token')

        // talaba
        if(token?.length > 3){
            setState(false)
            router.push('/personalAccount/account')
        }else setState(true)

    }, [])

    return(
        <Root>
            {
                state && <GenericAuthComponent tokenName={'access-token'} />
            }
        </Root>
    )
}

export default Talaba