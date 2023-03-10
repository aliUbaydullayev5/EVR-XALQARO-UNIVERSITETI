import Container from './style.js';
import data from "../../Mock/newsdata/index"
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image.js";



export const CaruselRigth = () => {
    return (
        <Container>
            <Swiper autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }} modules={[Autoplay, Pagination]} className="mySwiper" >
             {
               data.map((val)=>{

                return(
                  <SwiperSlide key={val.id} className="SwiperSlide"> <Image className="img" src={val.imgs}/>  </SwiperSlide>
                )
                }
              )
             }
            </Swiper>

        </Container>
    );
};

export default CaruselRigth