import React, {useEffect, useState} from "react";
import Container, { ContainerDow } from "./style.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Down from "../../../assets/icon/personDown.svg";
import Button from "../../generic/Button";
import Close from '../../../assets/icon/rahmariyatCloseIcon.svg'
import { useRouter } from "next/router.js";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image.js";
import {aboutGetUser} from "../../../redux/slices/aboutUsGet/getAbout.js";
import {useDispatch,useSelector} from "react-redux";

export const AboutCaruselComp = () => {
    const dispatch = useDispatch()
    const query = useRouter()

    const [dataList,setDatalist]=useState([])

  const aboutGetUserData = useSelector((store)=> store.aboutGetUserData)

    useEffect(()=> {
        dispatch(aboutGetUser())
    }, [aboutGetUser])

    useEffect(() => {
        if (aboutGetUserData.status === "success") setDatalist(aboutGetUserData.data)
    }, [aboutGetUserData]);



  return (
    <Container>
      <Container.Header>Biz haqimizda<Close className={'icon'} onClick={() => query.push('/homePage')} /></Container.Header>
      <Container.MainCarousel>
        <Container.Img>
        <Swiper autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }} modules={[Autoplay, Pagination]} className="mySwiper" >
         {
             dataList?.map((val)=>(
                <SwiperSlide key={val.id} className="SwiperSlide"> <p>{val.text}</p> <Image alt="The guitarist in the concert." className="img" width={200} height={200}  src={`http://185.217.131.147:8088/api/v1/attachment/download/${val?.photoId}`}/>  </SwiperSlide>
             ))
         }
        </Swiper>
        </Container.Img>
        <ContainerDow>
          <a href="" download={true}>
          <Button msize={"13px"} mheight={"26px"} mwidth={"143px"} radius={"5px"} size={"20px"} height={"44px"} width={"240px"}>
            <p>Litsenziya</p> &nbsp; &nbsp;
            <Down />
          </Button>
          </a>
          <a href="" download={true}>
          <Button msize={"13px"} mheight={"26px"} mwidth={"143px"} radius={"5px"} size={"20px"} height={"44px"} width={"240px"}>
            <p>O'tish bali</p> &nbsp; &nbsp;
            <Down />
          </Button>
          </a>
          <a href="" download={true}>
          <Button msize={"10px"} mheight={"26px"} mwidth={"143px"} radius={"5px"} size={"20px"} height={"44px"} width={"346px"}>
            <p>Kontrakt ma'lumotlari</p> &nbsp; &nbsp;
            <Down />
          </Button>
          </a>
          <a href="" download={true}>
          <Button msize={"10px"} mheight={"26px"} mwidth={"143px"} radius={"5px"} size={"20px"} height={"44px"} width={"304px"}>
            <p>O'qish davomiyligi</p> &nbsp; &nbsp;
            <Down />
          </Button>
          </a>
        </ContainerDow>
      </Container.MainCarousel>
    </Container>
  );
    return (
        <Container>
            <Container.Header>Biz haqimizda
                <Close className={'icon'} onClick={() => query.push('/homePage')}/>
            </Container.Header>

            <Container.MainCarousel>
                <Container.Img>
                    <Swiper autoplay={{delay: 2500, disableOnInteraction: false,}} pagination={{clickable: true,}}
                            modules={[Autoplay, Pagination]} className="mySwiper">
                        {
                            data.map((val) => {

                                return (
                                    <SwiperSlide key={val.id} className="SwiperSlide"><p>{val.name}</p> <Image
                                        className="img" src={val.imgs}/> </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </Container.Img>
                <ContainerDow>
                    <a href="" download={true}>
                        <Button msize={"13px"} mheight={"26px"} mwidth={"143px"} radius={"5px"} size={"20px"}
                                height={"44px"} width={"240px"}>
                            <p>Litsenziya</p> &nbsp; &nbsp;
                            <Down/>
                        </Button>
                    </a>
                    <a href="" download={true}>
                        <Button msize={"13px"} mheight={"26px"} mwidth={"143px"} radius={"5px"} size={"20px"}
                                height={"44px"} width={"240px"}>
                            <p>O'tish bali</p> &nbsp; &nbsp;
                            <Down/>
                        </Button>
                    </a>
                    <a href="" download={true}>
                        <Button msize={"10px"} mheight={"26px"} mwidth={"143px"} radius={"5px"} size={"20px"}
                                height={"44px"} width={"346px"}>
                            <p>Kontrakt ma'lumotlari</p> &nbsp; &nbsp;
                            <Down/>
                        </Button>
                    </a>
                    <a href="" download={true}>
                        <Button msize={"10px"} mheight={"26px"} mwidth={"143px"} radius={"5px"} size={"20px"}
                                height={"44px"} width={"304px"}>
                            <p>O'qish davomiyligi</p> &nbsp; &nbsp;
                            <Down/>
                        </Button>
                    </a>
                </ContainerDow>
            </Container.MainCarousel>
        </Container>
    );
};

export default AboutCaruselComp;