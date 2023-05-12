import Container from './style.js'
import { Autoplay, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import Image from "next/image.js"
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react"
import {homeCarouselFetch} from "../../../redux/slices/homeCarusel"
export const CaruselRigth = () => {

    const dispatch = useDispatch()
    const homeCarousel = useSelector((store)=> store.homeCarousel)

    const [imageCarousel, setImageCarousel] = useState([])

    useEffect(()=> {
        if(!homeCarousel.data.length) dispatch(homeCarouselFetch())
    }, [])

    useEffect(()=> {
        if(homeCarousel.status === 'success') setImageCarousel(homeCarousel.data)
    }, [homeCarousel])

    return (
        <Container>
            <Swiper autoplay={{delay: 2500, disableOnInteraction: false,}} pagination={{clickable: true,}}
                    modules={[Autoplay, Pagination]} className="mySwiper">
                {
                    imageCarousel.map((val) => {
                            return (
                                <SwiperSlide key={val?.id} className="SwiperSlide">
                                    <Image
                                        alt="The guitarist in the concert."
                                        src={`http://evruniversity.uz/api/v1/attachment/download/${val?.id}`}
                                        width={200}
                                        height={160}
                                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
                                        style={{height: '100%', width: '100%'}}
                                        className={"img"}
                                    />
                                </SwiperSlide>
                            )
                        }
                    )
                }
            </Swiper>
        </Container>
    )
}


export default CaruselRigth