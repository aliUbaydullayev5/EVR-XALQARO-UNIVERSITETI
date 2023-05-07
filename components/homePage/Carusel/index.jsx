import Container from './style.js'
import { Autoplay, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import Image from "next/image.js"
import univerImg from '../../../assets/image/university.jpg'
export const CaruselRigth = () => {

    const data = [
        {
            id: 1,
            img: univerImg
        },
        {
            id: 2,
            img: univerImg
        },
        {
            id: 3,
            img: univerImg
        },
    ]

    return (
        <Container>
            <Swiper autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }} modules={[Autoplay, Pagination]} className="mySwiper" >
             {
               data.map((val)=>{

                   return (
                       <SwiperSlide key={val.id} className="SwiperSlide"> <Image className="img" src={val.img}/>
                       </SwiperSlide>
                   )
                }
              )
             }
            </Swiper>
        </Container>
    );
};


export default CaruselRigth