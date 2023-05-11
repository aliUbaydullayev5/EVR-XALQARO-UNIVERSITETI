import NewsInfoComponent from '../../../components/News/NewsInfo'
import Root from '../../../root'
import {useRouter} from "next/router";

export const NewsInset = () => {

    const router = useRouter()

    const {id} = router.query

    return (
        <Root>
            <NewsInfoComponent id={id} />
        </Root>
    )
};
export default NewsInset