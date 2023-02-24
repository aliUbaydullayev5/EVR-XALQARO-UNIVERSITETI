import Root from "../../../root";
import GenericAuthComponent from "../../../components/auth/GenericAuthComponent";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";

const Oqituvchi = () => {
    const router = useRouter()
    const [state, setState] = useState()
    let typeToken = 'oqituvchi-token'
    let urlPush = '/personalAccount/oqituvchi'

    useEffect(()=> {
        setState(localStorage?.getItem(typeToken))
    }, [])
    const pushFunc = () => router.push(urlPush)

    return(
        <Root>
            {state ? pushFunc() : <GenericAuthComponent title={'O‘qituvchi'} royxat={false} pushPath={urlPush} tokenName={typeToken} />}
        </Root>
    )
}

export default Oqituvchi