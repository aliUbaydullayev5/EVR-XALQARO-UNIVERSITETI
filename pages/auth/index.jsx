import React, {useEffect, useState} from 'react'
import Root from "../../root"
import GenericAuthComponent from "../../components/auth/GenericAuthComponent"
import {useRouter} from "next/router";


const Talaba = () => {
    const router = useRouter()
    const [state, setState] = useState()

    useEffect(()=> {
        let authBool = localStorage?.getItem('talaba-token')
        if(authBool?.length > 3){
            setState(false)
            router.push('/receptionPage/account')
        }else{
            setState(true)
        }
    }, [])

    return(
        <Root>
            {
                state && <GenericAuthComponent title={'Kirish'} pushPath={'/personalAccount/talaba'} royxat={false} tokenName={'talaba-token'}/>
            }
        </Root>
    )
}

export default Talaba