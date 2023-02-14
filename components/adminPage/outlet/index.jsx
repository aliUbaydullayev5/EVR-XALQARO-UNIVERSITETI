import { useRouter } from "next/router.js"
import { useState } from "react"
import { useEffect } from "react"

const AdminRootToken = ({ children }) => {
    const query = useRouter()

    useEffect(() => {
        if (!localStorage.getItem('accessToken')) {
            query.push('/admin')
        }

    }, [])


    const [securety, setSecurety] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('accessToken')) setSecurety(true)
        else setSecurety(false)
    }, [])

    return (
        <>
            {
                securety ? <>{children}</> : <div></div>
            }
        </>
    )
}

export default AdminRootToken