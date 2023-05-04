import Container from "./style";
import {Button} from '../../generic'
import { useRouter } from "next/router"
import {useSelector} from "react-redux"
import { Autoplay, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import {Swiper, SwiperSlide} from "swiper/react";
import NewsCard from "../NewsCard";
import React from "react";

const NewsInfoComponent = ({id}) => {

    const router = useRouter()

    const newsGet = useSelector((store)=> store?.newsGet?.data)

    const uniqData = newsGet.filter((value)=> value.id === Number(id))[0]


    return (
        <Container>
            <Container.Top>
                {
                    uniqData?.attachments.length ?
                        <Swiper autoplay={{delay: 2500, disableOnInteraction: false,}} pagination={{clickable: true,}}
                                modules={[Autoplay, Pagination]} className="mySwiper">
                            {
                                uniqData?.attachments?.map((val) => (
                                        <SwiperSlide key={val.id} className="SwiperSlide">
                                            <Container.CaruselInset imgBack={val.id}/>
                                        </SwiperSlide>
                                    )
                                )
                            }
                        </Swiper>
                        :
                        <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <h1>Img Not Found</h1>
                        </div>
                }

            </Container.Top>
            <Container.Bottom>
                <h1>{uniqData?.title}</h1>
                <p>
                    {uniqData?.description}
                </p>
                <Button onclick={()=> router.push(`/news`)} width={'300px'} size={'20px'} mwidth={'300px'} mheight={'50px'} height={'50px'}>Ortga Qaytish</Button>
            </Container.Bottom>
            <Container.Right>
                {newsGet?.map((value) => {
                    return <NewsCard data={value} key={value.id}/>;
                })}
            </Container.Right>
        </Container>
    );
}

// query.push(`/news`)

export default NewsInfoComponent