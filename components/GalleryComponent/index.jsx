import Container from "./style";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getGalleryDataFetch} from "../../redux/slices/getGalleryData";


const GalleryComponent = () => {

    const getGalleryData = useSelector((store)=> store.getGalleryData)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getGalleryDataFetch())
    }, [])

    return (
        <Container>
            <Container.Top className="nocopy">Gallery</Container.Top>
            <Container.Bottom>
                <Container.BottomDesc>
                    <Container.Img>
                        {
                            getGalleryData?.data.map((value) => (
                                <Image
                                    alt="The guitarist in the concert."
                                    src="http://185.217.131.147:8088/api/v1/attachment/download/f162dbb4-0b09-418a-bbf4-c0eba8c35019"
                                    width={200}
                                    height={216}
                                    className="img"
                                />
                            ))
                        }

                        {/*<Image src={} alt={'dsad'} />*/}
                    </Container.Img>
                </Container.BottomDesc>
            </Container.Bottom>
        </Container>
    );
};

export default GalleryComponent;
