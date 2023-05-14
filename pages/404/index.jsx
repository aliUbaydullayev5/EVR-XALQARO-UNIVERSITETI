import {useRouter} from "next/router";

const ErrorPage404 = () => {
    const router = useRouter()

    return(
        <div>
            <h1>404 Page not fount</h1>
            <button onClick={()=> router.push('/homePage')}>Home Page</button>
        </div>
    )
}

export default ErrorPage404