import React, {useEffect, useState} from "react";
import Container, { ContainerDow } from "./style.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Down from "../../../assets/icon/personDown.svg";
import Button from "../../generic/Button";
import Close from '../../../assets/icon/rahmariyatCloseIcon.svg'
import { useRouter } from "next/router.js";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {useDispatch,useSelector} from "react-redux";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image.js";
import {aboutGet} from "../../../redux/slices/aboutUs/getAbout";
import { Spin } from 'antd';


export const AboutCaruselComp = () => {
  const query = useRouter()
  const dispatch =useDispatch()

  const [data,setData]=useState()
  const AboutGetData = useSelector((store)=> store.AboutGetData)

  useEffect(()=>{
      dispatch(aboutGet())
  },[aboutGet])

    useEffect(() => {
        if (AboutGetData.status === "success")
            setData(AboutGetData.data);
    }, [AboutGetData]);
    useEffect(() => {
        if (AboutGetData.status === "loading")
            setData(AboutGetData.data);
    }, [AboutGetData]);

    return (
        <Container>
            <Container.Header>Biz haqimizda
                <Close className={'icon'} onClick={() => query.push('/homePage')}/>
            </Container.Header>

            <Container.MainCarousel>
                <Container.Img>
                    <Swiper autoplay={{delay: 2500, disableOnInteraction: false,}} pagination={{clickable: true,}}
                            modules={[Autoplay, Pagination]} className="mySwiper">
                        {AboutGetData?.status === "loading" ? <span><Spin/></span>
                           : data?.length?
                            data?.map((val) => {

                                return (
                                    <SwiperSlide key={val.id} className="SwiperSlide"><p>{val.text}</p>
                                        <Image
                                         width={200}
                                         height={100}
                                         className="img" alt="noImg"
                                         src={`http://185.217.131.147:8088/api/v1/attachment/download/${val?.photoId}`}
                                        />
                                    </SwiperSlide>
                                )
                            }):<p style={{color:"#fff",textAlign:"center"}}>no data</p>
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