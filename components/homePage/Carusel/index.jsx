import React, {useEffect, useState} from 'react';
import Container, { Carousels } from './style.js';
import data from "../../Mock/newsdata/index"
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image.js";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import ImagCar from "../../../assets/image/carusel.jpg"


export const CaruselRigth = () => {

    // const [state, setState] = useState()

    // useEffect(()=> {
    //     setState(window.innerWidth)
    // }, [])

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

  {/* <Carousels autoPlay={state < 1000 ? false : true} showThumbs={false}>
                <Carousels.CaruselImg src={ImagCar} alt='carusel' />
                <Carousels.CaruselImg src={ImagCar} alt='carusel' />
                <Carousels.CaruselImg src={ImagCar} alt='carusel' />
                <Carousels.CaruselImg src={ImagCar} alt='carusel' />
                <Carousels.CaruselImg src={ImagCar} alt='carusel' />
            </Carousels> */}