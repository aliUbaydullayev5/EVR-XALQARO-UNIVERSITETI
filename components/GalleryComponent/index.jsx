import Container from "./style"
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react"
import {getGalleryDataFetch} from "../../redux/slices/getGalleryData"
import Image from "next/image";

const GalleryComponent = () => {

    const [data,setData] =useState([])
    const getGalleryData = useSelector((store)=> store.getGalleryData)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getGalleryDataFetch())
    }, [])

    useEffect(() => {
        if (getGalleryData.status === 'success') setData(getGalleryData.data)
    }, [getGalleryData])

    return (
        <Container>
            <Container.Top className="nocopy">Gallery</Container.Top>
            <Container.Bottom>
                <Container.BottomDesc>
                    <Container.Img>
                        {
                            getGalleryData.status === 'success' && data.map((value) => (
                                    <div key={value?.id}>
                                        <Image
                                            alt="The guitarist in the concert."
                                            src={`http://185.217.131.147:8088/api/v1/attachment/download/${value?.attachmentId}`}
                                            width={200}
                                            height={160}
                                            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
                                            style={{height: '100%', width: '100%'}}
                                            className={"img"}
                                        />
                                        <div>
                                            <h3>{value.title.split('').length > 50 ? value.title.split('').slice(0, 20).join() : value.title}</h3>
                                            <p>{value.description.split('').length > 50 ? value.description.split('').slice(0, 25).join()+'....' : value.description}</p>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </Container.Img>
                </Container.BottomDesc>
            </Container.Bottom>
        </Container>
    )
}


export default GalleryComponent;
