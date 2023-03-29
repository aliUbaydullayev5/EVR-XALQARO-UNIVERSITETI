import React, {useEffect} from "react"
import Container, { ContainerDow } from "./style.js"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Down from "../../../assets/icon/personDown.svg"
import Button from "../../generic/Button"
import Close from '../../../assets/icon/rahmariyatCloseIcon.svg'
import { useRouter } from "next/router.js"
import { Autoplay, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import Image from "next/image.js"
import {useDispatch, useSelector} from "react-redux";
import {aboutGetFetch} from "../../../redux/sliceAdmin/about-us/getAbout";
import {API_GLOBAL} from "../../../globalApi";
import {startMessage} from "../../../redux/slices/message";


// export const dataNews = [
//     {
//         id: 1,
//         name: " Evr Xalqaro Universitetida Qabul Davom etmoqda",
//         namechild: "Batafsil",
//         date: '07.12.2022',
//         img,
//         imgs,
//         views: '1250',
//     },
//     {
//         id: 2,
//         name: " Pdp Xalqaro Universitetida Qabul Davom etmoqda",
//         namechild: "Batafsil",
//         date: '07.12.2022',
//         img,
//         imgs,
//         views: '1250'
//     },
//     {
//         id: 3,
//         name: " Milliy Universitetida Qabul Davom etmoqda",
//         namechild: "Batafsil",
//         date: '07.12.2022',
//         img,
//         imgs,
//         views: '1250'
//     },
//
//     {
//         id: 4,
//         name: " Tatu Universitetida Qabul Davom etmoqda",
//         namechild: "Batafsil",
//         date: '07.12.2022',
//         img,
//         imgs,
//         views: '125'
//     },
//     {
//         id: 5,
//         name: " Nizomiy Universitetida Qabul Davom etmoqda",
//         namechild: "Batafsil",
//         date: '07.12.2022',
//         img,
//         imgs,
//         views: '1250'
//     },
//     {
//         id: 6,
//         name: " Adu Universitetida Qabul Davom etmoqda",
//         namechild: "Batafsil",
//         date: '07.12.2022',
//         img,
//         imgs,
//         views: '1250'
//     },
//     {
//         id: 7,
//         name: " Namdu Universitetida Qabul Davom etmoqda",
//         namechild: "Batafsil",
//         date: '07.12.2022',
//         img,
//         imgs,
//         views: '1250'
//     },
//     {
//         id: 8,
//         name: " Deputat Universitetida Qabul Davom etmoqda",
//         namechild: "Batafsil",
//         date: '07.12.2022',
//         img,
//         imgs,
//         views: '1250'
//     },
//     {
//         id: 9,
//         name: " Najot Universitetida Qabul Davom etmoqda",
//         namechild: "Batafsil",
//         date: '07.12.2022',
//         img,
//         imgs,
//         views: '125'
//     },
//     {
//         id: 10,
//         name: " Webbrain Xalqaro Universitetida Qabul Davom etmoqda",
//         namechild: "Batafsil",
//         date: '07.12.2022',
//         img,
//         imgs,
//         views: '1250'
//     },
//
// ]
// export default dataNews


export const AboutCaruselComp = () => {
    const query = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(aboutGetFetch())
    }, [])

    const aboutGetData = useSelector((store)=> store.aboutGetData)

    useEffect(()=> {
        if(aboutGetData.status === 'error') dispatch(startMessage({type: 'error', time: 3, message: aboutGetData.message}))
    }, [aboutGetData])

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
                            aboutGetData.status === 'success' && aboutGetData.data?.map((val) => (
                                <SwiperSlide
                                    key={val.id}
                                    className="SwiperSlide"
                                >
                                    <p className={'text'}>{val.text}</p>
                                    <Image
                                        alt="img"
                                        src={`http://185.217.131.147:8088/api/v1/attachment/download/${val?.photoId}`}
                                        width={60}
                                        height={60}

                                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
                                        style={{height: '100%', width: '100%'}}
                                        className={"img"}
                                    />
                                </SwiperSlide>
                            ))
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

// const data = [
//     {
//       idL: 1,
//       element: (
//         <CaruselContainer>
//           <Carousels.CaruselImg src={imagCar} alt="carusel" />
//           <Carousels.CaruselImg />
//           <p>
//             Lorem ipsum dolor sit amet consectetur. Consequat neque cursus lacus
//             bibendum. Accumsan vestibulum eu aliquam lectus nunc scelerisque a
//             semper sed.
//           </p>
//         </CaruselContainer>
//       ),
//     },
//     {
//       idL: 2,
//       element: (
//         <CaruselContainer>
//           <p>
//             Lorem ipsum dolor sit amet consectetur. Consequat neque cursus lacus
//             bibendum. Accumsan vestibulum eu aliquam lectus nunc scelerisque a
//             semper sed.
//           </p>
//         </CaruselContainer>
//       ),
//     },
//     {
//       idL: 3,
//       element: (
//         <CaruselContainer>
//           <Carousels.CaruselImg src={imagCar} alt="carusel" />
//           <p>
//             Lorem ipsum dolor sit amet consectetur. Consequat neque cursus lacus
//             bibendum. Accumsan vestibulum eu aliquam lectus nunc scelerisque a
//             semper sed.
//           </p>
//         </CaruselContainer>
//       ),
//     },
//   ];
