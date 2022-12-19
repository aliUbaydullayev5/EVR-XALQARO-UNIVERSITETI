import {useRouter} from "next/router";
import {useEffect} from "react";

const Index = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/firstPage')
  }, [])
}

export default Index